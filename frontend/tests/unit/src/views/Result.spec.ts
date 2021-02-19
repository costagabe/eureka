import { createLocalVue, shallowMount } from '@vue/test-utils'
import Result from '@/views/Result.vue'
import axios from 'axios'
import Vue from 'vue'
import Address from '@/models/Address'

const data: Address = {
  cep: '76815800',
  logradouro: 'Rodovia BR-364',
  complemento: 'do km 4,501 ao km 6,501 - lado ímpar',
  bairro: 'Cidade Jardim',
  localidade: 'Porto Velho',
  uf: 'RO'
}

const data404 = {
  data: {
    message: 'Não foi possível encontrar o CEP'
  }
}
jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>
const mockOkResponse = Promise.resolve({
  status: 200,
  data
})
// eslint-disable-next-line prefer-promise-reject-errors
const mockNonexistentObjectResponse = Promise.reject(({
  status: 404,
  response: {
    data
  }
}))

function createWrapper () {
  const localVue = createLocalVue()

  return shallowMount(Result, {
    localVue,
    mocks: {
      $route: {
        params: {
          cep: '00000000'
        }
      },
      $router: {
        push: jest.fn()
      },
      $swal: jest.fn()
    }
  })
}

describe('Result.vue', () => {
  it('Result.vue should be rendered correctly', () => {
    const wrapper = createWrapper()
    expect(wrapper.find('basic-card-stub').exists()).toBeTruthy()
  })

  it('Should return data correctly from api when mounted with valid CEP', async () => {
    mockedAxios.get.mockReturnValue(mockOkResponse)
    const wrapper: any = createWrapper()

    await Vue.nextTick()

    expect(wrapper.vm.address).toEqual(data)
  })

  it('Should return error message from api when mounted with invalid CEP', async () => {
    mockedAxios.get.mockReturnValue(mockNonexistentObjectResponse)
    const wrapper: any = createWrapper()

    await Vue.nextTick()

    expect(wrapper.vm.address).toEqual(null)
    expect(wrapper.vm.$router.push).toBeCalled()
    expect(wrapper.vm.$swal).toBeCalled()
  })
})

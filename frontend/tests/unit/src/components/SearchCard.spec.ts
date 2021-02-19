import { createLocalVue, shallowMount } from '@vue/test-utils'
import SearchCard from '@/components/SearchCard.vue'
import Vue from 'vue'

function createWrapper (data: object) {
  const localVue = createLocalVue()

  return shallowMount(SearchCard, {
    localVue,
    mocks: {
      $router: {
        push: jest.fn()
      },
      $refs: {
        form: {
        }
      }
    },
    data: () => data
  })
}

describe('SearchCard.vue', () => {
  it('SearchCard.vue should be rendered correctly', () => {
    const wrapper = shallowMount(SearchCard, {
      propsData: {
        title: 'title'
      }
    })
    expect(wrapper.find('v-form-stub').exists()).toBeTruthy()
    expect(wrapper.find('basic-card-stub').exists()).toBeTruthy()
  })

  describe('cleanCep computed property', () => {
    it('should return correctly', async () => {
      const wrapper: any = createWrapper({
        cep: '12345-678'
      })
      await Vue.nextTick()

      expect(wrapper.vm.cleanCep).toEqual('12345678')
    })
  })

  describe('search method', () => {
    it('should search when form is valid', async () => {
      const wrapper: any = createWrapper({
        cep: '12345-678'
      })
      wrapper.vm.$refs.form.validate = jest.fn(() => true)

      await wrapper.vm.search()

      expect(wrapper.vm.$router.push).toBeCalled()
    })

    it('should not search when form is invalid', async () => {
      const wrapper: any = createWrapper({
        cep: '12345-67'
      })
      wrapper.vm.$refs.form.validate = jest.fn(() => false)

      await wrapper.vm.search()

      expect(wrapper.vm.$router.push).not.toBeCalled()
    })
  })
})

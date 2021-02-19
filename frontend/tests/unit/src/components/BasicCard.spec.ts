import { shallowMount } from '@vue/test-utils'
import BasicCard from '@/components/BasicCard.vue'

describe('BasicCard.vue', () => {
  it('BasicCard.vue should be rendered correctly', () => {
    const wrapper = shallowMount(BasicCard, {
      propsData: {
        title: 'title'
      }
    })
    expect(wrapper.find('v-card-stub').exists()).toBeTruthy()
    expect(wrapper.find('v-app-bar-stub').exists()).toBeTruthy()
    expect(wrapper.find('v-card-text-stub').exists()).toBeTruthy()
  })
})

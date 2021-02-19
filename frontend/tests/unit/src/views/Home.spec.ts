import { shallowMount } from '@vue/test-utils'
import Home from '@/views/Home.vue'

describe('Home.vue', () => {
  it('Home.vue should be rendered correctly', () => {
    const wrapper = shallowMount(Home)
    expect(wrapper.find('search-card-stub').exists()).toBeTruthy()
  })
})

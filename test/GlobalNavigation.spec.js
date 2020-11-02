import { mount } from '@vue/test-utils'
import GlobalNavigation from '@/components/Global/GlobalNavigation.vue'

describe('GlobalNavigation', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(GlobalNavigation)
    expect(wrapper.vm).toBeTruthy()
  })

  test('has default class', () => {
    const wrapper = mount(GlobalNavigation);
    expect(wrapper.classes('global-nav')).toBe(true);
  })
})

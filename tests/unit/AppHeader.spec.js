import AppHeader from '@/components/AppHeader';
import { mount } from '@vue/test-utils';

// describe = creates a block of tests, aka a "test suite"
describe('AppHeader', () => {
  // test = creates a jest test
  test('If user is not logged in, do not show logout button', () => {
    const wrapper = mount(AppHeader);
    // expect = an assertion about expected outcome
    expect(wrapper.find('button').isVisible()).toBe(false); // toBe is a jest matcher
  });
  test('If user is logged in, do not show logout button', async () => {
    const wrapper = mount(AppHeader);
    wrapper.setData({ loggedIn: true });

    await wrapper.vm.$nextTick();
    // expect = an assertion about expected outcome
    expect(wrapper.find('button').isVisible()).toBe(true); // toBe is a jest matcher
  });
});

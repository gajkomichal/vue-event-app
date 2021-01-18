import { mount } from '@vue/test-utils';
import Home from '@/views/Home.vue';

describe('Home.vue', () => {
  it('contain h1', () => {
    const wrapper = mount(Home);
    expect(wrapper.find(`[data-testid='header']`));
  });
});

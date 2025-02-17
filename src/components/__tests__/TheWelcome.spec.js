import { mount } from '@vue/test-utils';
import TheWelcome from '@/components/TheWelcome.vue';
import WelcomeItem from '@/components/WelcomeItem.vue';

describe('TheWelcome.vue', () => {
  it('renders WelcomeItem components', () => {
    const wrapper = mount(TheWelcome);
    const welcomeItems = wrapper.findAllComponents(WelcomeItem);
    expect(welcomeItems.length).toBe(5); // Assuming there are 5 WelcomeItem components
  });

  it('checks if specific headings exist', () => {
    const wrapper = mount(TheWelcome);
    const headings = [
      'Create Vue project with Vite',
      'Create Github repository',
      'Write test',
      'Create workflow',
      'Enjoy Github page',
    ];
    headings.forEach((heading) => {
      expect(wrapper.text()).toContain(heading);
    });
  });

  it('checks if links exist', () => {
    const wrapper = mount(TheWelcome);
    const links = [
      'https://vuejs.org/',
      'https://github.com/new',
      'https://www.vitest.dev/',
      'https://www.cypress.io/'
    ];
    links.forEach((link) => {
      expect(wrapper.html()).toContain(link);
    });
  });
});

import { mount } from '@vue/test-utils';
import WelcomeItem from '@/components/WelcomeItem.vue';

describe('WelcomeItem.vue', () => {
  it('renders slots correctly', () => {
    const wrapper = mount(WelcomeItem, {
      slots: {
        icon: '<span class="test-icon">🔧</span>',
        heading: 'Test Heading',
        default: 'This is a test description.'
      }
    });

    expect(wrapper.find('.test-icon').exists()).toBe(true);
    expect(wrapper.html()).toContain('Test Heading');
    expect(wrapper.text()).toContain('This is a test description.');
  });

  it('renders structure correctly', () => {
    const wrapper = mount(WelcomeItem, {
      slots: {
        heading: 'Another Heading',
      }
    });

    expect(wrapper.find('h3').text()).toBe('Another Heading');
    expect(wrapper.find('i').exists()).toBe(true);
  });

  it('applies styles correctly', async () => {
    const wrapper = mount(WelcomeItem);
    const item = wrapper.find('.item');
    expect(item.exists()).toBe(true);
    expect(item.element.classList.contains('item')).toBe(true);
  });
});

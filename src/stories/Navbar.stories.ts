import type { Meta, StoryObj } from '@storybook/react-vite';

import { Navbar } from './Navbar';

const meta = {
  title: 'Example/Navbar',
  component: Navbar,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    brand: { control: 'text' },
    links: { control: 'object' },
    loginButton: { control: 'object' },
  },
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    brand: "BsRealty Website",
    links: [
      { label: 'Home', href: '/' },
      { label: 'About', href: '/about' },
      { label: 'Contact', href: '/contact' },
    ],
    loginButton: { label: 'Login', href: '/login' },
  },
};

export const WithDropdown: Story = {
  args: {
    brand: 'My App',
    links: [
      { label: 'Home', href: '/' },
      {
        label: 'Solutions',
        children: [
          { label: 'Solution 1', href: '/solution1' },
          { label: 'Solution 2', href: '/solution2' },
          { label: 'Solution 3', href: '/solution3' },
        ],
      },
      { label: 'Products', href: '/products' },
      { label: 'Contact', href: '/contact' },
    ],
    loginButton: { label: 'Login', href: '/login' },
  },
};
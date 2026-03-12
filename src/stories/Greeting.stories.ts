import type { Meta, StoryObj } from '@storybook/react-vite';

import { Greeting } from './Greeting';

const meta = {
  title: 'Example/Greeting',
  component: Greeting,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    greeting: { control: 'text' },
    name: { control: 'text' },
  },
} satisfies Meta<typeof Greeting>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: 'World',
  },
};

export const CustomGreeting: Story = {
  args: {
    name: 'Alice',
    greeting: 'Hi',
  },
};
import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { BSRealtySearchbar } from './BSRealtySearchbar';

const meta = {
  title: 'Components/Searchbar',
  component: BSRealtySearchbar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    placeholder: { control: 'text' },
    value: { control: 'text' },
  },
  args: {
    onSearch: fn(),
    onChange: fn(),
  },
} satisfies Meta<typeof BSRealtySearchbar>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Default — shows placeholder (Frame 13 state) */
export const Default: Story = {};

/** Active — user has typed something (Frame 12 state) */
export const WithValue: Story = {
  args: {
    value: 'New York',
  },
};

/** Custom placeholder */
export const CustomPlaceholder: Story = {
  args: {
    placeholder: 'Search properties in your area...',
  },
};

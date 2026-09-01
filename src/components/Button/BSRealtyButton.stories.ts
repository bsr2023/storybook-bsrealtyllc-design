import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { BSRealtyButton } from './BSRealtyButton';

const meta = {
  title: 'Components/Button',
  component: BSRealtyButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'text'],
      description: 'Button visual variant',
    },
    size: {
      control: 'select',
      options: ['xs', 'xs-medium', 'small', 'medium', 'large', 'xl', '2xl'],
      description: 'Button size',
    },
    disabled: { control: 'boolean' },
    showLeftIcon: { control: 'boolean' },
    showRightIcon: { control: 'boolean' },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof BSRealtyButton>;

export default meta;
type Story = StoryObj<typeof meta>;

// ── Primary ──────────────────────────────────────────────────

export const PrimaryMedium: Story = {
  args: {
    variant: 'primary',
    size: 'medium',
    label: 'Buttons',
  },
};

export const PrimarySmall: Story = {
  args: {
    variant: 'primary',
    size: 'small',
    label: 'Buttons',
  },
};

export const PrimaryLarge: Story = {
  args: {
    variant: 'primary',
    size: 'large',
    label: 'Buttons',
  },
};

export const PrimaryXL: Story = {
  args: {
    variant: 'primary',
    size: 'xl',
    label: 'Buttons',
  },
};

export const PrimaryDisabled: Story = {
  args: {
    variant: 'primary',
    size: 'medium',
    label: 'Buttons',
    disabled: true,
  },
};

// ── Secondary ─────────────────────────────────────────────────

export const SecondaryMedium: Story = {
  args: {
    variant: 'secondary',
    size: 'medium',
    label: 'Buttons',
  },
};

export const SecondaryLarge: Story = {
  args: {
    variant: 'secondary',
    size: 'large',
    label: 'Buttons',
  },
};

export const SecondaryDisabled: Story = {
  args: {
    variant: 'secondary',
    size: 'medium',
    label: 'Buttons',
    disabled: true,
  },
};

// ── Text ──────────────────────────────────────────────────────

export const TextMedium: Story = {
  args: {
    variant: 'text',
    size: 'medium',
    label: 'Buttons',
  },
};

export const TextLarge: Story = {
  args: {
    variant: 'text',
    size: 'large',
    label: 'Buttons',
  },
};

export const TextDisabled: Story = {
  args: {
    variant: 'text',
    size: 'medium',
    label: 'Buttons',
    disabled: true,
  },
};

// ── Icon variations ───────────────────────────────────────────

export const NoIcons: Story = {
  args: {
    variant: 'primary',
    size: 'medium',
    label: 'Buttons',
    showLeftIcon: false,
    showRightIcon: false,
  },
};

export const LeftIconOnly: Story = {
  args: {
    variant: 'primary',
    size: 'medium',
    label: 'Buttons',
    showLeftIcon: true,
    showRightIcon: false,
  },
};

export const RightIconOnly: Story = {
  args: {
    variant: 'primary',
    size: 'medium',
    label: 'Buttons',
    showLeftIcon: false,
    showRightIcon: true,
  },
};

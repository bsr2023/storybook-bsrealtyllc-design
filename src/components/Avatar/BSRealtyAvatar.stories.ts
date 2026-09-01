import type { Meta, StoryObj } from '@storybook/react-vite';
import { BSRealtyAvatar } from './BSRealtyAvatar';

const meta = {
  title: 'Components/Avatar',
  component: BSRealtyAvatar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    name: {
      control: 'text',
      description: 'Full name — used for alt text and the initials fallback',
    },
    src: {
      control: 'text',
      description: 'Image URL (omit to show initials only)',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl'],
      description: 'Avatar size',
    },
  },
} satisfies Meta<typeof BSRealtyAvatar>;

export default meta;
type Story = StoryObj<typeof meta>;

// ── Initials fallback (no src) ──────────────────────────────────

export const InitialsSmall: Story = {
  args: { name: 'Jane Doe', size: 'sm' },
};

export const InitialsMedium: Story = {
  args: { name: 'Jane Doe', size: 'md' },
};

export const InitialsLarge: Story = {
  args: { name: 'Jane Doe', size: 'lg' },
};

export const InitialsXL: Story = {
  args: { name: 'Jane Doe', size: 'xl' },
};

export const SingleName: Story = {
  args: { name: 'Cher', size: 'lg' },
};

// ── With image ────────────────────────────────────────────────

export const WithImage: Story = {
  args: {
    name: 'Jane Doe',
    src: 'https://i.pravatar.cc/128?img=47',
    size: 'lg',
  },
};

export const BrokenImageFallsBackToInitials: Story = {
  args: {
    name: 'Jane Doe',
    src: 'https://example.invalid/broken.jpg',
    size: 'lg',
  },
};

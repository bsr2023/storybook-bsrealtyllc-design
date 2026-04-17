import type { Meta, StoryObj } from '@storybook/react-vite';
import { BSRealtyFAQ } from './BSRealtyFAQ';

const meta = {
  title: 'Components/FAQ',
  component: BSRealtyFAQ,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    defaultOpen: { control: 'boolean' },
    question: { control: 'text' },
    answer: { control: 'text' },
  },
} satisfies Meta<typeof BSRealtyFAQ>;

export default meta;
type Story = StoryObj<typeof meta>;

// Default — collapsed (matches Figma "Default" variant)
export const Collapsed: Story = {
  args: {
    question: 'What is BS Realty?',
    answer:
      'BS Realty is a comprehensive real estate platform that helps buyers, sellers, and renters connect with the right properties and agents.',
    defaultOpen: false,
  },
};

// Expanded — answer visible (matches Figma "Variant2")
export const Expanded: Story = {
  args: {
    question: 'What is BS Realty?',
    answer:
      'BS Realty is a comprehensive real estate platform that helps buyers, sellers, and renters connect with the right properties and agents.',
    defaultOpen: true,
  },
};

// Long answer
export const LongAnswer: Story = {
  args: {
    question: 'What services does BS Realty offer?',
    answer:
      'We offer website development, UI/UX design, technical consulting, property listing management, agent matching, mortgage calculator tools, and 24/7 customer support to help you through every step of your real estate journey.',
    defaultOpen: true,
  },
};

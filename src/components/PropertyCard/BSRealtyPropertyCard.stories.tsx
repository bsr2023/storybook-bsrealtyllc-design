import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { BSRealtyPropertyCard } from './BSRealtyPropertyCard';

const meta = {
  title: 'Components/PropertyCard',
  component: BSRealtyPropertyCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    price: { control: 'text' },
    name: { control: 'text' },
    address: { control: 'text' },
    beds: { control: 'number' },
    baths: { control: 'number' },
    sqft: { control: 'text' },
  },
  args: {
    onViewDetail: fn(),
  },
} satisfies Meta<typeof BSRealtyPropertyCard>;

export default meta;
type Story = StoryObj<typeof meta>;

// Matches Figma exactly
export const Default: Story = {
  args: {
    image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=820&auto=format',
    price: '$480,000',
    name: 'Rosewood Manor',
    address: '6391 Elgin St, Celina, TX 75009',
    beds: 3,
    baths: 2,
    sqft: '1,850 sqft',
  },
};

export const LargeProperty: Story = {
  args: {
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=820&auto=format',
    price: '$1,250,000',
    name: 'Oakridge Estate',
    address: '142 Sunset Blvd, Austin, TX 78701',
    beds: 5,
    baths: 4,
    sqft: '4,200 sqft',
  },
};

export const Apartment: Story = {
  args: {
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=820&auto=format',
    price: '$215,000',
    name: 'Downtown Loft',
    address: '88 Market St, Dallas, TX 75201',
    beds: 1,
    baths: 1,
    sqft: '720 sqft',
  },
};

import type {Meta, StoryObj} from '@storybook/react';
import { BSRealtyAppStoreButton } from './BSRealtyAppStoreButton';

const meta = {
title: 'Components/AppStoreButton',
component: BSRealtyAppStoreButton,
parameters: { layout: 'centered' },
tags: ['autodocs'],
argTypes: {
href:{control:'text'},
imageSrc:{control:'text'},
onClick:{action:'clicked'},
},

} ;
export default meta;
type Story = StoryObj<typeof BSRealtyAppStoreButton>;

/** Default state */
export const Default: Story = {
    args:{
        href:"https://apps.apple.com/app/id123456789",
        imageSrc:"/images/app-store-button.png",
    }
}
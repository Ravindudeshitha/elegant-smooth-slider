import type { Meta, StoryObj } from '@storybook/react';
import ElegantSmoothSlider from './ElegantSmoothSlider';

const data = [
    { img: "https://i.ibb.co/qCkd9jS/img1.jpg", title: "Switzerland", description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!", link: "#" },
    { img: "https://i.ibb.co/jrRb11q/img2.jpg", title: "Finland", description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!", link: "#" },
    { img: "https://i.ibb.co/NSwVv8D/img3.jpg", title: "Iceland" },
    { img: "https://i.ibb.co/Bq4Q0M8/img4.jpg", title: "Australia", description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!" },
    { img: "https://i.ibb.co/jTQfmTq/img5.jpg", title: "Netherland", description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!" },
    { img: "https://i.ibb.co/RNkk6L0/img6.jpg", title: "Ireland", description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!", link: "#" },
];

const meta = {
    title: 'ElegantSmoothSlider',
    component: ElegantSmoothSlider,
    tags: ['autodocs'],
    parameters: { layout: 'fullscreen' }, // Example of a parameter you might set
} satisfies Meta<typeof ElegantSmoothSlider>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: { 
        slides: data,
        automatedSlides: false,
        slideButtonBackground: "#e6e6e6",
        slideButtonIconColor: "#000000",
        slideButtonBackgroundHover: "#cccccc",
        slideButtonIconColorHover: "#333333",
        buttontype: 'primary',
        imageTint: false,
        slidArrowButton: true,
        slideContent: true,
        contentTitle: true,
        contentDescription: true,
        contentLink: true,
        contentTitleColor: "#f0f0f0",
        contentDescriptionColor: "#f0f0f0",
        linkButtonColor: "#e6e6e6",
        linkButtonColorHover: "#cccccc",
        linkButtonTextColor: "#000000",
        linkButtonTextColorHover: "#333333",
        subImages: true,
        subImagePosition: 'bottom',
    },
};

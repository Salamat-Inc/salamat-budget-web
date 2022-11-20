import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Footer } from './Footer';

export default {
  title: 'Example/Footer',
  component: Footer,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = (args) => <Footer {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.decorators = [
  (Story) => (
    <div className="p-8 flex justify-center align-middle">
      <Story />
    </div>
  ),
];

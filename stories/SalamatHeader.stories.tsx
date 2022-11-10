import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { SalamatHeader } from './SalamatHeader';

export default {
  title: 'Example/SalamantHeader',
  component: SalamatHeader,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof SalamatHeader>;

const Template: ComponentStory<typeof SalamatHeader> = (args) => (
  <SalamatHeader {...args} />
);

export const LoggedIn = Template.bind({});
// LoggedIn.args = {
//   user: {
//     name: 'Jane Doe',
//   },
// };

export const LoggedOut = Template.bind({});
// LoggedOut.args = {};

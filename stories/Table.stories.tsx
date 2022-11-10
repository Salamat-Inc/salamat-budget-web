import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Table } from './Table';

export default {
  title: 'Example/Table',
  component: Table,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Table>;

const Template: ComponentStory<typeof Table> = (args) => (
  <div className="px-8">
    <Table {...args} />
  </div>
);

export const LoggedIn = Template.bind({});
// LoggedIn.args = {
//   user: {
//     name: 'Jane Doe',
//   },
// };

export const LoggedOut = Template.bind({});
// LoggedOut.args = {};

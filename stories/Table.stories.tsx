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

const Template: ComponentStory<typeof Table> = (args) => <Table {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.decorators = [
  (Story) => (
    <div className="p-8 flex justify-center align-middle">
      <Story />
    </div>
  ),
];

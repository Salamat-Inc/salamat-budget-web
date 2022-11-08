import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { SalamatButton } from './SalamatButton';

export default {
  title: 'Example/SalamatButton',
  component: SalamatButton,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof SalamatButton>;

const Template: ComponentStory<typeof SalamatButton> = (args) => (
  <SalamatButton {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  style: 'primary',
  size: 'medium',
  label: 'Button',
};

export const LoggedOut = Template.bind({});
// LoggedOut.args = {};

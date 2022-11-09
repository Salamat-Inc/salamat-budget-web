import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { TextLink } from './TextLink';

export default {
  title: 'Example/TextLink',
  component: TextLink,
  argTypes: {
    twClasses: { control: { type: null } },
  },
} as ComponentMeta<typeof TextLink>;

const Template: ComponentStory<typeof TextLink> = (args) => (
  <TextLink {...args} />
);

export const InternalLink = Template.bind({});
InternalLink.args = {
  url: '/example',
  text: 'Internal Example link',
  twClasses: '',
};

export const ExternalLink = Template.bind({});
ExternalLink.args = {
  url: 'https://www.google.com/mock-url',
  text: 'External Example link',
  twClasses: '',
};

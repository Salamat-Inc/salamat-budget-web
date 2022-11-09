import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { TextLink } from './TextLink';

export default {
  title: 'Example/TextLink',
  component: TextLink,
  argTypes: {
    twClasses: { control: { type: null } },
    children: { control: { type: null } },
  },
} as ComponentMeta<typeof TextLink>;

const Template: ComponentStory<typeof TextLink> = (args) => (
  <TextLink {...args}>{args.children}</TextLink>
);

export const InternalLink = Template.bind({});
InternalLink.args = {
  url: '/example',
  twClasses: '',
  children: 'Internal link',
};

export const ExternalLink = Template.bind({});
ExternalLink.args = {
  url: 'https://www.google.com/mock-url',
  twClasses: '',
  children: 'External link',
};

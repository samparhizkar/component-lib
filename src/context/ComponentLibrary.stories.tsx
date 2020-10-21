import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { ComponentLibraryProps } from './ComponentLibrary';
import ComponentLibrary from './ComponentLibrary';

import { DoorSwitch } from '../index';

export default {
  title: 'Components/ComponentLibrary',
  component: ComponentLibrary,
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
} as Meta;

const Template: Story<ComponentLibraryProps> = (args) => (
  <ComponentLibrary {...args}>
    <DoorSwitch />
  </ComponentLibrary>
);

export const Default = Template.bind({});
Default.args = {};

export const WithThemeOverride = Template.bind({});
WithThemeOverride.args = {
  theme: { color: { primary: 'blue' } },
};

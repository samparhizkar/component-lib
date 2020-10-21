import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { DoorSwitch } from './DoorSwitch';
import ComponentLibrary from '../../context/ComponentLibrary';

export default {
  title: 'Components/DoorSwitch',
  component: DoorSwitch,
} as Meta;

const Template: Story = (args) => (
  <ComponentLibrary vinId={'123'}>
    <DoorSwitch {...args} />
  </ComponentLibrary>
);

export const Default = Template.bind({});
Default.args = {};

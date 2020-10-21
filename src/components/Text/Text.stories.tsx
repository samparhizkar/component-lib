import * as React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { TextProps, Text } from './Text';
import ComponentLibrary from '../../context/ComponentLibrary';

export default {
  title: 'Components/Text',
  component: Text,
} as Meta;

const Template: Story<TextProps> = (args) => (
  <ComponentLibrary vinId={''}>
    <Text type="h2" {...args}>
      “First do it, then do it right, then do it better.“
    </Text>
  </ComponentLibrary>
);

export const Standard = Template.bind({});
Standard.args = {};

export const Smaller = Template.bind({});
Smaller.args = {
  type: 'h2',
};

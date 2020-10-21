import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { ButtonProps } from './Button';
import Button from './Button';
import ComponentLibrary from '../../context/ComponentLibrary';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    theme: {
      table: {
        disable: true,
      },
    },
    color: {
      control: {
        type: 'select',
        options: ['primary', 'warning', 'accent', 'white'],
      },
      defaultValue: 'primary',
    },
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => (
  <ComponentLibrary vinId={''}>
    <Button {...args}>Click Me</Button>
  </ComponentLibrary>
);

export const Standard = Template.bind({});
Standard.args = {
  variant: 'standard',
};

export const Outlined = Template.bind({});
Outlined.args = {
  variant: 'outlined',
};

export const TextButton = Template.bind({});
TextButton.args = {
  variant: 'text',
};

export const WithMargin = Template.bind({});
WithMargin.args = {
  useMargin: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};

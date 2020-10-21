import * as React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { SwitchProps } from './Switch';
import Switch from './Switch';
import ComponentLibrary from '../../context/ComponentLibrary';

export default {
  title: 'Components/Switch',
  component: Switch,
  argTypes: {
    id: {
      table: {
        disable: true,
      },
    },
    labeledBy: {
      table: {
        disable: true,
      },
    },
    onChange: {
      table: {
        disable: true,
      },
    },
    className: {
      table: {
        disable: true,
      },
    },
    tabIndex: {
      table: {
        disable: true,
      },
    },
  },
} as Meta;

const Template: Story<SwitchProps> = (args) => (
  <ComponentLibrary vinId={''}>
    <Switch {...args} />
  </ComponentLibrary>
);

export const Standard = Template.bind({});
Standard.args = {
  on: true,
  left: 'off',
  right: 'on',
};

export const Off = Template.bind({});
Off.args = {
  on: false,
  left: 'off',
  right: 'on',
};

export const NoLabel = Template.bind({});
NoLabel.args = {};

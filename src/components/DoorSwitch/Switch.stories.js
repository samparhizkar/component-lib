import React from 'react';

import Switch from '@material-ui/core/Switch';

export default {
    title: 'Example/DoorSwitch',
    component: Switch,
    argTypes: {
        size: {
            control: {
                type: 'inline-radio',
                options: ['small', 'normal'],
            },
            defaultValue: 'normal',
        },
    }
}

const Template = (args) => <Switch
    // color={args.color}
    inputProps={{'aria-label': 'primary checkbox'}}

    {...args}
/>

export const Primary = Template.bind({});
Primary.args = {
    checked: true,
    color: "primary",
    disabled: false,
};

export const Secondary = Template.bind({});
Primary.args = {
    checked: true,
    color: "secondary",
    disabled: false,
};

export const Checked = Template.bind({});
Checked.args = {
    checked: true,
    disabled: false,
};

export const Small = Template.bind({});
Small.args = {
    size: "small",
};

export const UnChecked = Template.bind({});
UnChecked.args = {
    checked: false,
    disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
    disabled: true,
    checked: true,
};

import React from 'react';
import {DoorSwitch} from "../../components/Switch";
import {customTheme} from "../../components/theme/themes/customTheme";
function DoorSwitchWithCustomTheme() {
    console.log("orignal custom theme is ", customTheme)
    return (
        <DoorSwitch theme={customTheme}/>
    );
}

export default DoorSwitchWithCustomTheme;

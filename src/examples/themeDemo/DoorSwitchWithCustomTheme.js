import React from 'react';
import {DoorSwitch} from "../../components/Switch";
import {customTheme} from "../../components/theme";
function DoorSwitchWithCustomTheme() {
    return (
            <DoorSwitch theme={customTheme}/>
    );
}

export default DoorSwitchWithCustomTheme;

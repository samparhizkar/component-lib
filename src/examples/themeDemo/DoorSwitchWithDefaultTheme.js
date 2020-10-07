import React from 'react';
import {DoorSwitch} from "../../components/Switch";
import {customTheme} from "../../components/theme";
function DoorSwitchWithDefaultTheme() {
    return (
        <DoorSwitch theme={customTheme}/>
    );
}

export default DoorSwitchWithDefaultTheme;

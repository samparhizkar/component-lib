import React from 'react';
import {DoorSwitch} from "../../components/Switch";
import {customTheme} from "../../components/theme";

function DoorSwitchWithMinorThemeOverride() {
    const palette = {
        primary: {
            // main: '#ed2100',
            contrastText: 'cyan',
        }
    };
    return (
        <DoorSwitch theme={{palette: palette}}/>
    );
}

export default DoorSwitchWithMinorThemeOverride;

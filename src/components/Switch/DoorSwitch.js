import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import Switch from "../core/Toggle";
import {patch} from "../../services/api/apiUtils";
import {apiConfig} from "./config/config";
import './DoorSwitch.css'
import Text from "../core/Text";
import {Container} from "../core/Container";
import {customTheme} from "../theme";
import ThemeProvider from "../theme/ThemeProvider";
import axios from 'axios';

export const DoorSwitch = ({event, color, vinNumber,theme, ...props}) => {

    function toggleDoor(doorIsOpen = false) {
        patch(`${apiConfig.toggleDoor}`, {doorIsOpen, vinNumber});

    }

    return (
            <ThemeProvider themeOverride={theme}>
                <Container>
                    <Text type={'h1'}>
                        A Door Switch Component
                    </Text>
                    <Switch
                        theme = {customTheme}
                        {...props}
                        callBack={props.event || toggleDoor}
                    />
                </Container>
            </ThemeProvider>

    );
};

//import existing prop types from switch superset
DoorSwitch.propTypes = {
    ...Switch.propTypes,
    color: PropTypes.string,
    vinNumber: PropTypes.string,
    event: PropTypes.func
};

//import default prop types from switch superset
DoorSwitch.defaultProps = {
    ...Switch.defaultProps,
    color: 'white',
    vinNumber: null,
    event: undefined,

};

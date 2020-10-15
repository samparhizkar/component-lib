import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {Switch} from "./Switch";
import {patch} from "../../services/api/apiUtils";
import {apiConfig} from "./config/config";
import Text from "../core/Text";
import {Container} from "../core/Container";
import {customTheme} from "../theme";
import ThemeProvider from "../theme/ThemeProvider";
import axios from 'axios';
import devWarning from "../util/devWarning";

export const DoorSwitch = ({doorType = 'driver', event, color, vinNumber,theme, ...props}) => {

  useEffect(()=> {
    devWarning(
       props.vin,
      'DoorSwitch',
      '`vin` is not a provided, make sure to supply vin in order to utilize this component correctly',
    );
  },[])

    function toggleDoor(doorIsOpen = false) {
        patch(`${apiConfig.toggleDoor}`, {doorIsOpen, vinNumber, });
    }

    return (
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

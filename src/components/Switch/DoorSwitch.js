import React from 'react';
import PropTypes from 'prop-types';
import Switch from "../core/Toggle";
import {patch} from "../../services/api/apiUtils";
import {apiConfig} from "./config/config";
import './DoorSwitch.css'
import Text from "../core/Text";
import {Container} from "../core/Container";

export const DoorSwitch = ({event, color, carId, ...props}) => {

    function toggleDoor(doorIsOpen = false) {
        patch(`${apiConfig.toggleDoor}`, {doorIsOpen, carId});
    }

    return (
        <Container className="doorswitch-container" color={color}>
            <Text type={'h1'}>
                A Door Switch for Car #{carId}
            </Text>
            <Switch
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
    carId: PropTypes.string,
    event: PropTypes.func
};

//import default prop types from switch superset
DoorSwitch.defaultProps = {
    ...Switch.defaultProps,
    color: 'white',
    carId: null,
    event: undefined,

};

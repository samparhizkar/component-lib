import React from 'react';
import PropTypes from 'prop-types';
import Toggle from "../core/Toggle";
import Container from "../core/Container/Container";


export const Switch = ({checked, disabled, onChange, ...props}) => {
    return (
        <Container>
            <Toggle
                checked={checked}
                disabled={disabled}
                onChange={onChange}
                {...props}
            />
        </Container>
    );
};

Switch.propTypes = {
    checked: PropTypes.bool,
    disabled: PropTypes.bool,
    onChange: PropTypes.func,
};

Switch.defaultProps = {
    checked: true,
    disabled: false,
    onChange: undefined,
};

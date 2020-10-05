import React from 'react';
import PropTypes from 'prop-types';
import Toggle from "../core/Toggle";


export const Switch = ({checked, disabled, onChange, ...props}) => {
    return (
        <div>
            <Toggle
                checked={checked}
                disabled={disabled}
                onChange={onChange}
                {...props}
            />
        </div>
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

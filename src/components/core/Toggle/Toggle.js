import React from 'react';
import Switch from '@material-ui/core/Switch';

export default function Toggle({checked = false, onChange, ...props}) {
    const [checkedState, setCheckedState] = React.useState(checked);
    const handleChange = (event) => {
        setCheckedState(event.target.checked);
        // If onchange callback was provided also run it here
        if(props.onChange) {
            props.onChange();
        }

    };

    return (
        <div>
            <Switch
                checked={checkedState}
                onChange={handleChange}
            />
        </div>
    );
}

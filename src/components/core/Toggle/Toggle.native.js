import React from 'react';
import Switch from '@material-ui/core/Switch';
import {Container} from "../Container";

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
        <Container>
            <Switch
                checked={checkedState}
                onChange={handleChange}
            />
        </Container>
    );
}

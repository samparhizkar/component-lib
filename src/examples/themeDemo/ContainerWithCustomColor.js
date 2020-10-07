import React from 'react';
import {customTheme} from "../../components/theme";
import Container from "../../components/core/Container/Container";
function DoorSwitchWithCustomTheme() {
    return (
        <Container theme={customTheme}>
            <h1>Container background matched the primary theme color</h1>
        </Container>
    );
}

export default DoorSwitchWithCustomTheme;

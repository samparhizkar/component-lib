import React from 'react';
import './App.css';
import {DoorSwitch} from "./components/Switch";
import {Container} from "./components/core/Container";

function App() {
    return (
        <Container className="App">
            <Container className="App-header">
                <DoorSwitch
                    carId={'1234'}
                />
            </Container>
        </Container>
    );
}

export default App;

import styled from 'styled-components'
import React from "react";
import ThemeProvider from "../../theme/ThemeProvider";

const Container = styled.div`
    background-color: ${props => props.theme.palette.primary.main};
    display: flex;
    align-items: center;
    width:600px;
    border-radius: 15px;
    border-color: ${props => props.theme.palette.primary.main};
    padding: 25px;
`;

export default function (props) {
    const {theme} = props;
    return (
        <ThemeProvider themeOverride={theme}>
            <Container {...props}/>
        </ThemeProvider>
    )

}

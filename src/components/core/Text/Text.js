import React from 'react';

import styled from 'styled-components'

const H1 = styled.h1`
  font-size: 2em;
  margin-bottom: 0.25em;
    color: ${props => props.theme.palette.primary.contrastText};

`;
const H2 = styled.h2`
  font-size: 1.5em;
    color: ${props => props.theme.palette.primary.contrastText};

`;
const H3 = styled.h3`
  font-size: 1.5em;
    color: ${props => props.theme.palette.primary.contrastText};

`;

function Text({children, type = 'h1', ...props}) {
    switch (type) {
        case 'h1':
            return (<H1 {...props}>{children}</H1>)
        case 'h2':
            return (<H2 {...props}>{children}</H2>)
        default:
            return (<H3 {...props}>{children}</H3>)
    }
}

export default Text;

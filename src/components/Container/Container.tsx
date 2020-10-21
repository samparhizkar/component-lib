import styled from 'styled-components';
import React from 'react';

const StyledContainer = styled.div`
  background-color: ${(props) => props.theme.color.palette[9]};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 600px;
  border-radius: 15px;
  border-color: ${(props) => props.theme.color.warning};
  padding: 25px;
  @media screen and (max-width: 800px) {
    flex-direction: column;
    align-items: center;
    padding: 35px;
    width: 80%;
  }
`;

export const Container: React.FunctionComponent = (props) => {
  const { children } = props;
  return <StyledContainer {...props}>{children}</StyledContainer>;
};

import React from 'react';

import styled from 'styled-components';

const H1 = styled.h1`
  font-size: 2em;
  margin-bottom: 0.25em;
  color: ${(p) => p.color};
`;
const H2 = styled.h2`
  font-size: 1.5em;
  color: ${(p) => p.color};
`;

export interface TextProps {
  type?: 'h1' | 'h2';
  color?: 'white' | 'black';
}

export const Text: React.FunctionComponent<TextProps> = ({
  type = 'h1',
  color = 'black',
  ...props
}) => {
  const { children } = props;
  switch (type) {
    case 'h1':
      return (
        <H1 color={color} {...props}>
          {children}
        </H1>
      );
    case 'h2':
      return <H2 {...props}>{children}</H2>;
    default:
      return <H1 {...props}>{children}</H1>;
  }
};

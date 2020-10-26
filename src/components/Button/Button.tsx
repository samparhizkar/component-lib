import * as React from 'react';
import styled from 'styled-components';
import {
  getBackgroundColor,
  getBorderColor,
  getTextColor,
} from './buttonServices';

import { ButtonType, ColorVariant } from '../types';
import { DeepPartial } from '../../context/utils/index.js.js';
import { ThemeStyleConstants } from '../../context/utils/constants';

export interface ButtonProps {
  variant?: ButtonType;
  disabled?: boolean;
  useMargin?: boolean;
  color?: ColorVariant;
  theme?: DeepPartial<ThemeStyleConstants>;
}

const Button: React.FunctionComponent<ButtonProps> = ({
  children,
  variant = 'standard',
  disabled,
  useMargin = false,
  color = 'primary',
  ...rest
}) => {
  return (
    <StyledButton
      color={color}
      variant={variant}
      disabled={disabled}
      useMargin={useMargin}
      {...rest}
    >
      {children}
    </StyledButton>
  );
};

export const StyledButton = styled.button<ButtonProps>`
  background-color: ${(props) =>
    getBackgroundColor(
      props.theme,
      props.color,
      props.variant,
      props.disabled
    )};
  color: ${(props) =>
    getTextColor(props.theme, props.color, props.variant, props.disabled)};
  border-color: ${(props) =>
    getBorderColor(props.theme, props.color, props.variant, props.disabled)};
  border-radius: ${(props) => `${props.theme.borderRadius}px`};
  padding: ${(props) =>
    `${props.theme.space.content}px ${props.theme.space.content}px`};
  display: flex;
  justify-content: center;
  align-items: center;
  margin: ${(props) => (props.useMargin ? props.theme.space.medium : '0')}px;
  cursor: ${(p) => (p.disabled ? 'not-allowed' : 'pointer')};
  outline: none;
  opacity: 1;
      boxShadow: none,
  box-shadow: none;
  word-wrap: no-wrap;
  width: max-content;
  min-width: max-content;
  height: max-content;
  border-style:  solid ;
  font-size: ${(props) => props.theme.font.size.medium}px;
  font-family: ${(props) => props.theme.font.family.main};
  font-weight: ${(props) => props.theme.font.weight.bold};
  transition-property: box-shadow, background-color, border-color;
`;
export default Button;

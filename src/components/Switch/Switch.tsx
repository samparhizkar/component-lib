import * as React from 'react';
import { DefaultProps } from '../types';
import styled from 'styled-components';

export interface SwitchProps extends DefaultProps {
  /** Is the switch on? */
  on: boolean;
  /** A change handler. Passes the new `on` boolean */
  onChange?: (on: boolean) => void;
  /** left value */
  left?: string;
  /** right value */
  right?: string;
  /** id of the label for a11y */
  labeledBy?: string;
}

const width = 28;
const height = 16;
const railHeight = 16;

const Container = styled.div`
  display: inline-flex;
  align-items: center;
  box-shadow: none;
  outline: none;
  margin: 10px 30px;
`;

const RailContainer = styled.div<{ left?: string; right?: string }>`
  width: ${width}px;
  height: ${height}px;
  label: switch;
  position: relative;
  border-radius: ${height / 2}px;
  overflow: hidden;
  cursor: pointer;
  margin-left: ${(p) => (p.left ? `${p.theme.space.base}px` : `0`)};
  margin-right: ${(p) => (p.right ? `${p.theme.space.base}px` : `0`)};
`;

const Button = styled.div<{ on: boolean }>`
  height: ${height}px;
  width: ${height}px;
  position: absolute;
  transition: transform 0.3s;
  top: 0;
  left: 0;
  content: ' ';
  border-radius: 50%;
  transform: ${(p) => `translate3d(${p.on ? width - height : 0}px, 0, 0)`};
  background-color: ${(p) => p.theme.color.white};
  border: none;
  outline: none;
  box-shadow: ${(p) =>
    `0 0 0 1px ${p.on ? p.theme.color.primary : p.theme.color.border.default}`};
  z-index: ${(p) => p.theme.zIndex.switch + 1};
`;

const Rail = styled.div<{ on: boolean }>`
  width: ${width}px;
  height: ${railHeight}px;
  position: absolute;
  top: ${(height - railHeight) / 2}px;
  left: 0px;
  border-radius: 10px;
  overflow: hidden;
  outline: none;
  background-color: ${(p) => p.theme.color.background.mediumDark};
  z-index: ${(p) => p.theme.zIndex.switch};
  outline: none;
  &:after {
    content: ' ';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0px;
    left: ${-height / 2}px;
    background-color: ${(p) => p.theme.color.primary};
    transition: transform 0.3s;
    transform: ${(p) => `translate3d(${p.on ? 0 : '-100%'}, 0, 0)`};
    z-index: ${(p) => p.theme.zIndex.switch - 1};
  }
`;

const Switch: React.FunctionComponent<SwitchProps> = ({
  on,
  onChange,
  left,
  right,
  labeledBy,
  ...props
}) => (
  <Container
    {...props}
    role="checkbox"
    aria-checked={on}
    aria-labelledby={labeledBy}
    tabIndex={0}
    onKeyDown={(e) => {
      if (onChange && e.key === ' ') {
        e.preventDefault();
        onChange(!on);
      }
    }}
  >
    {left}
    <RailContainer
      left={left}
      right={right}
      onClick={() => {
        if (onChange) {
          onChange(!on);
        }
      }}
    >
      <Button on={on} />
      <Rail on={on} />
    </RailContainer>
    {right}
  </Container>
);

export default Switch;

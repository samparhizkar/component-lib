import React from 'react';
import { Container } from './index';
import {shallowWithTheme} from "../util/testUtils";

describe('Container', () => {
  it('should be defined', () => {
    expect(Container).toBeDefined();
  });

  it('should render correctly', () => {
    const tree = shallowWithTheme(<Container />);
    expect(tree).toMatchSnapshot();
  });
});

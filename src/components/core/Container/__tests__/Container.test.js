import React from 'react';
import { mount, shallow } from 'enzyme';
import {Container} from "../index";

describe('Container', () => {
  it('should be defined', () => {
    expect(Container).toBeDefined();
  });

  it('should render correctly', () => {
    const tree = shallow(
      <Container />
    );
    expect(tree).toMatchSnapshot();
  });
});


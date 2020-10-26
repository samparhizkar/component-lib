import React from 'react';
import Button from './Button';
import {shallowWithTheme} from "../util/testUtils";

describe('Button', () => {
  it('should be defined', () => {
    expect(Button).toBeDefined();
  });

  it('should render correctly', () => {
    const wrapper = shallowWithTheme(<Button name="button test" />);
    expect(wrapper.exists()).toBe(true);
    // expect(wrapper).toMatchSnapshot();
  });

  it('runs callback after clicked', () => {
    const mockCallBack = jest.fn();

    const button = shallowWithTheme(<Button onClick={mockCallBack}>Ok!</Button>);
    button.simulate('click');
    expect(mockCallBack.mock.calls.length).toEqual(1);
  });
});

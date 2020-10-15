import React from 'react';
import { mount, shallow } from 'enzyme';
import Button from '../Button.js';

describe('Button', () => {

  it('should be defined', () => {
    expect(Button).toBeDefined();
  });

  it('should render correctly', () => {
    const wrapper = shallow(
      <Button name='button test' />
    );
    expect(wrapper.exists()).toBe(true);
    // expect(wrapper).toMatchSnapshot();
  });

  it('runs callback after clicked', () => {
    const mockCallBack = jest.fn();

    const button = shallow((<Button onClick={mockCallBack}>Ok!</Button>));
    button.find('button').simulate('click');
    expect(mockCallBack.mock.calls.length).toEqual(1);
  });
});


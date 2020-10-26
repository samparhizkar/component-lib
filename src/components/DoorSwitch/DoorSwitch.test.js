import React from 'react';
import { DoorSwitch } from './index';
import Switch from '../Switch';
import { mountWithTheme } from '../util/testUtils';

describe('DoorSwitch', () => {
  it('should render without props', () => {
    mountWithTheme(<DoorSwitch />);
  });

  it('should provide the user a switch toggle', () => {
    const wrapper = mountWithTheme(<DoorSwitch doorType={'driver'} />);
    expect(wrapper.containsMatchingElement(Switch)).toEqual(true);
  });

  it('should default to driver if not door specified', () => {
    const wrapper = mountWithTheme(<DoorSwitch doorType={'driver'} />);
    expect(wrapper.prop('doorType')).toEqual('driver');
  });

  //Note following test is dependant of typescript implementation, only required in JS
  // it('should display developer warning if vin is not defined', () => {
  //   resetWarned();
  //   const errorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
  //   mountWithTheme(<DoorSwitch />);
  //   expect(errorSpy).toHaveBeenCalledWith(
  //     'Warning: [CXC: DoorSwitch] `vin` is not a provided, make sure to supply vin in order to utilize this component correctly'
  //   );
  //   errorSpy.mockRestore();
  // });
});

// import React from 'react';
// import { mount } from 'enzyme';
// import { DoorSwitch } from '../index';
// import { Switch } from '../Switch';
// import { defaultTheme } from '../../../context';
// import { resetWarned } from '../../util/devWarning';
//
// describe('DoorSwitch', () => {
//   it('should render without props', () => {
//     mount(<DoorSwitch theme={defaultTheme} />);
//   });
//
//   it('should provide the user a switch toggle', () => {
//     const wrapper = mount(
//       <DoorSwitch doorType={'driver'} theme={defaultTheme} />
//     );
//     expect(wrapper.containsMatchingElement(Switch)).toEqual(true);
//   });
//
//   it('should default to driver if not door specified', () => {
//     const wrapper = mount(
//       <DoorSwitch doorType={'driver'} theme={defaultTheme} />
//     );
//     expect(wrapper.prop('doorType')).toEqual('driver');
//   });
//
//   //Note following test is dependant of typescript implementation, only required in JS
//   it('should display developer warning if vin is not defined', () => {
//     resetWarned();
//     const errorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
//     mount(<DoorSwitch theme={defaultTheme} />);
//     expect(errorSpy).toHaveBeenCalledWith(
//       'Warning: [CXC: DoorSwitch] `vin` is not a provided, make sure to supply vin in order to utilize this component correctly'
//     );
//     errorSpy.mockRestore();
//   });
// });

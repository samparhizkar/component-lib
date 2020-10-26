import * as React from 'react';
import { mount, shallow } from 'enzyme';
import constants from '../../context/utils/constants';
import { ThemeProvider } from 'styled-components';
import { ReactElement } from 'react';

export function mountWithTheme(child: ReactElement) {
  return mount(child, {
    wrappingComponent: ({ children }) => (
      <><ThemeProvider theme={constants}>{children}</ThemeProvider></>
    ),
  });
}

export function shallowWithTheme(child: ReactElement) {
  return shallow(child, {
    wrappingComponent: ({ children }) => (
      <><ThemeProvider theme={constants}>{children}</ThemeProvider></>
    ),
  });
}

import * as React from 'react';
import constants, { ThemeStyleConstants } from './utils/constants';
import { DeepPartial } from './utils/index.js';
import merge from 'lodash-es/merge';
import { ThemeProvider } from 'styled-components';

export interface ComponentLibraryProps {
  /** Children */
  children?: React.ReactNode;
  /**
   * Custom theme
   */
  theme?: DeepPartial<ThemeStyleConstants>;
  /**
   * Car's vinId
   */
  vinId: string;
}

export interface Context {
  vinId: string;
}

const defaultContext: Context = {
  vinId: 'default',
};

const ctx = React.createContext(defaultContext);
export const { Consumer: ComponentLibraryContext, Provider } = ctx;
export const useCXCContext = () => React.useContext(ctx);

const ComponentLibrary = ({
  children,
  theme,
  vinId,
}: ComponentLibraryProps) => {
  return (
    <ThemeProvider theme={merge(constants, theme)}>
      <Provider value={{ vinId }}>{children}</Provider>
    </ThemeProvider>
  );
};
export default ComponentLibrary;

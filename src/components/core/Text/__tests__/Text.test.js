import React from 'react';
import Text from "../Text";
import {defaultTheme} from "../../../../theme";
import {render} from 'enzyme';

describe('Text', () => {
  it('should render', () => {
    render(<Text theme={defaultTheme}>Sample text</Text>)
  });

});

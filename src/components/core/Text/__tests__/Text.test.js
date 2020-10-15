import React from 'react';
import Text from "../Text";
import {ThemeProvider} from "styled-components";
import {defaultTheme} from "../../../theme";
import mountTest from "../../../../tests/commonTests/mountsComponent";
import {mount, render} from 'enzyme';
import Button from "../../Button";

describe('Text', () => {
  it('should render', () => {
    render(<Text theme={defaultTheme}>sds</Text>)
  });

});

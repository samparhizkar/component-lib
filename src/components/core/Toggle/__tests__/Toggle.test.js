import React from 'react';
import {defaultTheme} from "../../../../theme";
import {render} from 'enzyme';
import Toggle from "../Toggle";

describe('Toggle', () => {
  it('should render', () => {
    render(<Toggle theme={defaultTheme}/>)
  });

});

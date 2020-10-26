import React from 'react';
import {Text} from "./Text";
import {mountWithTheme} from "../util/testUtils";

describe('Text', () => {
  it('should render', () => {
    mountWithTheme(<Text>Sample text</Text>)
  });

});

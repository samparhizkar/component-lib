import React from 'react';
import {render} from '@testing-library/react';
import Text from "../Text";
import {ThemeProvider} from "styled-components";
import {defaultTheme} from "../../../theme";

describe('<Text />', () => {
  it('should render its text', () => {
    const text = 'Click me!';
    const children = 'Text';

    const {container, queryByText} = render(
      <ThemeProvider theme={defaultTheme}>
        <Text>{children}</Text>
      </ThemeProvider>
    );
    expect(queryByText(children)).not.toBeNull();
    // expect(container.firstChild).toMatchSnapshot();
  });

  // it('should render its text', () => {
  //   const { container, queryByText } = render(<H1>{children}</H1>);
  //   const { childNodes } = container.querySelector('h1');
  //   expect(childNodes).toHaveLength(1);
  //   expect(queryByText(children)).not.toBeNull();
  // });
});

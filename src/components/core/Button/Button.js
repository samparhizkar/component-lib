import styled from 'styled-components'
import {defaultTheme} from '../../../theme'

const Button = styled.button`
  background-color: ${props => {
  return props.theme?.palette?.primary?.main || defaultTheme.palette.primary.main;
}
};
`;
export default Button;

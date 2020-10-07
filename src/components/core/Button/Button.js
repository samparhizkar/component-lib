import styled from 'styled-components'
import withTheme from "../../theme/withTheme";
const Button = styled.button`
  background-color: ${props => props.theme.palette.primary.main};
`;
export default withTheme(Button);

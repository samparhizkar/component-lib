import './Container.css';
import styled from 'styled-components'
import withTheme from "../../theme/withTheme";

const Container = styled.div`
    background-color: ${props => props.theme.palette.primary.main};
    display: flex;
    align-items: center;
    border-radius: 15px;
    border-color: ${props => props.theme.palette.primary.main};
    padding: 25px;
`;

export default withTheme(Container);

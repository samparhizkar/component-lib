import * as React from 'react';
import Switch from '../Switch';
// import { patch } from '../../services/api/apiUtils';
// import { apiConfig } from './config/config';
import { Text } from '../Text';
import { Container } from '../Container';
// import { customTheme } from '../../theme';
// import devWarning from '../util/devWarning';
import Button from '../Button';
// import { ThemeProvider } from '../../theme/ThemeContext';
import { useCXCContext } from '../../context/ComponentLibrary';

export const DoorSwitch = () => {
  const ctx = useCXCContext();
  const [isOn, setIsOn] = React.useState(true);

  return (
    <div>
      <Container>
        <Text type="h2">Door Switch ({ctx.vinId || 'N/A'}) </Text>
        <Switch
          on={isOn}
          left="off"
          right="on"
          onChange={() => setIsOn(!isOn)}
        />
        <Button variant={'standard'} color={'primary'} useMargin={true}>
          My Button{' '}
        </Button>
      </Container>
    </div>
  );
};

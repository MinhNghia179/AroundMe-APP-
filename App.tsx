import { Navigation } from '@app/infrastructure/navigation';
import { theme } from '@app/infrastructure/theme';
import AuthenticationContextProvider from '@app/services/authentication/AuthenticationContext';
import SettingContextProvider from '@app/services/setting/SettingContext';
import React from 'react';
import { ThemeProvider } from 'styled-components';

function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <SettingContextProvider>
        <AuthenticationContextProvider>
          <Navigation></Navigation>
        </AuthenticationContextProvider>
      </SettingContextProvider>
    </ThemeProvider>
  );
}

export default App;

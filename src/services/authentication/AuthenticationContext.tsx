import React, { createContext, PropsWithChildren, useState } from 'react';

export type AuthenticationContextType = {
  isLoading: boolean;
  isAuthenticate: boolean;
  portalUser: unknown;
  errorMessage: string;
  onLogin(): void;
  onLogout(): void;
  onRegister(): void;
};

export const AuthenticationContext =
  createContext<AuthenticationContextType | null>(null);

const AuthenticationContextProvider = ({
  children,
}: PropsWithChildren<unknown>) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [portalUser, setPortalUser] = useState<unknown>(null);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const onLogin = () => {};

  const onLogout = () => {};

  const onRegister = () => {};

  return (
    <AuthenticationContext.Provider
      value={{
        isAuthenticate: !!portalUser,
        isLoading,
        portalUser,
        errorMessage,
        onLogin,
        onRegister,
        onLogout,
      }}>
      {children}
    </AuthenticationContext.Provider>
  );
};

export default AuthenticationContextProvider;

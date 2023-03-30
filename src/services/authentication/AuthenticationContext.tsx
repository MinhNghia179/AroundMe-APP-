import React, { createContext, PropsWithChildren, useState } from 'react';

export type AuthenticationContextType = {
  isLoading: boolean;
  isAuthenticate: boolean;
  portalUser: unknown;
  errorMessage: string;
  onLogin(email: string, password: string): void;
  onLogout(): void;
  onRegister(): void;
  onLoginWithGoogle(): void;
};

export const AuthenticationContext =
  createContext<AuthenticationContextType | null>(null);

const AuthenticationContextProvider = ({
  children,
}: PropsWithChildren<unknown>) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [portalUser, setPortalUser] = useState<unknown>(null);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const onLogin = async (email: string, password: string) => {
    setIsLoading(true);
    try {
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };

  const onLogout = async () => {};

  const onRegister = async () => {
    setIsLoading(true);
    try {
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };

  const onLoginWithGoogle = async () => {
    setIsLoading(true);
    try {
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };

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
        onLoginWithGoogle,
      }}>
      {children}
    </AuthenticationContext.Provider>
  );
};

export default AuthenticationContextProvider;

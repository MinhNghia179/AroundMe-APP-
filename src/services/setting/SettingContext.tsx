import React, { createContext, PropsWithChildren, useState } from 'react';

export type SettingContextType = {
  background: string;
  language: string;
  onChangeLanguage(value: string): void;
  onChangeBackgroundColor(value: string): void;
};

export const SettingContext = createContext<SettingContextType | null>(null);

const SettingContextProvider = ({ children }: PropsWithChildren<unknown>) => {
  const [background, setBackground] = useState<string>('');
  const [language, setLanguage] = useState<string>('');

  const onChangeLanguage = (value: string) => {};

  const onChangeBackgroundColor = (value: string) => {};

  return (
    <SettingContext.Provider
      value={{
        background,
        language,
        onChangeLanguage,
        onChangeBackgroundColor,
      }}>
      {children}
    </SettingContext.Provider>
  );
};

export default SettingContextProvider;

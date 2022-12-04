import React from 'react';
import { useColorScheme } from 'react-native';

import { colors } from '../styles/color';
import { typography } from '../styles/typography';

export const ThemeContext = React.createContext<any>(null);

function ThemeProviderSheet({ children }: any) {
  const isDarkMode = useColorScheme() === 'dark';
  const theme = {
    colors: !isDarkMode ? colors.light : colors.dark,
    typography,
  };
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
}
export default ThemeProviderSheet;

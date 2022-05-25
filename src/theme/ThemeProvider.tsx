import React from 'react';
import { colors } from '../styles/color';
import { typography } from '../styles/typography';
import { useColorScheme } from 'react-native';

export const ThemeContext = React.createContext<any>(null);

const ThemeProviderSheet = ({ children }: any) => {
    const isDarkMode = useColorScheme() === 'dark';
    const theme = {
        colors: !isDarkMode ? colors.light : colors.dark,
        typography,
    };
    return (
        <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
    );
};
export default ThemeProviderSheet;

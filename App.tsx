/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    useColorScheme,
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { QueryClient, QueryClientProvider } from 'react-query';
import ThemeProviderSheet from './src/theme/ThemeProvider';
import TEST from './src/navigation/test';
import { ThemeProvider } from 'styled-components';
import { NavigationContainer } from '@react-navigation/native';
import { colors } from './src/styles/color';
import { typography } from './src/styles/typography';

const App = () => {
    const isDarkMode = useColorScheme() === 'dark';
    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };
    const queryClient = new QueryClient({
        defaultOptions: { queries: { retry: 2 } },
        //   쿼리 함수 실패시 최대 연속 재시도 횟수
    });
    const theme = {
        colors: !isDarkMode ? colors.light : colors.dark,
        typography,
    };

    return (
        <QueryClientProvider client={queryClient}>
            <ThemeProviderSheet>
                <ThemeProvider theme={theme}>
                    <NavigationContainer>
                        <SafeAreaView style={backgroundStyle}>
                            <StatusBar
                                barStyle={
                                    isDarkMode
                                        ? 'light-content'
                                        : 'dark-content'
                                }
                            />
                            <ScrollView
                                contentInsetAdjustmentBehavior='automatic'
                                style={backgroundStyle}
                            >
                                <TEST />
                            </ScrollView>
                        </SafeAreaView>
                    </NavigationContainer>
                </ThemeProvider>
            </ThemeProviderSheet>
        </QueryClientProvider>
    );
};

export default App;

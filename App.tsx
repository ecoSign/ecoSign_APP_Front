/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import * as React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  useColorScheme,
  StyleSheet,
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { QueryClient, QueryClientProvider } from 'react-query';
import ThemeProviderSheet from './src/theme/ThemeProvider';
import { ThemeProvider } from 'styled-components';
import { NavigationContainer } from '@react-navigation/native';
import { colors } from './src/styles/color';
import { typography } from './src/styles/typography';
import { persistor, store } from './src/redux/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import RootStack from './src/navigations/RootStack';

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
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <QueryClientProvider client={queryClient}>
          <ThemeProviderSheet>
            <ThemeProvider theme={theme}>
              <NavigationContainer>
                <SafeAreaView style={[styles.container, backgroundStyle]}>
                  <StatusBar
                    barStyle={isDarkMode ? 'light-content' : 'dark-content'}
                  />
                  {/*<ScrollView*/}
                  {/*  contentInsetAdjustmentBehavior="automatic"*/}
                  {/*  style={[backgroundStyle]}*/}
                  {/*>*/}
                  <RootStack />
                  {/*<TEST />*/}
                  {/*</ScrollView>*/}
                </SafeAreaView>
              </NavigationContainer>
            </ThemeProvider>
          </ThemeProviderSheet>
        </QueryClientProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

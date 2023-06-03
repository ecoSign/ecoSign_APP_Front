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
  StatusBar,
  StyleSheet,
  useColorScheme,
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';

import { NavigationContainer } from '@react-navigation/native';
import { PersistGate } from 'redux-persist/integration/react';
import { ThemeProvider } from 'styled-components';

import RootStack from './src/navigations/RootStack';
import { persistor, store } from './src/redux/store';
import { colors } from './src/styles/color';
import { typography } from './src/styles/typography';
import ThemeProviderSheet from './src/theme/ThemeProvider';

function App() {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 1000 * 60 * 60,
        refetchInterval: 1000 * 60 * 20,
        retry: 2,
      },
    },
  });

  const theme = {
    colors: isDarkMode ? colors.dark : colors.light,
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
                  {/* <ScrollView */}
                  {/*  contentInsetAdjustmentBehavior="automatic" */}
                  {/*  style={[backgroundStyle]} */}
                  {/* > */}
                  <RootStack />
                  {/* <TEST /> */}
                  {/* </ScrollView> */}
                </SafeAreaView>
              </NavigationContainer>
            </ThemeProvider>
          </ThemeProviderSheet>
        </QueryClientProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

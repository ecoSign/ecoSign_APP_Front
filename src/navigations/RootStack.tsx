import React from 'react';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';

import AuthStack from '@navigations/AuthStack';
import SplashScreen from '@screens/SplashScreen';

import MainTab from './MainTab';

const Stack = createNativeStackNavigator();

function RootStack() {
  return (
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Main" component={MainTab} />
      <Stack.Screen name="Auth" component={AuthStack} />
    </Stack.Navigator>
  );
}

export default RootStack;

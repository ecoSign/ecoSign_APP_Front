import React from 'react';
import { StyleSheet } from 'react-native';

import Touchable from '@components/buttons/Touchable';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import IntroScreen from '../screens/IntroScreen';

const Stack = createNativeStackNavigator();

function AuthStack() {
  return (
    <Stack.Navigator
      initialRouteName="Intro"
      screenOptions={({ navigation }) => ({
        // headerShown: false,
        title: '',
        headerShadowVisible: false,
        headerBackTitleVisible: false,
        headerLeft: () => (
          <Touchable onPress={() => navigation.goBack()}>
            {/* <Image */}
            {/*    source={require('../assets/icons/common/back.png')} */}
            {/*    style={styles.backIcon} */}
            {/* /> */}
          </Touchable>
        ),
      })}
    >
      <Stack.Screen
        name="Intro"
        component={IntroScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default AuthStack;

const styles = StyleSheet.create({
  backIcon: {
    width: 28,
    height: 28,
  },
});

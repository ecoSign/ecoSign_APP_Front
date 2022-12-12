import React from 'react';
import { StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';

import Touchable from '@components/common/buttons/Touchable';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthTermsScreen from '@screens/AuthScreen/AuthTermsScreen';
import IdentityVerificationScreen from '@screens/AuthScreen/IdentityVerificationScreen';
import InitialProfileScreen from '@screens/AuthScreen/InitialProfileScreen';
import IntroScreen from '@screens/AuthScreen/IntroScreen';
import PersonalInformationScreen from '@screens/AuthScreen/PersonalInformationScreen';
import SocialChoiceScreen from '@screens/AuthScreen/SocialChoiceScreen';

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
          <Touchable
            onPress={() => navigation.goBack()}
            style={{
              height: 50,
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'row',
              marginLeft: 10,
            }}
          >
            <Icon name="arrow-left" size={16} />
            {/* <Image */}
            {/*  source={require('../assets/icons/common/back.png')} */}
            {/*  style={styles.backIcon} */}
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
      <Stack.Screen name="SocialChoiceScreen" component={SocialChoiceScreen} />
      <Stack.Screen
        name="IdentityVerificationScreen"
        component={IdentityVerificationScreen}
        options={{ headerShown: true }}
      />
      <Stack.Screen
        name="AuthTermsScreen"
        component={AuthTermsScreen}
        options={{ headerShown: true }}
      />
      <Stack.Screen
        name="PersonalInformationScreen"
        component={PersonalInformationScreen}
        options={{ headerShown: true }}
      />
      <Stack.Screen
        name="InitialProfileScreen"
        component={InitialProfileScreen}
        options={{ headerShown: true }}
      />
      <Stack.Screen
        name="SignUpIntro"
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

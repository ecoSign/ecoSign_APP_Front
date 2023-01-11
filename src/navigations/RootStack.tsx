import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

import BackNavigation from '@components/common/buttons/BackNavigation';
import Touchable from '@components/common/buttons/Touchable';
import { AlertStack } from '@navigations/AlertStack';
import AuthStack from '@navigations/AuthStack';
import { CommunityDetailStack } from '@navigations/CommunityDetailStack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SearchResultsScreen from '@screens/Command/SearchResultsScreen';
import SearchScreen from '@screens/Command/SearchScreen';
import EditFavoriteCommunity from '@screens/MainTab/EditFavoriteCommunity';
import SplashScreen from '@screens/SplashScreen';
import { ThemeType } from '@theme/ThemeType';
import useThemedStyles from '@theme/useThemedStyles';

import MainTab from './MainTab';

const Stack = createNativeStackNavigator();

function RootStack() {
  const style = useThemedStyles(styles);

  return (
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{
        headerShown: false,
        headerShadowVisible: false,
        headerTitleAlign: 'center',
      }}
    >
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Main" component={MainTab} />
      <Stack.Screen name="Auth" component={AuthStack} />
      <Stack.Screen
        name="Alert"
        component={AlertStack}
        options={({ navigation, route }) => ({
          headerShown: true,
          headerTitleStyle: style.title,
          title: '알림',
          headerLeft: () => <BackNavigation />,
        })}
      />
      <Stack.Screen
        name="CommunityDetail"
        component={CommunityDetailStack}
        options={({ navigation, route }) => ({
          headerShown: false,
          // headerLeft: () => <BackNavigation />,
        })}
      />
      {/* CommunityDetail */}
      <Stack.Screen name="Search" component={SearchScreen} />
      <Stack.Screen name="SearchResults" component={SearchResultsScreen} />
      <Stack.Screen
        name="EditFavoriteCommunity"
        component={EditFavoriteCommunity}
        options={({ navigation, route }) => ({
          headerShown: true,
          headerTitleStyle: style.title,
          title: '모임 즐겨찾기 편집',
          headerLeft: () => <BackNavigation />,
        })}
      />
    </Stack.Navigator>
  );
}

const styles = (theme: ThemeType) =>
  StyleSheet.create({
    title: {
      // fontFamily: 'SpoqaHanSansNeoMedium',
      fontWeight: '500',
      fontSize: 17,
      lineHeight: 17 * 1.5,
      color: theme.colors.GRAY900,
    },
  });

export default RootStack;

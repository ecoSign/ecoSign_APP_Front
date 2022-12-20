import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import AlertScreen from '@screens/AlertScreen/AlertScreen';
import { ThemeType } from '@theme/ThemeType';
import useThemedStyles from '@theme/useThemedStyles';

const Tab = createMaterialTopTabNavigator();

export function AlertStack() {
  const style = useThemedStyles(styles);

  return (
    <Tab.Navigator
      initialRouteName="CommonAlert"
      screenOptions={{
        tabBarLabelStyle: style.title,
        tabBarInactiveTintColor: '#757575',
        tabBarActiveTintColor: '#9CCC65',
        tabBarStyle: { borderTopWidth: 0, borderColor: 'red' },
        tabBarIndicatorStyle: { backgroundColor: '#9CCC65' },
        lazy: true,
      }}
    >
      <Tab.Screen
        name="CommonAlert"
        children={() => <AlertScreen alert={[1, 2, 3]} />}
        options={{
          title: '일반',
        }}
      />
      <Tab.Screen
        name="GatherAlert"
        children={() => <AlertScreen alert={[]} />}
        options={{
          title: '모임',
        }}
      />
      <Tab.Screen
        name="CommunityAlert"
        children={() => <AlertScreen alert={[1, 2, 3, 4]} />}
        options={{
          title: '커뮤니티',
        }}
      />
    </Tab.Navigator>
  );
}

const styles = (theme: ThemeType) =>
  StyleSheet.create({
    title: {
      // fontFamily: 'SpoqaHanSansNeoRegular',
      fontSize: 14,
      lineHeight: 14 * 1.5,
    },
  });

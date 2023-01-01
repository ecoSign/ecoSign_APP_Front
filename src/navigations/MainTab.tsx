import React from 'react';
import { Image, StyleSheet } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Octicons from 'react-native-vector-icons/Octicons';

import BottomPlusSheet from '@components/elements/MainScreen/BottomPlusSheet';
import { SCREEN_WIDTH } from '@constants/auth';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BookmarkScreen from '@screens/MainTab/BookmarkScreen';
import CommunityScreen from '@screens/MainTab/CommunityScreen';
import GatherScreen from '@screens/MainTab/GatherScreen';
import HomeScreen from '@screens/MainTab/HomeScreen';
import { MainTabParamList } from '@screens/types';
import { ThemeType } from '@theme/ThemeType';
import useThemedStyles from '@theme/useThemedStyles';

const Tab = createBottomTabNavigator<MainTabParamList>();

function MainTab() {
  const style = useThemedStyles(styles);

  function PlusComponent() {
    return null;
  }

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: true,
        tabBarStyle: {
          height: 80,
          borderColor: '#f2f2f2',
          borderTopWidth: 1,
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
        },
        tabBarActiveTintColor: '#9CCC65',
        tabBarInactiveTintColor: '#616161',
        tabBarLabelStyle: {
          fontSize: 12,
          lineHeight: 16,
          fontWeight: '500',
        },
      }}
      // tabBarOptions={{
      //   activeTintColor: 'red',
      //   inactiveTintColor: 'gray',
      // }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: '홈',
          tabBarIcon: ({ focused }) => (
            <Image
              source={
                focused
                  ? require('assets/icons/main/activeHome.png')
                  : require('assets/icons/main/home.png')
              }
              style={
                focused
                  ? [style.icon, style.activeIcon]
                  : [style.icon, style.unActiveIcon]
              }
            />
          ),
        }}
      />

      <Tab.Screen
        name="Gather"
        component={GatherScreen}
        options={{
          title: '모임',
          tabBarIcon: ({ focused }) => (
            <Image
              source={
                focused
                  ? require('../assets/icons/common/activePeople.png')
                  : require('../assets/icons/common/people.png')
              }
              style={
                focused
                  ? [style.icon, style.activeIcon]
                  : [style.icon, style.unActiveIcon]
              }
            />
          ),
        }}
      />
      <Tab.Screen
        name="plus"
        component={PlusComponent}
        options={{
          tabBarShowLabel: false,
          tabBarButton: () => <BottomPlusSheet />,
        }}
      />
      <Tab.Screen
        name="Community"
        component={CommunityScreen}
        options={{
          title: '커뮤니티',
          tabBarIcon: ({ focused }) => (
            <Image
              source={
                focused
                  ? require('assets/icons/main/activeCommunity.png')
                  : require('assets/icons/main/community.png')
              }
              style={
                focused
                  ? [style.icon, style.activeIcon]
                  : [style.icon, style.unActiveIcon]
              }
            />
          ),
        }}
      />

      <Tab.Screen
        name="Bookmark"
        component={BookmarkScreen}
        options={{
          title: '북마크',
          tabBarIcon: ({ focused }) => (
            <Image
              source={
                focused
                  ? require('../assets/icons/common/activeHeart.png')
                  : require('../assets/icons/common/heart.png')
              }
              style={
                focused
                  ? [style.icon, style.activeIcon]
                  : [style.icon, style.unActiveIcon]
              }
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default MainTab;

const styles = (theme: ThemeType) =>
  StyleSheet.create({
    icon: {
      width: 24,
      height: 24,
    },
    activeIcon: {
      color: theme.colors.GREEN400,
    },
    unActiveIcon: {
      color: theme.colors.GRAY700,
    },
    plus: {
      height: 55,
      width: 55,
    },
  });

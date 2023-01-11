import React from 'react';
import { StyleSheet } from 'react-native';

import {
  Bold14SpoqaHanSansNeo,
  Regular14SpoqaHanSansNeo,
} from '@components/common/Label/SpoqaHanSansNeoLabel';
import ProfileHeaderLayout from '@components/common/Layouts/ProfileHeaderLayout';
import { COMMUNITY_CATEGORIES } from '@constants/communityList';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import CommunityDetail from '@screens/CommunityDetail/CommunityDetail';
import { ThemeType } from '@theme/ThemeType';
import useThemedStyles from '@theme/useThemedStyles';

const Tab = createMaterialTopTabNavigator();

interface CommunityDetailStackType {
  route: any;
}
export function CommunityDetailStack({ route }: CommunityDetailStackType) {
  const style = useThemedStyles(styles);

  return (
    <ProfileHeaderLayout
      containerStyle={{
        backgroundColor: '#E5E5E5',
        paddingBottom: 0,
        paddingHorizontal: 0,
      }}
    >
      <Tab.Navigator
        initialRouteName={
          route?.params?.initialNav ? route?.params?.initialNav : '실시간'
        }
        screenOptions={({ route }) => ({
          lazy: true,
          tabBarInactiveTintColor: '#757575',
          tabBarActiveTintColor: '#9CCC65',
          tabBarIndicatorStyle: {
            backgroundColor: '#9CCC65',
            width: 0.5,
          },

          tabBarScrollEnabled: true,
          tabBarItemStyle: {
            width: 'auto',
            paddingHorizontal: 4,
            marginHorizontal: 14,
          },
          tabBarLabel: ({ focused }) =>
            !focused ? (
              <Regular14SpoqaHanSansNeo
                text={route.name}
                style={style.gray400Color}
              />
            ) : (
              <Bold14SpoqaHanSansNeo
                text={route.name}
                style={style.green400Color}
              />
            ),
        })}
      >
        {COMMUNITY_CATEGORIES.map((data, index) => (
          <Tab.Screen
            name={data.title}
            children={() => <CommunityDetail type={data.title} />}
            options={{
              title: data.title,
            }}
          />
        ))}
      </Tab.Navigator>
    </ProfileHeaderLayout>
  );
}

const styles = (theme: ThemeType) =>
  StyleSheet.create({
    gray400Color: {
      color: theme.colors.GRAY400,
    },
    green400Color: {
      color: theme.colors.GREEN400,
    },
  });

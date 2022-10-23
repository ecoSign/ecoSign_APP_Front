import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MainTabParamList } from '@/screens/types';
import { StyleSheet } from 'react-native';
import HomeScreen from '@/screens/bottomTab/HomeScreen';

const Tab = createBottomTabNavigator<MainTabParamList>();

function MainTab() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        // tabBarShowLabel: false,
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: '',
          // tabBarIcon: ({ focused }) => (
          //   <Image
          //     source={
          //       focused
          //         ? require('../assets/icons/mainTab/friend_focus.png')
          //         : require('../assets/icons/mainTab/friend_unFocus.png')
          //     }
          //     style={styles.icon}
          //   />
          // ),
        }}
      />
      {/*<Tab.Screen*/}
      {/*  name="ChatRooms"*/}
      {/*  component={ChatRoomsScreen}*/}
      {/*  options={{*/}
      {/*    title: '',*/}
      {/*    tabBarIcon: ({ focused }) => (*/}
      {/*      <Image*/}
      {/*        source={*/}
      {/*          focused*/}
      {/*            ? require('../assets/icons/mainTab/chat_focus.png')*/}
      {/*            : require('../assets/icons/mainTab/chat_unFocus.png')*/}
      {/*        }*/}
      {/*        style={styles.icon}*/}
      {/*      />*/}
      {/*    ),*/}
      {/*  }}*/}
      {/*/>*/}
      {/*<Tab.Screen*/}
      {/*  name="MyPage"*/}
      {/*  component={MyPageScreen}*/}
      {/*  options={{*/}
      {/*    title: '',*/}
      {/*    tabBarIcon: ({ focused }) => (*/}
      {/*      <Image*/}
      {/*        source={*/}
      {/*          focused*/}
      {/*            ? require('../assets/icons/mainTab/myPage_focus.png')*/}
      {/*            : require('../assets/icons/mainTab/myPage_unFocus.png')*/}
      {/*        }*/}
      {/*        style={styles.icon}*/}
      {/*      />*/}
      {/*    ),*/}
      {/*  }}*/}
      {/*/>*/}
    </Tab.Navigator>
  );
}

export default MainTab;

const styles = StyleSheet.create({
  icon: {
    width: 28,
    height: 28,
  },
});

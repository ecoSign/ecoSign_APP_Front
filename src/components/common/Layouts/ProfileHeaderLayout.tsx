import React from 'react';
import {
  ScrollView,
  StyleProp,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from 'react-native';

import ProfileHeader from '@components/common/HeaderComponent/ProfileHeader';
import { FlexContainer } from '@components/common/containers/FlexContainer';
import { ThemeType } from '@theme/ThemeType';
import useThemedStyles from '@theme/useThemedStyles';

interface ProfileHeaderLayoutType {
  header?: JSX.Element;
  children: JSX.Element | JSX.Element[];
  containerStyle?: StyleProp<ViewStyle>;
}
function ProfileHeaderLayout({
  children,
  header = <ProfileHeader />,
  containerStyle,
}: ProfileHeaderLayoutType) {
  const style = useThemedStyles(styles);

  return (
    <ScrollView style={{ flex: 1 }}>
      {header}
      <FlexContainer style={{ ...style.container, containerStyle }}>
        {children}
      </FlexContainer>
    </ScrollView>
  );
}

const styles = (theme: ThemeType) =>
  StyleSheet.create({
    container: {
      paddingHorizontal: 16,
      paddingBottom: 66,
    },
  });
export default ProfileHeaderLayout;

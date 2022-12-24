import React from 'react';
import {
  ScrollView,
  StyleProp,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from 'react-native';

import { ThemeType } from '@theme/ThemeType';
import useThemedStyles from '@theme/useThemedStyles';

interface ScrollContainerType {
  children: JSX.Element | JSX.Element[];
  style?: ViewStyle;
  contentContainerStyle?: StyleProp<ViewStyle>;
}
function ScrollContainer({
  children,
  style,
  contentContainerStyle,
}: ScrollContainerType) {
  const styles = useThemedStyles(styleSheets);

  return (
    <ScrollView
      style={{ ...styles.container, ...style }}
      contentContainerStyle={contentContainerStyle}
    >
      {children}
    </ScrollView>
  );
}

const styleSheets = (theme: ThemeType) =>
  StyleSheet.create({
    container: {
      paddingHorizontal: 16,
      backgroundColor: theme.colors.WHITE,
    },
  });

export default ScrollContainer;

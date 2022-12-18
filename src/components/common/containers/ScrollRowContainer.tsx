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

interface ScrollViewType {
  children: JSX.Element | JSX.Element[];
  style?: StyleProp<ViewStyle>;
}
export function ScrollRowContainer({ children, style }: ScrollViewType) {
  const styles = useThemedStyles(styleSheet);

  return (
    <ScrollView
      style={style}
      contentContainerStyle={{
        justifyContent: 'space-between',
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {children}
    </ScrollView>
  );
}
const styleSheet = (theme: ThemeType) => StyleSheet.create({});

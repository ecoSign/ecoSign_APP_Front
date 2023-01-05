import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { ThemeType } from '@theme/ThemeType';
import useThemedStyles from '@theme/useThemedStyles';

interface TriangleType {
  style?: any;
}
function Triangle({ style }: TriangleType) {
  const styles = useThemedStyles(styleSheet);
  return <View style={{ ...styles.triangle, ...style }} />;
}

const styleSheet = (theme: ThemeType) =>
  StyleSheet.create({
    triangle: {
      width: 0,
      height: 0,
      backgroundColor: 'transparent',
      borderStyle: 'solid',
      borderLeftWidth: 12.5,
      borderRightWidth: 12.5,
      borderBottomWidth: 8,
      borderLeftColor: 'transparent',
      borderRightColor: 'transparent',
      borderBottomColor: theme.colors.WHITE,
    },
  });
export default Triangle;

import React from 'react';
import { StyleSheet, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export const GradientContainer = ({ children, outerStyle, innerStyle }) => {
  return (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      colors={['#7AE0CC', '#47B1D1']}
      style={[styles.container, outerStyle]}
    >
      <View style={innerStyle}>{children}</View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    // justifyContent: 'center',
    // alignItems: 'center',
    // borderRadius: 15,
    // paddingVertical: 16,
  },
});

import React from 'react';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

type ContainerProps = {
  children: JSX.Element | JSX.Element[];
  outerStyle?: StyleProp<ViewStyle>;
  innerStyle?: StyleProp<ViewStyle>;
};

export function GradientContainer({
  children,
  outerStyle,
  innerStyle,
}: ContainerProps) {
  return (
    <LinearGradient
      // start={{ x: 0, y: 0 }}
      // end={{ x: 1, y: 0 }}
      colors={['#F1F8E9', 'rgba(241, 248, 233, 0)', '#fff']}
      style={[styles.container, outerStyle]}
    >
      <View style={innerStyle}>{children}</View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // borderRadius: 15,
    // paddingVertical: 16,
  },
});

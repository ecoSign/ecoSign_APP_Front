import React from 'react';
import {
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

type ButtonProps = {
  children: JSX.Element | JSX.Element[];
  outerStyle?: StyleProp<ViewStyle>;
  innerStyle?: StyleProp<ViewStyle>;
  onPress?: () => void;
};

export function GradientButton({
  children,
  onPress,
  outerStyle,
  innerStyle,
}: ButtonProps) {
  return (
    <TouchableOpacity style={[styles.btn, outerStyle]} onPress={onPress}>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={['#9cd43f', '#82a306', '#c0e08b']}
        style={[styles.gradientBtn, innerStyle]}
      >
        <View>{children}</View>
      </LinearGradient>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: {
    borderWidth: 1,
    borderRadius: 15,
    borderColor: '#9cd43f',
  },
  gradientBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 14,
    borderRadius: 15,
  },
});

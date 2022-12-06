import React, { ReactChild, ReactChildren } from 'react';
import {
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';

import {
  Medium14GmarketSans,
  Medium18GmarketSans,
} from '@components/common/Label/GmarketLabel';

interface Type {
  text: string;
  onPress?: () => void;
  btnStyle?: StyleProp<ViewStyle>;
}

interface EcoUChildButtonType {
  onPress?: () => void;
  btnStyle?: StyleProp<ViewStyle>;
  children: JSX.Element;
}
// font18
function EcoUButton({ onPress, text, btnStyle }: Type) {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.wrapper, btnStyle]}>
      <Medium18GmarketSans text={text} style={styles.text} />
    </TouchableOpacity>
  );
}
export function EcoUChildButton({
  onPress,
  btnStyle,
  children,
}: EcoUChildButtonType) {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.wrapper, btnStyle]}>
      {children}
    </TouchableOpacity>
  );
}

export default EcoUButton;

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: 'rgba(192, 224, 139, 0.1)',
    alignItems: 'center',
    paddingVertical: 14,
    borderWidth: 1,
    borderColor: '#9CD43F',
    borderRadius: 15,
  },
  text: {
    color: '#9CCC65',
  },
});

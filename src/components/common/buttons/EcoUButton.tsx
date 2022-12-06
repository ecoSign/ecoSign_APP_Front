import React from 'react';
import {
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';

import { GMarketNormalTxt } from '@components/Labels';

interface Type {
  text: string;
  onPress?: () => void;
  btnStyle?: StyleProp<ViewStyle>;
}

function EcoUButton({ onPress, text, btnStyle }: Type) {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.wrapper, btnStyle]}>
      <GMarketNormalTxt text={text} style={styles.text} />
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
    fontSize: 18,
    lineHeight: 27,
    color: '#9CCC65',
  },
});

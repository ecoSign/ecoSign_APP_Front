import React from 'react';
import { StyleSheet, Text, StyleProp, TextStyle } from 'react-native';

type LabelProps = {
  text: string | number;
  style?: StyleProp<TextStyle>;
};

export const GMarketNormalTxt = ({ style, text }: LabelProps) => {
  return <Text style={[styles.gMarKet14, style]}>{text}</Text>;
};

export const NoTo16NormalTxt = ({ style, text }: LabelProps) => {
  return <Text style={[styles.noTol16, style]}>{text}</Text>;
};

export const SemiBold20Poppins = ({ style, text }: LabelProps) => {
  return <Text style={[styles.semiBold20, style]}>{text}</Text>;
};

const styles = StyleSheet.create({
  gMarKet14: {
    fontSize: 14,
    lineHeight: 21,
  },
  noTol16: {
    fontSize: 16,
    lineHeight: 24,
    color: '#212121',
  },
  semiBold20: {
    // fontFamily: 'Poppins-SemiBold',
    fontSize: 20,
    color: '#000',
  },
});

import React from 'react';
import { StyleProp, StyleSheet, Text, TextStyle } from 'react-native';

import Font from '@styles/Font';

type LabelProps = {
  text: string | number;
  style?: StyleProp<TextStyle>;
  onPress?: () => void;
};

// Bold//////////////////////////////////////
export function Bold12GmarketSans({ style, text, onPress }: LabelProps) {
  return (
    <Text style={[styles.BoldBase, styles.size12, style]} onPress={onPress}>
      {text}
    </Text>
  );
}
export function Bold14GmarketSans({ style, text, onPress }: LabelProps) {
  return (
    <Text style={[styles.BoldBase, styles.size14, style]} onPress={onPress}>
      {text}
    </Text>
  );
}
export function Bold16GmarketSans({ style, text, onPress }: LabelProps) {
  return (
    <Text style={[styles.BoldBase, styles.size16, style]} onPress={onPress}>
      {text}
    </Text>
  );
}
export function Bold18GmarketSans({ style, text, onPress }: LabelProps) {
  return (
    <Text style={[styles.BoldBase, styles.size18, style]} onPress={onPress}>
      {text}
    </Text>
  );
}
export function Bold20GmarketSans({ style, text, onPress }: LabelProps) {
  return (
    <Text style={[styles.BoldBase, styles.size20, style]} onPress={onPress}>
      {text}
    </Text>
  );
}

// Medium//////////////////////////////////////

export function Medium12GmarketSans({ style, text, onPress }: LabelProps) {
  return (
    <Text style={[styles.MediumBase, styles.size12, style]} onPress={onPress}>
      {text}
    </Text>
  );
}
export function Medium14GmarketSans({ style, text, onPress }: LabelProps) {
  return (
    <Text style={[styles.MediumBase, styles.size14, style]} onPress={onPress}>
      {text}
    </Text>
  );
}
export function Medium16GmarketSans({ style, text, onPress }: LabelProps) {
  return (
    <Text style={[styles.MediumBase, styles.size16, style]} onPress={onPress}>
      {text}
    </Text>
  );
}
export function Medium18GmarketSans({ style, text, onPress }: LabelProps) {
  return (
    <Text style={[styles.MediumBase, styles.size18, style]} onPress={onPress}>
      {text}
    </Text>
  );
}
export function Medium20GmarketSans({ style, text, onPress }: LabelProps) {
  return (
    <Text style={[styles.MediumBase, styles.size20, style]} onPress={onPress}>
      {text}
    </Text>
  );
}

// Light//////////////////////////////////////

export function Light12GmarketSans({ style, text, onPress }: LabelProps) {
  return (
    <Text style={[styles.LightBase, styles.size12, style]} onPress={onPress}>
      {text}
    </Text>
  );
}
export function Light14GmarketSans({ style, text, onPress }: LabelProps) {
  return (
    <Text style={[styles.LightBase, styles.size14, style]} onPress={onPress}>
      {text}
    </Text>
  );
}
export function Light16GmarketSans({ style, text, onPress }: LabelProps) {
  return (
    <Text style={[styles.LightBase, styles.size16, style]} onPress={onPress}>
      {text}
    </Text>
  );
}
export function Light18GmarketSans({ style, text, onPress }: LabelProps) {
  return (
    <Text style={[styles.LightBase, styles.size18, style]} onPress={onPress}>
      {text}
    </Text>
  );
}
export function Light20GmarketSans({ style, text, onPress }: LabelProps) {
  return (
    <Text style={[styles.LightBase, styles.size20, style]} onPress={onPress}>
      {text}
    </Text>
  );
}

const styles = StyleSheet.create({
  BoldBase: {
    fontFamily: Font.GmarketSansTTFBold,
  },
  MediumBase: {
    fontFamily: Font.GmarketSansTTFMedium,
  },
  LightBase: { fontFamily: Font.GmarketSansTTFLight },
  size12: {
    fontSize: 12,
  },
  size14: { fontSize: 14 },
  size16: { fontSize: 16 },
  size18: { fontSize: 18, lineHeight: 27 },
  size20: { fontSize: 20 },
});

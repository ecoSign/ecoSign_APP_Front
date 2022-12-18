import React from 'react';
import {
  StyleProp,
  StyleSheet,
  Text,
  TextProps,
  TextStyle,
} from 'react-native';

import Font from '@styles/Font';

interface LabelProps extends TextProps {
  text: string | number;
  style?: StyleProp<TextStyle>;
}
// Bold//////////////////////////////////////
export function Bold12GmarketSans({ style, text, ...props }: LabelProps) {
  return (
    <Text style={[styles.BoldBase, styles.size12, style]} {...props}>
      {text}
    </Text>
  );
}
export function Bold14GmarketSans({ style, text, ...props }: LabelProps) {
  return (
    <Text style={[styles.BoldBase, styles.size14, style]} {...props}>
      {text}
    </Text>
  );
}
export function Bold16GmarketSans({ style, text, ...props }: LabelProps) {
  return (
    <Text style={[styles.BoldBase, styles.size16, style]} {...props}>
      {text}
    </Text>
  );
}
export function Bold17GmarketSans({ style, text, ...props }: LabelProps) {
  return (
    <Text style={[styles.BoldBase, styles.size17, style]} {...props}>
      {text}
    </Text>
  );
}
export function Bold18GmarketSans({ style, text, ...props }: LabelProps) {
  return (
    <Text style={[styles.BoldBase, styles.size18, style]} {...props}>
      {text}
    </Text>
  );
}
export function Bold20GmarketSans({ style, text, ...props }: LabelProps) {
  return (
    <Text style={[styles.BoldBase, styles.size20, style]} {...props}>
      {text}
    </Text>
  );
}

// Medium//////////////////////////////////////

export function Medium12GmarketSans({ style, text, ...props }: LabelProps) {
  return (
    <Text style={[styles.MediumBase, styles.size12, style]} {...props}>
      {text}
    </Text>
  );
}
export function Medium14GmarketSans({ style, text, ...props }: LabelProps) {
  return (
    <Text style={[styles.MediumBase, styles.size14, style]} {...props}>
      {text}
    </Text>
  );
}
export function Medium16GmarketSans({ style, text, ...props }: LabelProps) {
  return (
    <Text style={[styles.MediumBase, styles.size16, style]} {...props}>
      {text}
    </Text>
  );
}
export function Medium17GmarketSans({ style, text, ...props }: LabelProps) {
  return (
    <Text style={[styles.MediumBase, styles.size17, style]} {...props}>
      {text}
    </Text>
  );
}
export function Medium18GmarketSans({ style, text, ...props }: LabelProps) {
  return (
    <Text style={[styles.MediumBase, styles.size18, style]} {...props}>
      {text}
    </Text>
  );
}
export function Medium20GmarketSans({ style, text, ...props }: LabelProps) {
  return (
    <Text style={[styles.MediumBase, styles.size20, style]} {...props}>
      {text}
    </Text>
  );
}

// Light//////////////////////////////////////

export function Light12GmarketSans({ style, text, ...props }: LabelProps) {
  return (
    <Text style={[styles.LightBase, styles.size12, style]} {...props}>
      {text}
    </Text>
  );
}
export function Light14GmarketSans({ style, text, ...props }: LabelProps) {
  return (
    <Text style={[styles.LightBase, styles.size14, style]} {...props}>
      {text}
    </Text>
  );
}
export function Light16GmarketSans({ style, text, ...props }: LabelProps) {
  return (
    <Text style={[styles.LightBase, styles.size16, style]} {...props}>
      {text}
    </Text>
  );
}
export function Light17GmarketSans({ style, text, ...props }: LabelProps) {
  return (
    <Text style={[styles.LightBase, styles.size17, style]} {...props}>
      {text}
    </Text>
  );
}
export function Light18GmarketSans({ style, text, ...props }: LabelProps) {
  return (
    <Text style={[styles.LightBase, styles.size18, style]} {...props}>
      {text}
    </Text>
  );
}
export function Light20GmarketSans({ style, text, ...props }: LabelProps) {
  return (
    <Text style={[styles.LightBase, styles.size20, style]} {...props}>
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
    lineHeight: 18,
  },
  size14: { fontSize: 14, lineHeight: 21 },
  size16: { fontSize: 16, lineHeight: 24 },
  size17: { fontSize: 17, lineHeight: 25 },
  size18: { fontSize: 18, lineHeight: 27 },
  size20: { fontSize: 20, lineHeight: 30 },
});

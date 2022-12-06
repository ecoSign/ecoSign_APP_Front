import React from 'react';
import { StyleProp, StyleSheet, Text, TextStyle } from 'react-native';

import Font from '@styles/Font';

type LabelProps = {
  text: string | number;
  style?: StyleProp<TextStyle>;
  onPress?: () => void;
};

// Bold//////////////////////////////////////

export function Bold12SpoqaHanSansNeo({ style, text, onPress }: LabelProps) {
  return (
    <Text style={[styles.BoldBase, styles.size12, style]} onPress={onPress}>
      {text}
    </Text>
  );
}
export function Bold14SpoqaHanSansNeo({ style, text, onPress }: LabelProps) {
  return (
    <Text style={[styles.BoldBase, styles.size14, style]} onPress={onPress}>
      {text}
    </Text>
  );
}
export function Bold16SpoqaHanSansNeo({ style, text, onPress }: LabelProps) {
  return (
    <Text style={[styles.BoldBase, styles.size16, style]} onPress={onPress}>
      {text}
    </Text>
  );
}
export function Bold18SpoqaHanSansNeo({ style, text, onPress }: LabelProps) {
  return (
    <Text style={[styles.BoldBase, styles.size18, style]} onPress={onPress}>
      {text}
    </Text>
  );
}
export function Bold20SpoqaHanSansNeo({ style, text, onPress }: LabelProps) {
  return (
    <Text style={[styles.BoldBase, styles.size20, style]} onPress={onPress}>
      {text}
    </Text>
  );
}

// Medium//////////////////////////////////////

export function Medium12SpoqaHanSansNeo({ style, text, onPress }: LabelProps) {
  return (
    <Text style={[styles.MediumBase, styles.size12, style]} onPress={onPress}>
      {text}
    </Text>
  );
}
export function Medium14SpoqaHanSansNeo({ style, text, onPress }: LabelProps) {
  return (
    <Text style={[styles.MediumBase, styles.size14, style]} onPress={onPress}>
      {text}
    </Text>
  );
}
export function Medium16SpoqaHanSansNeo({ style, text, onPress }: LabelProps) {
  return (
    <Text style={[styles.MediumBase, styles.size16, style]} onPress={onPress}>
      {text}
    </Text>
  );
}
export function Medium18SpoqaHanSansNeo({ style, text, onPress }: LabelProps) {
  return (
    <Text style={[styles.MediumBase, styles.size18, style]} onPress={onPress}>
      {text}
    </Text>
  );
}
export function Medium20SpoqaHanSansNeo({ style, text, onPress }: LabelProps) {
  return (
    <Text style={[styles.MediumBase, styles.size20, style]} onPress={onPress}>
      {text}
    </Text>
  );
}

// Light//////////////////////////////////////

export function Light12SpoqaHanSansNeo({ style, text, onPress }: LabelProps) {
  return (
    <Text style={[styles.LightBase, styles.size12, style]} onPress={onPress}>
      {text}
    </Text>
  );
}
export function Light14SpoqaHanSansNeo({ style, text, onPress }: LabelProps) {
  return (
    <Text style={[styles.LightBase, styles.size14, style]} onPress={onPress}>
      {text}
    </Text>
  );
}
export function Light16SpoqaHanSansNeo({ style, text, onPress }: LabelProps) {
  return (
    <Text style={[styles.LightBase, styles.size16, style]} onPress={onPress}>
      {text}
    </Text>
  );
}
export function Light18SpoqaHanSansNeo({ style, text, onPress }: LabelProps) {
  return (
    <Text style={[styles.LightBase, styles.size18, style]} onPress={onPress}>
      {text}
    </Text>
  );
}
export function Light20SpoqaHanSansNeo({ style, text, onPress }: LabelProps) {
  return (
    <Text style={[styles.LightBase, styles.size20, style]} onPress={onPress}>
      {text}
    </Text>
  );
}

// Regular//////////////////////////////////////

export function Regular12SpoqaHanSansNeo({ style, text, onPress }: LabelProps) {
  return (
    <Text style={[styles.RegularBase, styles.size12, style]} onPress={onPress}>
      {text}
    </Text>
  );
}
export function Regular14SpoqaHanSansNeo({ style, text, onPress }: LabelProps) {
  return (
    <Text style={[styles.RegularBase, styles.size14, style]} onPress={onPress}>
      {text}
    </Text>
  );
}
export function Regular16SpoqaHanSansNeo({ style, text, onPress }: LabelProps) {
  return (
    <Text style={[styles.RegularBase, styles.size16, style]} onPress={onPress}>
      {text}
    </Text>
  );
}
export function Regular18SpoqaHanSansNeo({ style, text, onPress }: LabelProps) {
  return (
    <Text style={[styles.RegularBase, styles.size18, style]} onPress={onPress}>
      {text}
    </Text>
  );
}
export function Regular20SpoqaHanSansNeo({ style, text, onPress }: LabelProps) {
  return (
    <Text style={[styles.RegularBase, styles.size20, style]} onPress={onPress}>
      {text}
    </Text>
  );
}

// Thin//////////////////////////////////////

export function Thin12SpoqaHanSansNeo({ style, text, onPress }: LabelProps) {
  return (
    <Text style={[styles.ThinBase, styles.size12, style]} onPress={onPress}>
      {text}
    </Text>
  );
}
export function Thin14SpoqaHanSansNeo({ style, text, onPress }: LabelProps) {
  return (
    <Text style={[styles.ThinBase, styles.size14, style]} onPress={onPress}>
      {text}
    </Text>
  );
}
export function Thin16SpoqaHanSansNeo({ style, text, onPress }: LabelProps) {
  return (
    <Text style={[styles.ThinBase, styles.size16, style]} onPress={onPress}>
      {text}
    </Text>
  );
}
export function Thin18SpoqaHanSansNeo({ style, text, onPress }: LabelProps) {
  return (
    <Text style={[styles.ThinBase, styles.size18, style]} onPress={onPress}>
      {text}
    </Text>
  );
}
export function Thin20SpoqaHanSansNeo({ style, text, onPress }: LabelProps) {
  return (
    <Text style={[styles.ThinBase, styles.size20, style]} onPress={onPress}>
      {text}
    </Text>
  );
}

const styles = StyleSheet.create({
  // BoldBase: {
  //   fontFamily: Font.SpoqaHanSansNeoBold,
  // },
  // MediumBase: {
  //   fontFamily: Font.SpoqaHanSansNeoMedium,
  // },
  // LightBase: { fontFamily: Font.SpoqaHanSansNeoLight },
  // RegularBase: { fontFamily: Font.SpoqaHanSansNeoRegular },
  // ThinBase: { fontFamily: Font.SpoqaHanSansNeoThin },
  BoldBase: {
    // fontFamily: Font.GmarketSansTTFBold,
  },
  MediumBase: {
    // fontFamily: Font.GmarketSansTTFBold,
  },
  LightBase: {
    // fontFamily: Font.GmarketSansTTFBold
  },
  RegularBase: {
    // fontFamily: Font.GmarketSansTTFBold
  },
  ThinBase: {
    // fontFamily: Font.GmarketSansTTFBold
  },

  size12: {
    fontSize: 12,
  },
  size14: { fontSize: 14 },
  size16: { fontSize: 16 },
  size18: { fontSize: 18, lineHeight: 27 },
  size20: { fontSize: 20 },
});

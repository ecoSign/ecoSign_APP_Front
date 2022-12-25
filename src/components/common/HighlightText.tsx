import React from 'react';
import { StyleSheet, Text, TextProps, View } from 'react-native';

import { Light16SpoqaHanSansNeo } from '@components/common/Label/SpoqaHanSansNeoLabel';
import Font from '@styles/Font';
import { ThemeType } from '@theme/ThemeType';
import useThemedStyles from '@theme/useThemedStyles';

interface HighlightTextType extends TextProps {
  text: string;
  highlight: string;
  textStyle: any;
  highlightStyle: any;
}
function HighlightText({
  text,
  highlight,
  textStyle,
  highlightStyle,
  ...props
}: HighlightTextType) {
  const initial = text.split(highlight);
  const styles = useThemedStyles(styleSheets);

  return (
    <Text {...props}>
      {initial.map((normal: string, i: number) =>
        i > 0 ? (
          <React.Fragment key={i}>
            <Light16SpoqaHanSansNeo
              style={{ ...styles.focusStyle, ...highlightStyle }}
              text={highlight}
            />
            <Light16SpoqaHanSansNeo
              style={{ ...styles.focusStyle, ...textStyle }}
              text={normal}
            />
          </React.Fragment>
        ) : (
          <Light16SpoqaHanSansNeo
            style={{ ...styles.focusStyle, ...textStyle }}
            text={normal}
            key={i}
          />
        ),
      )}
    </Text>
  );
}

const styleSheets = (theme: ThemeType) =>
  StyleSheet.create({
    textStyle: {
      color: theme.colors.GRAY800,
      fontSize: 16,
      lineHeight: 24,
      fontWeight: '500',
      // fontFamily: Font.SpoqaHanSansNeoLight
    },
    focusStyle: {
      color: theme.colors.GREEN400,
      fontSize: 16,
      lineHeight: 24,
      fontWeight: '500',
      // fontFamily: Font.SpoqaHanSansNeoLight
    },
  });

export default HighlightText;

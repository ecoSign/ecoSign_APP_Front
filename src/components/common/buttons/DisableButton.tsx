import React from 'react';
import {
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';

import { Bold16SpoqaHanSansNeo } from '@components/common/Label/SpoqaHanSansNeoLabel';
import { ThemeType } from '@theme/ThemeType';
import useThemedStyles from '@theme/useThemedStyles';

interface Type {
  text: string;
  onPress?: () => void;
  btnStyle?: StyleProp<ViewStyle>;
  disabled?: boolean;
}
function DisableButton({ text, onPress, disabled = false }: Type) {
  const style = useThemedStyles(styles);

  return (
    <TouchableOpacity
      disabled={disabled}
      style={[
        style.buttonStyle,
        !disabled ? style.ActiveButtonStyle : style.UnActiveButtonStyle,
      ]}
      onPress={onPress}
    >
      <Bold16SpoqaHanSansNeo
        text={text}
        style={[
          style.LabelStyle,
          !disabled ? style.ActiveLabelStyle : style.UnActiveLabelStyle,
        ]}
      />
    </TouchableOpacity>
  );
}
const styles = (theme: ThemeType) =>
  StyleSheet.create({
    buttonStyle: {
      height: 50,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 10,
    },
    ActiveButtonStyle: {
      backgroundColor: theme.colors.MAIN,
    },
    UnActiveButtonStyle: {
      backgroundColor: theme.colors.DISABLE,
    },
    LabelStyle: { fontWeight: '700' },
    ActiveLabelStyle: {
      color: theme.colors.WHITE,
    },
    UnActiveLabelStyle: {
      color: theme.colors.GRAY500,
    },
  });
export default DisableButton;

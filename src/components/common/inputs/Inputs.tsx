import React from 'react';
import { Image, StyleSheet, TextInput } from 'react-native';

import Touchable from '@components/common/buttons/Touchable';
import RowContainer from '@components/common/containers/RowContainer';
import {
  HasResetInputType,
  UserInputType,
} from '@components/common/inputs/type';
import useToggle from '@hooks/useToggle';
import { ThemeType } from '@theme/ThemeType';
import useThemedStyles from '@theme/useThemedStyles';

export const SearchInput = () => {};

export function UserInput({
  value,
  onChangeText,
  placeholder,
  inputStyle,
  autoCapitalize = 'none',
  keyboardType,
  onSubmitEditing,
  leftIcon,
  rightIcon,
  inputRef,
  autoCorrect = false,
  secureTextEntry = false,
}: UserInputType) {
  const [isFocused, toggle, setIsFocused] = useToggle();
  const style = useThemedStyles(styles);

  return (
    <RowContainer
      style={{
        ...style.container,
        borderBottomColor: isFocused ? '#212121' : '#eee',
        height: 54,
      }}
    >
      {leftIcon && <Image source={leftIcon} style={style.leftIcon} />}
      <TextInput
        ref={inputRef}
        value={value}
        onChangeText={onChangeText}
        style={[style.input, inputStyle]}
        placeholder={placeholder}
        placeholderTextColor="#BDBDBD"
        autoCapitalize={autoCapitalize}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        keyboardType={keyboardType}
        onSubmitEditing={onSubmitEditing}
        autoCorrect={autoCorrect}
        secureTextEntry={secureTextEntry}
      />
      {rightIcon && <Image source={rightIcon} style={style.rightIcon} />}
    </RowContainer>
  );
}

export function HasResetInput({
  value,
  onChangeText,
  placeholder,
  inputStyle,
  autoCapitalize = 'none',
  keyboardType,
  onSubmitEditing,
  autoCorrect = false,
  secureTextEntry = false,
  maxLength,
  onFocus,
  onBlur,
}: HasResetInputType) {
  const style = useThemedStyles(styles);

  return (
    <RowContainer style={{ justifyContent: 'space-between', flex: 1 }}>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        style={[style.resetInput, inputStyle]}
        placeholder={placeholder}
        placeholderTextColor="#BDBDBD"
        autoCapitalize={autoCapitalize}
        keyboardType={keyboardType}
        onSubmitEditing={onSubmitEditing}
        autoCorrect={autoCorrect}
        secureTextEntry={secureTextEntry}
        maxLength={maxLength}
        onFocus={onFocus}
        onBlur={onBlur}
      />
      <Touchable
        onPress={() => {
          if (onChangeText) {
            onChangeText('');
          }
        }}
      >
        <Image
          source={require('../../../assets/icons/auth/close.png')}
          style={style.closeImage}
          resizeMode="contain"
        />
      </Touchable>
    </RowContainer>
  );
}

const styles = (theme: ThemeType) =>
  StyleSheet.create({
    container: {
      borderBottomWidth: 2,
      paddingHorizontal: 14,
      marginTop: 12,
      justifyContent: 'space-between',
    },
    leftIcon: {
      width: 24,
      height: 24,
      marginRight: 6,
    },
    rightIcon: {
      width: 18,
      height: 18,
      marginRight: 4,
    },
    input: {
      flex: 1,
      fontSize: 16,
      lineHeight: 24,
      color: theme.colors.GRAY900,
    },
    resetInput: {
      color: theme.colors.GRAY900,
      fontSize: 16,
      height: 24,
      flex: 1,
      display: 'flex',
    },
    closeImage: {
      width: 18,
      height: 16,
    },
  });

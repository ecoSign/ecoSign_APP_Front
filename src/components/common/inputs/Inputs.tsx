import React from 'react';
import { Image, StyleSheet, TextInput } from 'react-native';

import Touchable from '@components/common/buttons/Touchable';
import RowContainer from '@components/common/containers/RowContainer';
import {
  HasResetInputType,
  UserInputType,
} from '@components/common/inputs/type';
import useToggle from '@hooks/useToggle';

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

  return (
    <RowContainer
      style={{
        ...styles.container,
        borderBottomColor: isFocused ? '#212121' : '#eee',
        height: 54,
      }}
    >
      {leftIcon && <Image source={leftIcon} style={styles.leftIcon} />}
      <TextInput
        ref={inputRef}
        value={value}
        onChangeText={onChangeText}
        style={[styles.input, inputStyle]}
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
      {rightIcon && <Image source={rightIcon} style={styles.rightIcon} />}
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
}: HasResetInputType) {
  return (
    <RowContainer style={{ justifyContent: 'space-between', flex: 1 }}>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        style={[styles.resetInput, inputStyle]}
        placeholder={placeholder}
        placeholderTextColor="#BDBDBD"
        autoCapitalize={autoCapitalize}
        keyboardType={keyboardType}
        onSubmitEditing={onSubmitEditing}
        autoCorrect={autoCorrect}
        secureTextEntry={secureTextEntry}
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
          style={styles.closeImage}
          resizeMode="contain"
        />
      </Touchable>
    </RowContainer>
  );
}

const styles = StyleSheet.create({
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
    color: '#212121',
  },
  resetInput: {
    color: '#BDBDBD',
    fontSize: 16,
    lineHeight: 24,
  },
  closeImage: {
    width: 18,
    height: 16,
  },
});

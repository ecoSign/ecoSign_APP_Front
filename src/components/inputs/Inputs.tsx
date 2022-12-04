import React, { useState } from 'react';
import { Image, StyleSheet, TextInput, View } from 'react-native';

import RowContainer from '@components/containers/RowContainer';
import { UserInputType } from '@components/inputs/type';
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
      }}
    >
      <RowContainer>
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
      </RowContainer>
      {rightIcon && <Image source={rightIcon} style={styles.rightIcon} />}
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
});

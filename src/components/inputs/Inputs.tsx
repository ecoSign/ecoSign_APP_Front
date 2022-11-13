import React, { useState } from 'react';
import { Image, StyleSheet, TextInput, View } from 'react-native';
import RowContainer from '@components/containers/RowContainer';

export const SearchInput = () => {};

export const UserInput = ({
  value,
  onChangeText,
  placeholder,
  inputStyle,
  leftIcon,
  rightIcon,
  autoCapitalize = 'none',
  keyboardType,
  onSubmitEditing,
  inputRef,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <RowContainer
      style={{
        ...styles.container,
        borderBottomColor: isFocused ? '#212121' : '#eee',
      }}
    >
      <RowContainer>
        <Image source={leftIcon} style={styles.leftIcon} />
        <TextInput
          ref={inputRef}
          value={value}
          onChangeText={onChangeText}
          style={[styles.input, inputStyle]}
          placeholder={placeholder}
          placeholderTextColor={'#BDBDBD'}
          autoCapitalize={autoCapitalize}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          keyboardType={keyboardType}
          onSubmitEditing={onSubmitEditing}
        />
      </RowContainer>
      <Image source={rightIcon} style={styles.rightIcon} />
    </RowContainer>
  );
};

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

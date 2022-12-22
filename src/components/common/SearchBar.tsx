import React from 'react';
import { Image, StyleSheet, Text, TextInput, View } from 'react-native';
import { useSelector } from 'react-redux';

import Touchable from '@components/common/buttons/Touchable';
import RowContainer from '@components/common/containers/RowContainer';
import useInput from '@hooks/useInput';
import { ThemeType } from '@theme/ThemeType';
import useThemedStyles from '@theme/useThemedStyles';

interface SearchBarType {
  onPress: any;
}
function SearchBar({ onPress }: SearchBarType) {
  const styles = useThemedStyles(styleSheets);
  const [keyword, onChangeKeyword, setKeyword] = useInput('');

  const onSearch = () => {
    if (keyword.length > 0) {
      onPress(keyword);
      setKeyword('');
    }
  };
  return (
    <RowContainer style={styles.container}>
      <TextInput
        value={keyword}
        style={[styles.inputStyle]}
        placeholder="키워드로 쉽게 검색해보세요!"
        placeholderTextColor="#B7B7B7"
        onChangeText={onChangeKeyword}
        onSubmitEditing={onSearch}
        returnKeyLabel="send"
        returnKeyType="send"
      />
      <Touchable onPress={onSearch}>
        <Image
          source={require('assets/icons/command/magnifyingGlass.png')}
          style={styles.icon}
        />
      </Touchable>
    </RowContainer>
  );
}
const styleSheets = (theme: ThemeType) =>
  StyleSheet.create({
    icon: {
      width: 24,
      height: 24,
      resizeMode: 'contain',
    },
    container: {
      paddingHorizontal: 14,
      height: 40,
      borderRadius: 20,
      borderWidth: 1,
      borderColor: theme.colors.GREEN400,
      width: '100%',
    },
    inputStyle: {
      flex: 1,
      height: 40,
      color: theme.colors.GRAY900,
    },
  });

export default SearchBar;

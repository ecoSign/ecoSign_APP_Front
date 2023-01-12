import React, { useCallback } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
  ViewStyle,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import Touchable from '@components/common/buttons/Touchable';
import RowContainer from '@components/common/containers/RowContainer';
import useInput from '@hooks/useInput';
import { useNavigation } from '@react-navigation/native';
import { ThemeType } from '@theme/ThemeType';
import useThemedStyles from '@theme/useThemedStyles';
import { SearchKeyword } from '@utils/SearchKeyword';

import { addKeyword } from '@/redux/slices/keywordSlice';

interface SearchBarType {
  style?: ViewStyle;
}
function SearchBar({ style }: SearchBarType) {
  const navigation: any = useNavigation();
  const styles = useThemedStyles(styleSheets);
  const dispatch = useDispatch();

  const [keyword, onChangeKeyword, setKeyword] = useInput('');

  const onSearch = () => {
    if (keyword.length > 0) {
      SearchKeyword(keyword, dispatch, navigation);
      setKeyword('');
    }
  };

  return (
    <RowContainer style={{ ...styles.container, ...style }}>
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
          source={require('assets/icons/common/magnifyingGlass.png')}
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

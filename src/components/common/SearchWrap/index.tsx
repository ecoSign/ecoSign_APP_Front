import React from 'react';
import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { useDispatch } from 'react-redux';

import { Regular14SpoqaHanSansNeo } from '@components/common/Label/SpoqaHanSansNeoLabel';
import Touchable from '@components/common/buttons/Touchable';
import RowContainer from '@components/common/containers/RowContainer';
import { CATEGORIES } from '@constants/categories';
import { useNavigation } from '@react-navigation/native';
import { ThemeType } from '@theme/ThemeType';
import useThemedStyles from '@theme/useThemedStyles';

import { searchKeyword } from '@/utils/searchKeyword';

interface SearchWrapType {
  data?: any;
  gap?: number;
  solidGap?: number;
  buttonStyle?: ViewStyle;
  fontStyle?: TextStyle;
  containerStyle?: ViewStyle;
}

function SearchWrap({
  data = CATEGORIES,
  gap = 8,
  containerStyle,
  buttonStyle,
  fontStyle,
}: SearchWrapType) {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const onPressKeyWord = (keyword: string) => {
    searchKeyword(keyword, dispatch, navigation);
  };
  const styleSheet = (theme: ThemeType) =>
    StyleSheet.create({
      solidWrapBox: {
        flexWrap: 'wrap',
        paddingHorizontal: gap / -2,
        justifyContent: 'center',
      },
      green400Color: { color: theme.colors.GREEN400 },
    });
  const styles = useThemedStyles(styleSheet);

  return (
    <RowContainer style={{ ...styles.solidWrapBox, ...containerStyle }}>
      {data?.map((data: string, index: number) => (
        <Touchable
          style={{ marginHorizontal: gap / 2, ...buttonStyle }}
          key={index}
          onPress={() => {
            onPressKeyWord(data);
          }}
        >
          <Regular14SpoqaHanSansNeo
            text={data}
            style={{ ...styles.green400Color, ...fontStyle }}
          />
        </Touchable>
      ))}
    </RowContainer>
  );
}

export default SearchWrap;

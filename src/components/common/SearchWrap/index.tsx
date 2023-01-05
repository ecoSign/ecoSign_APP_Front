import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useDispatch } from 'react-redux';

import { Regular14SpoqaHanSansNeo } from '@components/common/Label/SpoqaHanSansNeoLabel';
import Touchable from '@components/common/buttons/Touchable';
import RowContainer from '@components/common/containers/RowContainer';
import { SCREEN_WIDTH } from '@constants/auth';
import { useNavigation } from '@react-navigation/native';
import { ThemeType } from '@theme/ThemeType';
import useThemedStyles from '@theme/useThemedStyles';
import { SearchKeyword } from '@utils/SearchKeyword';

interface SearchWrapType {
  data?: any;
  gap?: number;
  solidGap?: number;
  buttonStyle?: any;
  fontStyle?: any;
  containerStyle?: any;
}
function SearchWrap({
  data = [
    '서핑',
    '원데이클래스',
    '독서',
    '손뜨개',
    '플로깅',
    '영상제작',
    '유기견',
    '등산',
  ],
  gap = 8,
  containerStyle,
  buttonStyle,
  fontStyle,
}: SearchWrapType) {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const onPressKeyWord = (keyword: string) => {
    SearchKeyword(keyword, dispatch, navigation);
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

import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { useDispatch } from 'react-redux';

import {
  Light14SpoqaHanSansNeo,
  Light18SpoqaHanSansNeo,
} from '@components/common/Label/SpoqaHanSansNeoLabel';
import SearchWrap from '@components/common/SearchWrap';
import Touchable from '@components/common/buttons/Touchable';
import RowContainer from '@components/common/containers/RowContainer';
import { SCREEN_WIDTH } from '@constants/auth';
import { useNavigation } from '@react-navigation/native';
import { ThemeType } from '@theme/ThemeType';
import useThemedStyles from '@theme/useThemedStyles';
import { SearchKeyword } from '@utils/SearchKeyword';

import { addKeyword } from '@/redux/slices/keywordSlice';

function NoneResult({ keyword }: { keyword: string }) {
  const styles = useThemedStyles(styleSheets);
  const navigation: any = useNavigation();
  const dispatch = useDispatch();

  const onPressKeyWord = (keyword: string) => {
    SearchKeyword(keyword, dispatch, navigation);
  };

  return (
    <View style={{ alignItems: 'center' }}>
      <View style={styles.alignTop}>
        <RowContainer>
          <Light18SpoqaHanSansNeo
            text={`‘${keyword}’ `}
            style={styles.green400Color}
          />
          <Light18SpoqaHanSansNeo text="에 대한" style={styles.gray900Color} />
        </RowContainer>
        <Light18SpoqaHanSansNeo
          text="검색결과를 찾지 못하였어요"
          style={styles.gray900Color}
        />
      </View>
      <RowContainer>
        <Image
          source={require('assets/images/common/NoneSearch.png')}
          style={styles.noneImage}
        />
      </RowContainer>
      <View style={styles.recommendBox}>
        <Light14SpoqaHanSansNeo
          text="이런 검색어는 어떠세요?"
          style={{ ...styles.gray700Color, marginBottom: 23 }}
        />
        <SearchWrap
          gap={6}
          buttonStyle={styles.dotBox}
          fontStyle={styles.gray900Color}
          containerStyle={styles.wrapBox}
        />
      </View>
    </View>
  );
}
const gap = 8;
const solidGap = 6;

const styleSheets = (theme: ThemeType) =>
  StyleSheet.create({
    container: {
      paddingTop: 12,
    },
    gray900Color: {
      color: theme.colors.GRAY900,
    },
    gray700Color: {
      color: theme.colors.GRAY700,
    },
    gray600Color: {
      color: theme.colors.GRAY600,
    },
    green400Color: {
      color: theme.colors.GREEN400,
    },
    alignTop: {
      alignItems: 'center',
      marginTop: 42,
    },
    noneImage: {
      width: SCREEN_WIDTH * 0.8,
      aspectRatio: 298 / 180,
      resizeMode: 'contain',
    },
    recommendBox: {
      backgroundColor: 'rgba(192, 224, 139, 0.1)',
      borderRadius: 10,
      paddingVertical: 14,
      paddingTop: 23,
      paddingBottom: 25,
      alignItems: 'center',
    },
    dotBox: {
      justifyContent: 'center',
      borderWidth: 1,
      borderRadius: 20,
      borderColor: theme.colors.GRAY200,
      paddingHorizontal: 16,
      paddingVertical: 4.5,
      marginBottom: 13.5,
      marginHorizontal: gap / 2,
      backgroundColor: theme.colors.WHITE,
    },
    wrapBox: {
      flexWrap: 'wrap',
      justifyContent: 'center',
      paddingHorizontal: gap / -2,
      flex: 0,
    },
  });
export default NoneResult;

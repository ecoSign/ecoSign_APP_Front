import React, { useCallback } from 'react';
import { Image, ScrollView, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import {
  Regular11SpoqaHanSansNeo,
  Regular14SpoqaHanSansNeo,
  Regular18SpoqaHanSansNeo,
} from '@components/common/Label/SpoqaHanSansNeoLabel';
import SearchBar from '@components/common/SearchBar';
import SearchWrap from '@components/common/SearchWrap';
import Touchable from '@components/common/buttons/Touchable';
import { FlexContainer } from '@components/common/containers/FlexContainer';
import RowContainer from '@components/common/containers/RowContainer';
import { ThemeType } from '@theme/ThemeType';
import useThemedStyles from '@theme/useThemedStyles';

import { removeKeyword, resetKeyword } from '@/redux/slices/keywordSlice';
import useAppStore from '@/redux/useAppStore';
import { searchKeyword } from '@/utils/searchKeyword';

const gap = 8;

function SearchScreen({ navigation }: { navigation: any }) {
  const { keywordList } = useAppStore((state) => state.keywordList);

  const styles = useThemedStyles(styleSheets);
  const dispatch = useDispatch();

  const onDeleteSearchKeyword = useCallback(
    (keyword: string) => {
      dispatch(removeKeyword(keyword));
    },
    [keywordList],
  );

  const onPressKeyWord = (keyword: string) => {
    searchKeyword(keyword, dispatch, navigation);
  };

  return (
    <FlexContainer style={styles.container}>
      <RowContainer style={{ height: 65 }}>
        <SearchBar />
      </RowContainer>
      <ScrollView style={styles.halfContainer}>
        <RowContainer style={styles.titleBox}>
          <Regular18SpoqaHanSansNeo
            text="최근검색어"
            style={styles.gray900Color}
          />
          <Touchable
            onPress={() => {
              dispatch(resetKeyword());
            }}
          >
            <Regular11SpoqaHanSansNeo
              text="전체삭제"
              style={styles.gray600Color}
            />
          </Touchable>
        </RowContainer>
        <RowContainer style={styles.wrapBox}>
          {keywordList?.map((data: string, index: number) => (
            <Touchable
              style={styles.dotBox}
              key={index}
              onPress={() => {
                onPressKeyWord(data);
              }}
            >
              <Regular14SpoqaHanSansNeo
                text={data}
                style={{ ...styles.gray900Color, marginRight: 12 }}
              />
              <Touchable
                onPress={() => {
                  onDeleteSearchKeyword(data);
                }}
              >
                <Image
                  source={require('assets/icons/common/closeGray.png')}
                  style={styles.close}
                />
              </Touchable>
            </Touchable>
          ))}
        </RowContainer>
      </ScrollView>
      <ScrollView style={{ ...styles.halfContainer }}>
        <RowContainer style={styles.titleBox}>
          <Regular18SpoqaHanSansNeo
            text="인기 검색어"
            style={styles.gray900Color}
          />
        </RowContainer>

        <SearchWrap
          gap={6}
          buttonStyle={styles.solidBox}
          fontStyle={styles.gray900Color}
          containerStyle={styles.solidWrapBox}
        />
      </ScrollView>
    </FlexContainer>
  );
}

const styleSheets = (theme: ThemeType) =>
  StyleSheet.create({
    gray900Color: {
      color: theme.colors.GRAY900,
    },
    gray600Color: {
      color: theme.colors.GRAY600,
    },
    searchContainer: {
      height: 65,
      backgroundColor: 'red',
    },
    container: { paddingHorizontal: 16 },
    halfContainer: {
      flex: 0.5,
      // backgroundColor: 'blue',
    },
    titleBox: {
      marginTop: 12,
      marginBottom: 24,
      justifyContent: 'space-between',
    },
    dotBox: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      borderRadius: 8,
      paddingHorizontal: 8,
      paddingVertical: 6,
      marginBottom: 10,
      marginHorizontal: gap / 2,
      backgroundColor: 'rgba(192, 224, 139, 0.1)',
    },
    wrapBox: {
      flex: 1,
      flexWrap: 'wrap',
      paddingHorizontal: gap / -2,
    },
    solidWrapBox: {
      flex: 1,
      flexWrap: 'wrap',
      justifyContent: 'flex-start',
    },

    close: {
      width: 12,
      height: 12,
      resizeMode: 'contain',
    },
    //
    solidBox: {
      flexDirection: 'row',
      alignItems: 'center',
      borderWidth: 1,
      borderColor: theme.colors.GRAY200,
      borderRadius: 20,
      paddingHorizontal: 16,
      paddingVertical: 4,
      marginBottom: 10,
      backgroundColor: theme.colors.WHITE,
    },
  });

export default SearchScreen;

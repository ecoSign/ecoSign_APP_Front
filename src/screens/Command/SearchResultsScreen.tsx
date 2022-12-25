import React, { useCallback, useState } from 'react';
import { FlatList, Image, StyleSheet, View } from 'react-native';

import {
  Light12SpoqaHanSansNeo,
  Light14SpoqaHanSansNeo,
  Regular14SpoqaHanSansNeo,
} from '@components/common/Label/SpoqaHanSansNeoLabel';
import CommunityListItem from '@components/common/ListItem/CommunityListItem';
import GatherListItem from '@components/common/ListItem/GatherListItem';
import SearchBar from '@components/common/SearchBar';
import Touchable from '@components/common/buttons/Touchable';
import RowContainer from '@components/common/containers/RowContainer';
import SpaceBetweenContainer from '@components/common/containers/SpaceBetweenContainer';
import NoneResult from '@components/elements/SearchResultsScreen/NoneResult';
import { ThemeType } from '@theme/ThemeType';
import useThemedStyles from '@theme/useThemedStyles';

interface SearchResultsScreenType {
  navigation: any;
  route: any;
}
function SearchResultsScreen({ navigation, route }: SearchResultsScreenType) {
  const styles = useThemedStyles(styleSheets);
  const { keyword } = route.params;
  const result = [1];
  const [searchType, setSearchType] = useState<'커뮤니티' | '모임'>('모임');
  const isCommunity = searchType === '커뮤니티';

  const onPressTypeChange = useCallback(() => {
    if (searchType === '커뮤니티') {
      setSearchType('모임');
    } else {
      setSearchType('커뮤니티');
    }
  }, [searchType]);

  return (
    <View style={styles.container}>
      <SearchBar />
      {result.length <= 0 ? (
        <NoneResult keyword={keyword} />
      ) : (
        <View style={{ flexGrow: 1 }}>
          <RowContainer style={styles.keywordBox}>
            <Light14SpoqaHanSansNeo
              text={`‘${keyword}’ `}
              style={styles.green400Color}
            />
            <Light14SpoqaHanSansNeo
              text="에 대한 검색결과 입니다."
              style={styles.gray500Color}
            />
          </RowContainer>
          <SpaceBetweenContainer style={styles.dropContainer}>
            <Light12SpoqaHanSansNeo
              text="총 23건"
              style={styles.gray600Color}
            />
            <Touchable style={styles.selectBox} onPress={onPressTypeChange}>
              <Regular14SpoqaHanSansNeo
                text={searchType}
                style={{ ...styles.gray900Color }}
              />
              <Image
                source={require('assets/icons/command/arrow.png')}
                resizeMode="contain"
                style={{
                  width: 16,
                  height: 16,
                  // transform: [{ rotate: !isOpen ? '0deg' : '180deg' }],
                }}
              />
            </Touchable>
          </SpaceBetweenContainer>
          <FlatList
            data={[1, 2, 3]}
            renderItem={
              ({ item }) =>
                isCommunity ? <CommunityListItem /> : <GatherListItem />
              // <CommunityPost community={item} onPress={onClickCommunity} />
            }
            keyExtractor={(item, index) => `key${index}`}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      )}
    </View>
  );
}

const styleSheets = (theme: ThemeType) =>
  StyleSheet.create({
    container: {
      paddingTop: 12,
      backgroundColor: theme.colors.WHITE,
      flex: 1,
      paddingHorizontal: 16,
    },
    keywordBox: {
      backgroundColor: theme.colors.GRAY50,
      paddingVertical: 11,
      marginHorizontal: -16,
      marginTop: 13,
      justifyContent: 'center',
    },
    green400Color: {
      color: theme.colors.GREEN400,
    },
    gray500Color: {
      color: theme.colors.GRAY500,
    },
    gray600Color: {
      color: theme.colors.GRAY600,
    },
    gray900Color: {
      color: theme.colors.GRAY900,
    },
    dropContainer: {
      height: 60,
      alignItems: 'flex-end',
      marginHorizontal: -16,
      borderBottomWidth: 1,
      borderBottomColor: theme.colors.GRAY200,
      paddingHorizontal: 16,
      paddingVertical: 10,
    },
    selectBox: {
      height: 40,
      width: 108,
      justifyContent: 'space-between',
      backgroundColor: theme.colors.GRAY100,
      borderRadius: 8,
      paddingHorizontal: 8,
      flexDirection: 'row',
      alignItems: 'center',
    },
  });

export default SearchResultsScreen;

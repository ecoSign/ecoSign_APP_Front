import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

import {
  Light15SpoqaHanSansNeo,
  Light18SpoqaHanSansNeo,
} from '@components/common/Label/SpoqaHanSansNeoLabel';
import SearchBar from '@components/common/SearchBar';
import RowContainer from '@components/common/containers/RowContainer';
import ScrollContainer from '@components/common/containers/ScrollContainer';
import NoneResult from '@components/elements/SearchResultsScreen/NoneResult';
import { SCREEN_WIDTH } from '@constants/auth';
import { ThemeType } from '@theme/ThemeType';
import useThemedStyles from '@theme/useThemedStyles';

interface SearchResultsScreenType {
  navigation: any;
  route: any;
}
function SearchResultsScreen({ navigation, route }: SearchResultsScreenType) {
  const styles = useThemedStyles(styleSheets);
  const { keyword } = route.params;
  const result = [];

  return (
    <ScrollContainer style={styles.container}>
      <SearchBar />
      <NoneResult keyword={keyword} />
    </ScrollContainer>
  );
}

const styleSheets = (theme: ThemeType) =>
  StyleSheet.create({
    container: {
      paddingTop: 12,
    },
  });

export default SearchResultsScreen;

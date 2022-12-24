import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

import SearchBar from '@components/common/SearchBar';
import ScrollContainer from '@components/common/containers/ScrollContainer';
import { ThemeType } from '@theme/ThemeType';
import useThemedStyles from '@theme/useThemedStyles';

interface SearchResultsScreenType {
  navigation: any;
  route: any;
}
function SearchResultsScreen({ navigation, route }: SearchResultsScreenType) {
  const styles = useThemedStyles(styleSheets);

  const { keyword } = route.params;
  return (
    <ScrollContainer style={styles.container}>
      <SearchBar />
    </ScrollContainer>
  );
}

const styleSheets = (theme: ThemeType) =>
  StyleSheet.create({
    container: {
      paddingTop: 12,
    },
    gray900Color: {
      color: theme.colors.GRAY900,
    },
    gray600Color: {
      color: theme.colors.GRAY600,
    },
    close: {
      width: 12,
      height: 12,
      resizeMode: 'contain',
    },
  });

export default SearchResultsScreen;

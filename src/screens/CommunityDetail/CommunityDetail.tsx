import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

import CommunityDetailListItem from '@components/common/ListItem/CommunityDetailListItem';
import { FlexContainer } from '@components/common/containers/FlexContainer';
import CommunityPost from '@components/elements/MainScreen/CommunityPost';
import { ThemeType } from '@theme/ThemeType';
import useThemedStyles from '@theme/useThemedStyles';

interface CommunityDetailType {
  type: string;
}
function CommunityDetail({ type }: CommunityDetailType) {
  const styles = useThemedStyles(styleSheet);

  return (
    <FlexContainer style={styles.container}>
      <FlatList
        data={[1, 2, 3]}
        renderItem={({ item }) => <CommunityDetailListItem />}
        keyExtractor={(item, index) => `key${index}`}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      />
    </FlexContainer>
  );
}
const styleSheet = (theme: ThemeType) =>
  StyleSheet.create({
    container: {
      backgroundColor: '#E5E5E5',
      paddingHorizontal: 16,
      paddingVertical: 21,
    },
    gray400Color: {
      color: theme.colors.GRAY400,
    },
    green400Color: {
      color: theme.colors.GREEN400,
    },
  });

export default CommunityDetail;

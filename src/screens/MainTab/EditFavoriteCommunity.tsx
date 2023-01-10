import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { Regular12SpoqaHanSansNeo } from '@components/common/Label/SpoqaHanSansNeoLabel';
import FavoriteCommunity from '@components/common/ListItem/FavoriteCommunity';
import RowContainer from '@components/common/containers/RowContainer';
import ScrollContainer from '@components/common/containers/ScrollContainer';
import HotGatherPost from '@components/elements/MainScreen/HotGatherPost';
import { GATHER_CATEGORIES } from '@constants/gatherList';
import { ThemeType } from '@theme/ThemeType';
import useThemedStyles from '@theme/useThemedStyles';

function EditFavoriteCommunity() {
  const styles = useThemedStyles(styleSheets);

  return (
    <ScrollContainer style={styles.container}>
      <RowContainer style={styles.info}>
        <Ionicons
          name="alert-circle-outline"
          style={{ ...styles.gray500Color, marginRight: 8 }}
          size={12}
        />
        <Regular12SpoqaHanSansNeo
          text="최대 4개까지 설정 가능해요"
          style={styles.gray500Color}
        />
      </RowContainer>
      <FlatList
        data={GATHER_CATEGORIES}
        renderItem={({ item }) => <FavoriteCommunity item={item} />}
        keyExtractor={(item, index) => `key${index}`}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        style={{ paddingBottom: 41 }}
      />
    </ScrollContainer>
  );
}
const styleSheets = (theme: ThemeType) =>
  StyleSheet.create({
    container: {
      paddingHorizontal: 16,
      backgroundColor: '#E5E5E5',
    },
    info: { height: 60 },
    gray800Color: {
      color: theme.colors.GRAY800,
    },
    gray500Color: {
      color: theme.colors.GRAY500,
    },

    whiteColor: {
      color: theme.colors.WHITE,
    },
  });

export default EditFavoriteCommunity;

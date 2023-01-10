import React, { useLayoutEffect } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {
  Regular12SpoqaHanSansNeo,
  Regular14SpoqaHanSansNeo,
} from '@components/common/Label/SpoqaHanSansNeoLabel';
import FavoriteCommunity from '@components/common/ListItem/FavoriteCommunity';
import Touchable from '@components/common/buttons/Touchable';
import RowContainer from '@components/common/containers/RowContainer';
import { GATHER_CATEGORIES } from '@constants/gatherList';
import { ThemeType } from '@theme/ThemeType';
import useThemedStyles from '@theme/useThemedStyles';

interface EditFavoriteCommunityType {
  navigation: any;
}

function EditFavoriteCommunity({ navigation }: EditFavoriteCommunityType) {
  const styles = useThemedStyles(styleSheets);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Touchable>
          <Regular14SpoqaHanSansNeo text="완료" style={styles.gray900Color} />
        </Touchable>
      ),
    });
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={GATHER_CATEGORIES}
        contentContainerStyle={{ paddingBottom: 41 }}
        renderItem={({ item, index }) => <FavoriteCommunity item={item} />}
        keyExtractor={(item, index) => `key${index}`}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        ListHeaderComponent={() => (
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
        )}
      />
    </View>
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

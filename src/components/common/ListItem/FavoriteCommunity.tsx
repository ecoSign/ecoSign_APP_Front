import React from 'react';
import { Image, StyleSheet, View, ViewStyle } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

import {
  Regular12SpoqaHanSansNeo,
  Regular16SpoqaHanSansNeo,
} from '@components/common/Label/SpoqaHanSansNeoLabel';
import Touchable from '@components/common/buttons/Touchable';
import RowContainer from '@components/common/containers/RowContainer';
import { ThemeType } from '@theme/ThemeType';
import useThemedStyles from '@theme/useThemedStyles';

interface FavoriteCommunityType {
  item: any;
  style?: ViewStyle;
}

function FavoriteCommunity({ item, style }: FavoriteCommunityType) {
  const styles = useThemedStyles(styleSheets);

  return (
    <RowContainer style={{ ...styles.container, ...style }}>
      <Feather name="menu" size={18} style={styles.menu} />
      <View style={{ flex: 1 }}>
        <Regular16SpoqaHanSansNeo
          text={item?.title}
          style={{ ...styles.gray900Color, marginBottom: 10 }}
        />
        <RowContainer>
          {[1, 2, 3, 4, 5].map((data, idx) => (
            <View key={idx} style={styles.categoryBox}>
              <Regular12SpoqaHanSansNeo
                text="봉사"
                style={styles.gray500Color}
              />
            </View>
          ))}
        </RowContainer>
      </View>
      <Touchable>
        <Image
          source={require('assets/icons/common/star.png')}
          style={styles.star}
        />
      </Touchable>
    </RowContainer>
  );
}
const styleSheets = (theme: ThemeType) =>
  StyleSheet.create({
    menu: {
      marginRight: 18,
      marginTop: 3,
      color: theme.colors.GRAY900,
    },
    star: { width: 24, height: 24 },
    container: {
      alignItems: 'flex-start',
      backgroundColor: theme.colors.WHITE,
      height: 75,
      borderRadius: 5,
      marginBottom: 14,
      paddingVertical: 11,
      paddingHorizontal: 12,
    },
    gray900Color: {
      color: theme.colors.GRAY900,
    },
    categoryBox: {
      backgroundColor: theme.colors.GRAY200,
      paddingVertical: 1,
      paddingHorizontal: 5,
      borderRadius: 5,
      marginRight: 3,
    },

    gray500Color: {
      color: theme.colors.GRAY500,
    },
  });

export default FavoriteCommunity;

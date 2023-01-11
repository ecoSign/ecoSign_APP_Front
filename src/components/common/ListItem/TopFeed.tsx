import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

import {
  Light12SpoqaHanSansNeo,
  Regular12SpoqaHanSansNeo,
  Regular14SpoqaHanSansNeo,
} from '@components/common/Label/SpoqaHanSansNeoLabel';
import RowContainer from '@components/common/containers/RowContainer';
import { SCREEN_WIDTH } from '@constants/auth';
import { ThemeType } from '@theme/ThemeType';
import useThemedStyles from '@theme/useThemedStyles';

function TopFeed() {
  const styles = useThemedStyles(styleSheet);

  return (
    <View style={styles.container}>
      <View>
        <Light12SpoqaHanSansNeo
          text="일상"
          style={{ ...styles.deepOrange400, marginBottom: 9 }}
        />
        <Regular14SpoqaHanSansNeo
          text="내일 부산으로 놀러가는데 부산 맛집 추천 좀 해주세요내일 부산으로 놀러가는데 부산 맛집 추천 좀 해주세요"
          numberOfLines={2}
          style={styles.gray900Color}
        />
      </View>
      <RowContainer>
        <Image
          source={{ uri: 'https://reactjs.org/logo-og.png' }}
          style={styles.image}
        />

        <Regular12SpoqaHanSansNeo
          text="후리한 백수생활"
          style={styles.gray500Color}
        />
      </RowContainer>
    </View>
  );
}

const styleSheet = (theme: ThemeType) =>
  StyleSheet.create({
    image: {
      width: 18,
      height: 18,
      marginRight: 4,
      borderRadius: 9,
    },
    container: {
      width: SCREEN_WIDTH * 0.61,
      borderRadius: 10,
      backgroundColor: theme.colors.GRAY50,
      marginRight: 14,
      height: 150,
      paddingVertical: 15,
      paddingHorizontal: 13,
      justifyContent: 'space-between',
    },
    deepOrange400: { color: theme.colors.DEEPORANGE400 },
    gray900Color: { color: theme.colors.GRAY900 },
    gray500Color: { color: theme.colors.GRAY500 },
  });
export default TopFeed;

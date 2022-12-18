import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

import {
  Light14SpoqaHanSansNeo,
  Light17SpoqaHanSansNeo,
  Regular14SpoqaHanSansNeo,
  Thin12SpoqaHanSansNeo,
} from '@components/common/Label/SpoqaHanSansNeoLabel';
import Touchable from '@components/common/buttons/Touchable';
import RowContainer from '@components/common/containers/RowContainer';
import { ThemeType } from '@theme/ThemeType';
import useThemedStyles from '@theme/useThemedStyles';

interface NatureGatherType {
  gather: any;
  onPress?: (e: any) => void;
}

function NatureGather({ gather, onPress }: NatureGatherType) {
  const styles = useThemedStyles(styleSheet);

  return (
    <Touchable style={styles.container}>
      <View style={styles.category}>
        <Thin12SpoqaHanSansNeo text="환경" style={styles.whiteColor} />
      </View>
      <Image
        source={{
          uri: 'https://images.mypetlife.co.kr/content/uploads/2018/12/09154907/cotton-tulear-2422612_1280.jpg',
        }}
        resizeMode="cover"
        style={styles.gatherImage}
      />
      <Regular14SpoqaHanSansNeo
        text="부산 광안동"
        style={styles.gray500Color}
      />
      <Light14SpoqaHanSansNeo
        text="3기/광안리 플로깅 하실분!"
        style={{ ...styles.gray800Color, marginTop: 3 }}
        numberOfLines={1}
      />
    </Touchable>
  );
}

const styleSheet = (theme: ThemeType) =>
  StyleSheet.create({
    category: {
      top: 5,
      left: 5,
      backgroundColor: theme.colors.GRAY900,
      paddingVertical: 2,
      paddingHorizontal: 6,
      position: 'absolute',
      zIndex: 2,
    },
    gray800Color: {
      color: theme.colors.GRAY800,
    },
    gray500Color: {
      color: theme.colors.GRAY500,
    },

    whiteColor: {
      color: theme.colors.WHITE,
    },
    gatherImage: {
      height: 125,
      marginBottom: 8,
      borderRadius: 5,
    },
    container: {
      backgroundColor: theme.colors.GRAY50,
      marginRight: 10,
      width: 190,
      position: 'relative',
    },
  });
export default NatureGather;

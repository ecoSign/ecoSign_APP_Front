import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';

import {
  Bold10SpoqaHanSansNeo,
  Bold14SpoqaHanSansNeo,
  Regular10SpoqaHanSansNeo,
  Regular12SpoqaHanSansNeo,
} from '@components/common/Label/SpoqaHanSansNeoLabel';
import { ThemeType } from '@theme/ThemeType';
import useThemedStyles from '@theme/useThemedStyles';

function RecruitmentGatherItem() {
  const styles = useThemedStyles(styleSheets);

  return (
    <View style={styles.container}>
      <ImageBackground
        imageStyle={{ borderRadius: 8 }}
        source={{
          uri: 'https://images.mypetlife.co.kr/content/uploads/2018/12/09154907/cotton-tulear-2422612_1280.jpg',
        }}
        resizeMode="cover"
        style={styles.image}
      >
        <View style={styles.newBtn}>
          <Bold10SpoqaHanSansNeo text="NEW" style={styles.whiteColor} />
        </View>
        <Regular10SpoqaHanSansNeo
          text="부산 전포1동"
          style={{ ...styles.whiteColor }}
        />
        <Bold14SpoqaHanSansNeo
          text="친환경 트레이 만들기"
          style={{ ...styles.whiteColor, marginTop: 2 }}
          numberOfLines={1}
        />
      </ImageBackground>
    </View>
  );
}

const styleSheets = (theme: ThemeType) =>
  StyleSheet.create({
    container: {
      width: 178,
      height: 230,
      borderRadius: 8,
      marginRight: 8,
    },
    image: {
      flex: 1,
      borderRadius: 8,
      justifyContent: 'flex-end',
      paddingHorizontal: 14,
      paddingBottom: 13,
    },
    gray400Color: {
      color: theme.colors.GRAY400,
    },
    gray500Color: { color: theme.colors.GRAY500 },
    gray600Color: { color: theme.colors.GRAY600 },
    gray700Color: { color: theme.colors.GRAY700 },
    gray800Color: {
      color: theme.colors.GRAY800,
    },
    blackColor: {
      color: theme.colors.BLACK,
    },
    whiteColor: {
      color: theme.colors.WHITE,
    },
    newBtn: {
      width: 35,
      height: 17,
      backgroundColor: theme.colors.RED500,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 3,
      position: 'absolute',
      top: 7,
      left: 8,
    },
  });

export default RecruitmentGatherItem;

import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {
  Regular12SpoqaHanSansNeo,
  Regular14SpoqaHanSansNeo,
  Thin12SpoqaHanSansNeo,
} from '@components/common/Label/SpoqaHanSansNeoLabel';
import Triangle from '@components/common/Triangle/Triangle';
import RowContainer from '@components/common/containers/RowContainer';
import { ThemeType } from '@theme/ThemeType';
import useThemedStyles from '@theme/useThemedStyles';

function ImminentDeadline() {
  const styles = useThemedStyles(styleSheets);

  return (
    <View style={styles.container}>
      <RowContainer>
        <Image
          source={{
            uri: 'https://images.mypetlife.co.kr/content/uploads/2018/12/09154907/cotton-tulear-2422612_1280.jpg',
          }}
          style={styles.image}
        />
        <View style={styles.rightContainer}>
          <Regular12SpoqaHanSansNeo
            text="인천 전체"
            style={styles.gray500Color}
          />
          <Regular14SpoqaHanSansNeo
            text="무료 네일아트 해드려요! 무료 네일아트 해드려요! .."
            style={{ ...styles.blackColor, marginRight: 14 }}
            numberOfLines={1}
          />
          <RowContainer>
            <MaterialCommunityIcons
              name="calendar-check-outline"
              size={14}
              style={{
                ...styles.gray400Color,
                marginRight: 2,
              }}
            />
            <Thin12SpoqaHanSansNeo
              text="10/28 12:00"
              style={styles.gray700Color}
            />
            <RowContainer style={styles.triangleContainer}>
              <Triangle style={styles.triangle} />
              <Regular12SpoqaHanSansNeo
                text="잔여 1명!"
                style={styles.triangleFont}
              />
            </RowContainer>
          </RowContainer>
        </View>
      </RowContainer>
    </View>
  );
}

const styleSheets = (theme: ThemeType) =>
  StyleSheet.create({
    triangleContainer: {
      backgroundColor: '#FF7043',
      height: 25,
      flex: 1,
      marginLeft: 8,
      justifyContent: 'center',
    },
    triangleFont: { color: theme.colors.WHITE },
    triangle: {
      transform: [{ rotate: '90deg' }],
      position: 'absolute',
      left: 0,
      marginLeft: -9,
    },
    container: {
      width: 254,
      height: 101,
      borderRadius: 8,
      marginRight: 8,
      borderWidth: 1,
      borderColor: theme.colors.DEEPORANGE100,
      backgroundColor: theme.colors.WHITE,
      paddingTop: 16,
      paddingLeft: 12,
      paddingBottom: 21,
    },
    rightContainer: {
      flexDirection: 'column',
      justifyContent: 'space-between',
      flex: 1,
      height: '100%',
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
    image: {
      width: 64,
      height: 64,
      borderRadius: 5,
      marginRight: 12,
    },
  });
export default ImminentDeadline;

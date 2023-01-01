import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {
  Regular12SpoqaHanSansNeo,
  Regular14SpoqaHanSansNeo,
  Thin12SpoqaHanSansNeo,
} from '@components/common/Label/SpoqaHanSansNeoLabel';
import RowContainer from '@components/common/containers/RowContainer';
import { ThemeType } from '@theme/ThemeType';
import useThemedStyles from '@theme/useThemedStyles';

function GatherListItem() {
  const styles = useThemedStyles(styleSheets);

  return (
    <View style={styles.container}>
      <RowContainer>
        <Image
          source={{
            uri: 'https://images.mypetlife.co.kr/content/uploads/2018/12/09154907/cotton-tulear-2422612_1280.jpg',
          }}
          resizeMode="cover"
          style={styles.image}
        />
        <View style={{ flex: 1, paddingLeft: 13, justifyContent: 'center' }}>
          <Regular12SpoqaHanSansNeo
            text="부산 해운대구"
            style={styles.gray500Color}
          />

          <Regular14SpoqaHanSansNeo
            text="그린아띠/플로깅3차/환경친목 모임🌿그린아띠/플로깅3차/환경친목 모임🌿"
            style={{ ...styles.blackColor, marginTop: 3, marginBottom: 11 }}
            numberOfLines={1}
          />
          <RowContainer>
            <Image
              source={require('assets/icons/common/people.png')}
              style={{ width: 14, height: 14, marginRight: 3 }}
              resizeMode="contain"
            />
            <Thin12SpoqaHanSansNeo
              text="1/2"
              style={{
                ...styles.gray700Color,
              }}
            />
            <MaterialCommunityIcons
              name="calendar-check-outline"
              size={14}
              style={{
                ...styles.gray400Color,
                marginRight: 5,
                marginLeft: 12,
                width: 14,
                height: 14,
              }}
            />
            <Thin12SpoqaHanSansNeo
              text="11/03 19:00"
              style={styles.gray700Color}
            />
          </RowContainer>
        </View>
      </RowContainer>
    </View>
  );
}

const styleSheets = (theme: ThemeType) =>
  StyleSheet.create({
    container: {
      paddingBottom: 14,
      paddingTop: 19,
      borderBottomWidth: 1,
      borderBottomColor: theme.colors.GRAY200,
    },
    image: {
      borderRadius: 5,
      width: 80,
      height: 80,
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
  });

export default GatherListItem;

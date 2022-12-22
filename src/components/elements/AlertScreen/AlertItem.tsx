import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import {
  Regular12SpoqaHanSansNeo,
  Regular14SpoqaHanSansNeo,
} from '@components/common/Label/SpoqaHanSansNeoLabel';
import { ThemeType } from '@theme/ThemeType';
import useThemedStyles from '@theme/useThemedStyles';

interface AlertItemType {
  item?: any;
  isAlreadyRead?: boolean;
}
function AlertItem({ isAlreadyRead }: AlertItemType) {
  const styles = useThemedStyles(styleSheets);

  return (
    <View
      style={
        isAlreadyRead ? styles.noneReadRootContainer : styles.rootContainer
      }
    >
      <View style={styles.container}>
        <Regular14SpoqaHanSansNeo
          text="[공지] 업데이트 일정을 안내드립니다."
          style={{ ...styles.gray900Color, marginBottom: 10 }}
          numberOfLines={1}
        />
        <Regular12SpoqaHanSansNeo
          text="[공지] 업데이트 일정을 안내드립니다."
          style={{ ...styles.gray400Color }}
          numberOfLines={2}
        />
      </View>
    </View>
  );
}
const styleSheets = (theme: ThemeType) =>
  StyleSheet.create({
    rootContainer: {
      marginHorizontal: -16,
      paddingHorizontal: 16,
      backgroundColor: theme.colors.WHITE,
    },
    noneReadRootContainer: {
      marginHorizontal: -16,
      paddingHorizontal: 16,
      backgroundColor: 'rgba(192, 224, 139, 0.1)',
    },
    container: {
      paddingTop: 13,
      paddingBottom: 16,
      borderBottomWidth: 1,
      borderBottomColor: theme.colors.BLUEGRAY50,
    },
    gray900Color: {
      color: theme.colors.GRAY900,
    },
    gray400Color: {
      color: theme.colors.GRAY400,
    },
  });
export default AlertItem;

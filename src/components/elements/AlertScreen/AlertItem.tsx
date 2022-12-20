import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import {
  Regular12SpoqaHanSansNeo,
  Regular14SpoqaHanSansNeo,
} from '@components/common/Label/SpoqaHanSansNeoLabel';
import { ThemeType } from '@theme/ThemeType';
import useThemedStyles from '@theme/useThemedStyles';

function AlertItem() {
  const styles = useThemedStyles(styleSheets);

  return (
    <View style={styles.container}>
      <Regular14SpoqaHanSansNeo
        text="[공지] 업데이트 일정을 안내드립니다."
        style={{ ...styles.gray900Color, marginBottom: 10 }}
      />
      <Regular12SpoqaHanSansNeo
        text="[공지] 업데이트 일정을 안내드립니다."
        style={{ ...styles.gray400Color }}
      />
    </View>
  );
}
const styleSheets = (theme: ThemeType) =>
  StyleSheet.create({
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

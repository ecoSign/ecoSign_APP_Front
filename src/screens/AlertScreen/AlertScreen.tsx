import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

import { Regular14SpoqaHanSansNeo } from '@components/common/Label/SpoqaHanSansNeoLabel';
import { FlexContainer } from '@components/common/containers/FlexContainer';
import AlertItem from '@components/elements/AlertScreen/AlertItem';
import { SCREEN_HEIGHT } from '@constants/auth';
import { ThemeType } from '@theme/ThemeType';
import useThemedStyles from '@theme/useThemedStyles';

interface AlertScreenType {
  alert: any;
}
function AlertScreen({ alert }: AlertScreenType) {
  const styles = useThemedStyles(styleSheets);
  const emptyAlert = alert.length <= 0;

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={
        emptyAlert && {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }
      }
    >
      {!emptyAlert ? (
        alert?.map((data: any, index: number) => (
          <AlertItem key={index} isAlreadyRead={index === 2} />
        ))
      ) : (
        <View style={styles.emptyBox}>
          <Image
            source={require('assets/icons/common/grayBell.png')}
            style={styles.icon}
          />
          <Regular14SpoqaHanSansNeo
            text="알림 내역이 존재하지 않습니다."
            style={styles.gray400Color}
          />
        </View>
      )}
    </ScrollView>
  );
}
const styleSheets = (theme: ThemeType) =>
  StyleSheet.create({
    container: {
      paddingHorizontal: 16,
      backgroundColor: theme.colors.WHITE,
    },
    noneContainer: {
      paddingHorizontal: 16,
      backgroundColor: theme.colors.WHITE,
      alignItems: 'center',
      justifyContent: 'center',
    },
    gray400Color: {
      color: theme.colors.GRAY400,
    },
    icon: {
      width: 60,
      height: 60,
      marginBottom: 9,
    },
    emptyBox: {
      alignItems: 'center',
      marginTop: -SCREEN_HEIGHT * 0.15,
    },
  });

export default AlertScreen;

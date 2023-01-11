import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Octicons from 'react-native-vector-icons/Octicons';

import {
  Light15SpoqaHanSansNeo,
  Regular12SpoqaHanSansNeo,
  Regular13SpoqaHanSansNeo,
} from '@components/common/Label/SpoqaHanSansNeoLabel';
import RowContainer from '@components/common/containers/RowContainer';
import { SCREEN_WIDTH } from '@constants/auth';
import { ThemeType } from '@theme/ThemeType';
import useThemedStyles from '@theme/useThemedStyles';

function FeedItem() {
  const styles = useThemedStyles(styleSheet);

  return (
    <View style={styles.container}>
      <RowContainer style={{ marginBottom: 17 }}>
        <Regular12SpoqaHanSansNeo
          text="문화/공연"
          style={styles.gray900Color}
        />
        <Regular12SpoqaHanSansNeo
          text={'\u2022'}
          style={{ ...styles.gray500Color, marginHorizontal: 5 }}
        />
        <Regular12SpoqaHanSansNeo text="너굴이짱" style={styles.gray400Color} />
        <Regular12SpoqaHanSansNeo
          text="방금"
          style={{
            ...styles.gray400Color,
            flex: 1,
            textAlign: 'right',
          }}
        />
      </RowContainer>
      <Light15SpoqaHanSansNeo
        text="오늘 뮤지컬 캣츠 내한공연 보고왔어요!"
        style={{ ...styles.gray800Color, marginBottom: 8 }}
        numberOfLines={1}
      />
      <Regular13SpoqaHanSansNeo
        text="캣츠 보신 분들 있으신가요?저는 오늘 친구랑 같이 캣츠 내한 공연 보고 왔는데 너무너무분들 있으신가요?저는 오늘 친구랑 같이 캣츠 내한 공연 보고 왔는데 너무너무너무너무너무너무너무너무"
        style={{ ...styles.gray600Color }}
        numberOfLines={2}
      />
      <RowContainer style={styles.infoBox}>
        <Image
          source={require('assets/icons/common/grayChat.png')}
          style={styles.icon}
        />
        <Regular12SpoqaHanSansNeo
          text="16"
          style={{ ...styles.gray500Color, marginLeft: 5, marginRight: 7 }}
        />
        <Image
          source={require('assets/icons/common/viewFill.png')}
          style={styles.icon}
        />
        <Regular12SpoqaHanSansNeo
          text="16"
          style={{ ...styles.gray500Color, marginLeft: 5 }}
        />
      </RowContainer>
    </View>
  );
}

const styleSheet = (theme: ThemeType) =>
  StyleSheet.create({
    icon: { width: 18, height: 18 },
    infoBox: {
      flex: 1,
      alignItems: 'flex-end',
      justifyContent: 'flex-end',
    },
    image: {
      width: 18,
      height: 18,
      marginRight: 4,
      borderRadius: 9,
    },
    container: {
      borderBottomWidth: 1,
      borderBottomColor: theme.colors.BLUEGRAY50,
      height: 165,
      paddingTop: 13,
      paddingBottom: 10,
    },
    deepOrange400: { color: theme.colors.DEEPORANGE400 },
    gray900Color: { color: theme.colors.GRAY900 },
    gray800Color: { color: theme.colors.GRAY800 },
    gray600Color: { color: theme.colors.GRAY600 },
    gray500Color: { color: theme.colors.GRAY500 },
    gray400Color: { color: theme.colors.GRAY400 },
    gray300Color: { color: theme.colors.GRAY300 },
  });
export default FeedItem;

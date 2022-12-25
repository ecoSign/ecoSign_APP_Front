import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Octicons from 'react-native-vector-icons/Octicons';

import HighlightText from '@components/common/HighlightText';
import {
  Light12SpoqaHanSansNeo,
  Light14SpoqaHanSansNeo,
  Regular12SpoqaHanSansNeo,
} from '@components/common/Label/SpoqaHanSansNeoLabel';
import RowContainer from '@components/common/containers/RowContainer';
import SpaceBetweenContainer from '@components/common/containers/SpaceBetweenContainer';
import Font from '@styles/Font';
import { ThemeType } from '@theme/ThemeType';
import useThemedStyles from '@theme/useThemedStyles';

function CommunityListItem({ keyword }: { keyword: string }) {
  const styles = useThemedStyles(styleSheets);

  return (
    <View style={styles.container}>
      <SpaceBetweenContainer style={{ marginBottom: 16 }}>
        <RowContainer>
          <Regular12SpoqaHanSansNeo
            text="연애/사랑"
            style={styles.gray800Color}
          />
          <Regular12SpoqaHanSansNeo
            text={'\u2022'}
            style={{ ...styles.gray500Color, marginHorizontal: 5 }}
          />
          <Light12SpoqaHanSansNeo text="seahappy" style={styles.gray400Color} />
        </RowContainer>
        <Regular12SpoqaHanSansNeo text="3일 전" style={styles.gray400Color} />
      </SpaceBetweenContainer>
      {/* <Light16SpoqaHanSansNeo */}
      {/*  text="오늘 남자친구랑 플로깅 하고 왔어요." */}
      {/*  style={styles.gray800Color} */}
      {/* /> */}
      <HighlightText
        text="오늘 남자친구랑 플로깅 하고 왔어요."
        highlight={keyword}
        textStyle={styles.textStyle}
        highlightStyle={styles.highlightStyle}
        numberOfLines={1}
      />

      <RowContainer style={{ marginTop: 8, marginBottom: 16 }}>
        <HighlightText
          text="플로깅 모임 처음으로 나가서 같이 플로깅하고 왔는데 생각보다 너무 쓰레기가 많더라구요 플로깅 모임 처음으로 나가서 같이 플로깅하고 왔는데 생각보다 너무 쓰레기가 많더라구요"
          highlight={keyword}
          textStyle={styles.contentTextStyle}
          highlightStyle={styles.contentHighlightStyle}
          numberOfLines={2}
        />
      </RowContainer>
      <RowContainer style={{ justifyContent: 'flex-end' }}>
        <FontAwesome5
          name="comment-dots"
          style={styles.gray500Color}
          size={16}
        />
        <Regular12SpoqaHanSansNeo
          text="16"
          style={{ ...styles.gray500Color, marginLeft: 5, marginRight: 7 }}
        />
        <Octicons name="eye" style={styles.gray500Color} size={16} />
        <Regular12SpoqaHanSansNeo
          text="16"
          style={{ ...styles.gray500Color, marginLeft: 5 }}
        />
      </RowContainer>
    </View>
  );
}
const styleSheets = (theme: ThemeType) =>
  StyleSheet.create({
    container: {
      paddingBottom: 8,
      paddingTop: 13,
      borderBottomWidth: 1,
      borderBottomColor: theme.colors.BLUEGRAY50,
    },
    gray400Color: {
      color: theme.colors.GRAY400,
    },
    gray500Color: { color: theme.colors.GRAY500 },
    gray600Color: { color: theme.colors.GRAY600 },
    gray800Color: {
      color: theme.colors.GRAY800,
    },
    textStyle: {
      color: theme.colors.GRAY800,
      fontSize: 16,
      lineHeight: 24,
    },
    highlightStyle: {
      color: theme.colors.GREEN400,
      fontSize: 16,
      lineHeight: 24,
    },
    contentTextStyle: {
      color: theme.colors.GRAY600,
      fontSize: 14,
      lineHeight: 21,
    },
    contentHighlightStyle: {
      color: theme.colors.GREEN400,
      fontSize: 14,
      lineHeight: 21,
    },
  });

export default CommunityListItem;

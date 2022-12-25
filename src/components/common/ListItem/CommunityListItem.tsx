import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Octicons from 'react-native-vector-icons/Octicons';

import {
  Light12SpoqaHanSansNeo,
  Light14SpoqaHanSansNeo,
  Light16SpoqaHanSansNeo,
  Regular12SpoqaHanSansNeo,
} from '@components/common/Label/SpoqaHanSansNeoLabel';
import RowContainer from '@components/common/containers/RowContainer';
import SpaceBetweenContainer from '@components/common/containers/SpaceBetweenContainer';
import { ThemeType } from '@theme/ThemeType';
import useThemedStyles from '@theme/useThemedStyles';

function CommunityListItem() {
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
      <Light16SpoqaHanSansNeo
        text="오늘 남자친구랑 플로깅 하고 왔어요."
        style={styles.gray800Color}
      />
      <RowContainer style={{ marginTop: 8, marginBottom: 16 }}>
        <Light14SpoqaHanSansNeo
          text="오늘 남자친구랑 플로깅 하고 왔어요."
          style={styles.gray600Color}
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
  });

export default CommunityListItem;

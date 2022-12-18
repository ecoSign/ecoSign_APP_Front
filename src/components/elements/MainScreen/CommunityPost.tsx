import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Octicons from 'react-native-vector-icons/Octicons';

import {
  Medium13SpoqaHanSansNeo,
  Medium15SpoqaHanSansNeo,
  Regular12SpoqaHanSansNeo,
} from '@components/common/Label/SpoqaHanSansNeoLabel';
import Touchable from '@components/common/buttons/Touchable';
import RowContainer from '@components/common/containers/RowContainer';
import { ThemeType } from '@theme/ThemeType';
import useThemedStyles from '@theme/useThemedStyles';

interface CommunityPostType {
  community: any;
  onPress?: (e: any) => void;
}
function CommunityPost({ community, onPress }: CommunityPostType) {
  const style = useThemedStyles(styleSheet);

  return (
    <Touchable
      style={style.container}
      onPress={() => {
        if (onPress) {
          onPress(community);
        }
      }}
    >
      <Medium13SpoqaHanSansNeo text="일상" style={style.gray500Color} />
      <Medium15SpoqaHanSansNeo
        text="플로깅 하고 왔는데 너무 새로워요!플로깅 하고 왔는데 너무 새로워요!플로깅 하고 왔는데 너무 새로워요!"
        style={{ ...style.gray900Color, marginTop: 12, marginBottom: 16 }}
        numberOfLines={2}
        ellipsizeMode="tail"
      />
      <RowContainer style={{ justifyContent: 'flex-end' }}>
        <FontAwesome5
          name="comment-dots"
          style={style.gray500Color}
          size={16}
        />
        <Regular12SpoqaHanSansNeo
          text="16"
          style={{ ...style.gray500Color, marginLeft: 5, marginRight: 7 }}
        />
        <Octicons name="eye" style={style.gray500Color} size={16} />
        <Regular12SpoqaHanSansNeo
          text="16"
          style={{ ...style.gray500Color, marginLeft: 5 }}
        />
      </RowContainer>
    </Touchable>
  );
}
const styleSheet = (theme: ThemeType) =>
  StyleSheet.create({
    container: {
      borderWidth: 1,
      borderColor: theme.colors.GRAY100,
      borderRadius: 8,
      marginRight: 10,
      paddingLeft: 13,
      paddingRight: 21,
      paddingVertical: 11,
      maxWidth: 190,
    },
    gray500Color: {
      color: theme.colors.GRAY500,
    },
    gray900Color: {
      color: theme.colors.GRAY900,
    },
  });
export default CommunityPost;

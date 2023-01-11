import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {
  Regular12SpoqaHanSansNeo,
  Regular13SpoqaHanSansNeo,
  Regular14SpoqaHanSansNeo,
} from '@components/common/Label/SpoqaHanSansNeoLabel';
import Touchable from '@components/common/buttons/Touchable';
import RowContainer from '@components/common/containers/RowContainer';
import { ThemeType } from '@theme/ThemeType';
import useThemedStyles from '@theme/useThemedStyles';

function CommunityDetailListItem() {
  const styles = useThemedStyles(styleSheets);

  return (
    <View style={styles.container}>
      <RowContainer style={{ marginBottom: 15 }}>
        <Image
          source={{ uri: 'https://reactjs.org/logo-og.png' }}
          resizeMode="cover"
          style={styles.userImage}
        />
        <View
          style={{
            justifyContent: 'center',
            flex: 1,
          }}
        >
          <Regular14SpoqaHanSansNeo
            text="너굴이짱"
            style={styles.gray700Color}
          />
          <Regular12SpoqaHanSansNeo
            text="음식/주류"
            style={styles.gray500Color}
          />
        </View>
        <Touchable>
          <MaterialCommunityIcons
            name="dots-vertical"
            style={styles.gray600Color}
            size={16}
          />
        </Touchable>
      </RowContainer>
      <RowContainer style={{ alignItems: 'flex-start', marginBottom: 15 }}>
        <Regular13SpoqaHanSansNeo
          text="퇴사하신분들 있으신가요? 요즘 맨날 늦게 일어나고 "
          numberOfLines={3}
          style={{ flex: 1 }}
        />
        <Image
          source={{ uri: 'https://reactjs.org/logo-og.png' }}
          resizeMode="cover"
          style={styles.image}
        />
      </RowContainer>
      <RowContainer style={{ marginLeft: 2 }}>
        <AntDesign name="hearto" color="#9E9E9E" size={14} />
        <Regular12SpoqaHanSansNeo
          text={12}
          style={{ ...styles.gray600Color, marginLeft: 4 }}
        />
        {/*  #EC407A */}
        {/* heart */}
        <Image
          source={require('assets/icons/common/chatTeardropText.png')}
          style={{ ...styles.icon, marginLeft: 11 }}
        />

        <Regular12SpoqaHanSansNeo
          text={12}
          style={{ ...styles.gray600Color, marginLeft: 4 }}
        />
      </RowContainer>
    </View>
  );
}
const styleSheets = (theme: ThemeType) =>
  StyleSheet.create({
    icon: {
      width: 18,
      height: 18,
    },
    userImage: { width: 40, height: 40, borderRadius: 20, marginRight: 13 },
    image: {
      width: 70,
      height: 70,
      borderRadius: 5,
      marginLeft: 9,
    },

    container: {
      backgroundColor: theme.colors.WHITE,
      borderRadius: 5,
      marginBottom: 14,
      height: 185,
      paddingVertical: 14,
      paddingHorizontal: 11,
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
    gray900Color: {
      color: theme.colors.GRAY900,
    },
  });
export default CommunityDetailListItem;

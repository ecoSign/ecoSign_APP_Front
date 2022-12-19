import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

import { Regular14SpoqaHanSansNeo } from '@components/common/Label/SpoqaHanSansNeoLabel';
import Touchable from '@components/common/buttons/Touchable';
import RowContainer from '@components/common/containers/RowContainer';
import { ThemeType } from '@theme/ThemeType';
import useThemedStyles from '@theme/useThemedStyles';

function ProfileHeader() {
  const style = useThemedStyles(styles);

  return (
    <RowContainer style={style.container}>
      <Image
        source={{ uri: 'https://reactjs.org/logo-og.png' }}
        resizeMode="cover"
        style={style.profile}
      />
      <Regular14SpoqaHanSansNeo text="너구리" style={style.gray900Color} />
      <RowContainer style={{ justifyContent: 'flex-end', flex: 1 }}>
        <Touchable style={{ marginRight: 20 }}>
          <Image
            source={require('assets/icons/command/magnifyingGlass.png')}
            style={{ ...style.icon }}
          />
        </Touchable>
        <Touchable>
          <Image
            source={require('assets/icons/command/bell.png')}
            style={style.icon}
          />
        </Touchable>
      </RowContainer>
    </RowContainer>
  );
}
const styles = (theme: ThemeType) =>
  StyleSheet.create({
    container: {
      height: 50,
      paddingHorizontal: 18,
      backgroundColor: theme.colors.WHITE,
    },
    profile: {
      width: 36,
      height: 36,
      marginRight: 8,
      borderRadius: 18,
    },
    gray900Color: {
      color: theme.colors.GRAY900,
    },
    icon: {
      width: 24,
      height: 24,
    },
  });
export default ProfileHeader;

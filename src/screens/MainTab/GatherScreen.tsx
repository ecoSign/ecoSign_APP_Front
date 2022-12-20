import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

import ProfileHeader from '@components/common/HeaderComponent/ProfileHeader';
import {
  Regular12SpoqaHanSansNeo,
  Regular18SpoqaHanSansNeo,
} from '@components/common/Label/SpoqaHanSansNeoLabel';
import ProfileHeaderLayout from '@components/common/Layouts/ProfileHeaderLayout';
import Touchable from '@components/common/buttons/Touchable';
import RowContainer from '@components/common/containers/RowContainer';
import { SCREEN_WIDTH } from '@constants/auth';
import { ThemeType } from '@theme/ThemeType';
import useThemedStyles from '@theme/useThemedStyles';

function GatherScreen() {
  const styles = useThemedStyles(styleSheet);

  return (
    <ProfileHeaderLayout
      header={<ProfileHeader headerStyle={styles.headerStyle} />}
    >
      <View style={[styles.noPadding, styles.bannerBox]}>
        <Image
          source={require('assets/images/main/gather/banner.png')}
          style={styles.bannerImage}
          resizeMode="contain"
        />
      </View>
      <RowContainer style={{ justifyContent: 'space-between' }}>
        <Regular18SpoqaHanSansNeo
          text="즐겨찾는 모임 카테고리"
          style={styles.gray900Color}
        />
        <Touchable>
          <Regular12SpoqaHanSansNeo text="편집+" style={styles.gray500Color} />
        </Touchable>
      </RowContainer>
    </ProfileHeaderLayout>
  );
}
const gap = 8;

const styleSheet = (theme: ThemeType) =>
  StyleSheet.create({
    noPadding: { marginHorizontal: -16 },
    headerStyle: {
      backgroundColor: 'transparent',
      position: 'absolute',
      zIndex: 2,
      width: '100%',
    },
    bannerBox: {
      width: SCREEN_WIDTH,
      height: SCREEN_WIDTH * 0.853333333,
      marginBottom: 34,
    },
    bannerImage: {
      width: '100%',
      height: '100%',
    },
    // bannerBox: {
    // width: SCREEN_WIDTH,
    //     height: (SCREEN_WIDTH - 32) * 0.58,
    //     marginTop: 12,
    //     paddingHorizontal: 16,
    //     position: 'relative',
    // },
    banner: {
      width: '100%',
      height: '100%',
      borderRadius: 14,
    },
    container: {
      paddingHorizontal: 16,
      paddingBottom: 66,
    },
    showMore: {
      backgroundColor: theme.colors.GRAY200,
      borderRadius: 10,
      height: 36,
      width: 82,
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
      marginRight: 27,
    },
    gray900Color: { color: theme.colors.GRAY900 },
    gray800Color: { color: theme.colors.GRAY800 },
    gray600Color: { color: theme.colors.GRAY600 },
    gray500Color: { color: theme.colors.GRAY500 },
    gray400Color: { color: theme.colors.GRAY400 },
    greenColor: { color: theme.colors.GREEN500 },
    green400Color: { color: theme.colors.GREEN400 },
    whiteColor: { color: theme.colors.WHITE },
    communityBox: {
      marginRight: 20,
      alignItems: 'center',
    },
    community: {
      alignItems: 'center',
      width: 60,
      height: 60,
    },
    hotGatherBox: {
      backgroundColor: theme.colors.GRAY50,
      marginHorizontal: -16,
      marginBottom: 42,
    },
    gray700Color: {
      color: theme.colors.GRAY700,
    },
    dotBox: {
      justifyContent: 'center',
      borderWidth: 1,
      borderRadius: 20,
      borderColor: theme.colors.GRAY400,
      paddingHorizontal: 14,
      paddingVertical: 4.5,
      borderStyle: 'dashed',
      marginBottom: 11,
      marginHorizontal: gap / 2,
    },
    wrapBox: {
      flex: 1,
      flexWrap: 'wrap',
      justifyContent: 'center',
      paddingHorizontal: gap / -2,
    },
    order: {
      position: 'absolute',
      bottom: 12,
      left: 28,
      paddingHorizontal: 8,
      backgroundColor: 'rgba(0, 0, 0, 0.2)',
      borderRadius: 5,
      height: 24,
      justifyContent: 'center',
    },
  });
export default GatherScreen;

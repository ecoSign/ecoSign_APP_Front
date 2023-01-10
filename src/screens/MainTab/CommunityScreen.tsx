import React, { useCallback, useState } from 'react';
import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';

import ProfileHeader from '@components/common/HeaderComponent/ProfileHeader';
import {
  Light12SpoqaHanSansNeo,
  Regular12SpoqaHanSansNeo,
  Regular18SpoqaHanSansNeo,
  Regular20SpoqaHanSansNeo,
  Thin20SpoqaHanSansNeo,
} from '@components/common/Label/SpoqaHanSansNeoLabel';
import ProfileHeaderLayout from '@components/common/Layouts/ProfileHeaderLayout';
import Touchable from '@components/common/buttons/Touchable';
import RowContainer from '@components/common/containers/RowContainer';
import { SCREEN_WIDTH } from '@constants/auth';
import { COMMUNITY_CATEGORIES } from '@constants/communityList';
import { ThemeType } from '@theme/ThemeType';
import useThemedStyles from '@theme/useThemedStyles';

interface CommunityScreenType {}
function CommunityScreen() {
  const styles = useThemedStyles(styleSheet);
  const [currentIndex, setCurrentIndex] = useState(0);

  const onScroll = useCallback(
    (e: { nativeEvent: { contentOffset: { x: any } } }) => {
      const size = SCREEN_WIDTH - 32;
      const {
        nativeEvent: {
          contentOffset: { x },
        },
      } = e;
      setCurrentIndex(x / size > 1 ? 1 : x / size < 0 ? 0 : x / size);
    },
    [currentIndex],
  );

  return (
    <ProfileHeaderLayout
      header={<ProfileHeader headerStyle={styles.headerStyle} />}
      containerStyle={{ paddingBottom: 33 }}
    >
      <ImageBackground
        source={require('assets/images/main/gather/banner.png')}
        resizeMode="cover"
        style={styles.bannerImage}
      >
        <View style={{ paddingLeft: 29 }}>
          <Thin20SpoqaHanSansNeo text="모임 참여하고," />
          <Thin20SpoqaHanSansNeo
            style={styles.gray900Color}
            text={
              <>
                <Regular20SpoqaHanSansNeo
                  text="자기계발"
                  style={{ color: '#9DAE81' }}
                />
                도 하자!
              </>
            }
          />
          <Touchable style={{ marginTop: 15 }}>
            <Light12SpoqaHanSansNeo
              text="모임 보러가기>"
              style={styles.gray500Color}
            />
          </Touchable>
        </View>
      </ImageBackground>
      <Regular18SpoqaHanSansNeo text="커뮤니티" style={styles.gray900Color} />

      <ScrollView
        scrollEventThrottle={50}
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        horizontal
        onScroll={onScroll}
        style={{ marginTop: 24 }}
      >
        {[
          COMMUNITY_CATEGORIES.slice(0, 8),
          COMMUNITY_CATEGORIES.slice(8, 16),
        ].map((list, i) => (
          <RowContainer
            key={i}
            style={{
              flexWrap: 'wrap',
              width: SCREEN_WIDTH - 32,
            }}
          >
            {list.map((data, index) => (
              <View style={styles.imageBox} key={index}>
                <Touchable style={{ alignItems: 'center' }}>
                  <Image source={data.image} key={index} style={styles.image} />
                  <Regular12SpoqaHanSansNeo
                    text={data.title}
                    style={{
                      ...styles.gray900Color,
                      marginTop: 9,
                      marginBottom: 17,
                    }}
                  />
                </Touchable>
              </View>
            ))}
          </RowContainer>
        ))}
      </ScrollView>
      <View style={styles.statusBar}>
        <View
          style={{
            ...styles.activeStatusBar,
            left: `${currentIndex * 50}%`,
          }}
        />
      </View>
      <Regular18SpoqaHanSansNeo
        text="인기글 TOP3"
        style={styles.gray900Color}
      />
    </ProfileHeaderLayout>
  );
}

const styleSheet = (theme: ThemeType) =>
  StyleSheet.create({
    activeStatusBar: {
      backgroundColor: theme.colors.GREEN500,
      width: 20,
      height: 5,
      position: 'absolute',
      borderRadius: 3,
    },
    statusBar: {
      width: 40,
      height: 5,
      backgroundColor: theme.colors.GRAY200,
      position: 'relative',
      borderRadius: 3,
      alignSelf: 'center',
      marginTop: 12,
      marginBottom: 45,
    },
    imageBox: { width: '25%' },
    image: {
      width: 60,
      height: 60,
    },
    green400Color: { color: theme.colors.GREEN400 },
    green500Color: { color: theme.colors.GREEN500 },
    gray900Color: { color: theme.colors.GRAY900 },
    gray800Color: { color: theme.colors.GRAY800 },
    gray600Color: { color: theme.colors.GRAY600 },
    gray500Color: { color: theme.colors.GRAY500 },
    gray400Color: { color: theme.colors.GRAY400 },
    greenColor: { color: theme.colors.GREEN500 },
    whiteColor: { color: theme.colors.WHITE },
    gray700Color: {
      color: theme.colors.GRAY700,
    },
    headerStyle: {
      backgroundColor: 'transparent',
      position: 'absolute',
      zIndex: 2,
      width: '100%',
    },
    bannerImage: {
      width: SCREEN_WIDTH,
      height: SCREEN_WIDTH * 0.853333333,
      marginBottom: 34,
      justifyContent: 'center',
      marginHorizontal: -16,
    },
  });
export default CommunityScreen;

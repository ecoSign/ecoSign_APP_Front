import React from 'react';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import { useDispatch } from 'react-redux';

import ProfileHeader from '@components/common/HeaderComponent/ProfileHeader';
import {
  Bold18SpoqaHanSansNeo,
  Regular12SpoqaHanSansNeo,
  Regular14SpoqaHanSansNeo,
  Regular18SpoqaHanSansNeo,
} from '@components/common/Label/SpoqaHanSansNeoLabel';
import ProfileHeaderLayout from '@components/common/Layouts/ProfileHeaderLayout';
import ImminentDeadline from '@components/common/ListItem/ImminentDeadline';
import RecruitmentGatherItem from '@components/common/ListItem/RecruitmentGatherItem';
import Touchable from '@components/common/buttons/Touchable';
import RowContainer from '@components/common/containers/RowContainer';
import SpaceBetweenContainer from '@components/common/containers/SpaceBetweenContainer';
import HotGatherPost from '@components/elements/MainScreen/HotGatherPost';
import { SCREEN_WIDTH } from '@constants/auth';
import { ThemeType } from '@theme/ThemeType';
import useThemedStyles from '@theme/useThemedStyles';
import { SearchKeyword } from '@utils/SearchKeyword';

interface GatherScreenType {
  navigation: any;
}
function GatherScreen({ navigation }: GatherScreenType) {
  const dispatch = useDispatch();
  const styles = useThemedStyles(styleSheet);
  const onClickShowMoreHotGather = (item: any) => {};

  const onPressKeyWord = (keyword: string) => {
    SearchKeyword(keyword, dispatch, navigation);
  };

  return (
    <ProfileHeaderLayout
      header={<ProfileHeader headerStyle={styles.headerStyle} />}
      containerStyle={{ paddingBottom: 33 }}
    >
      <View style={[styles.noPadding, styles.bannerBox]}>
        <Image
          source={require('assets/images/main/gather/banner.png')}
          style={styles.bannerImage}
          resizeMode="contain"
        />
      </View>
      <SpaceBetweenContainer style={{ marginBottom: 30 }}>
        <Regular18SpoqaHanSansNeo
          text="즐겨찾는 모임 카테고리"
          style={styles.gray900Color}
        />
        <Touchable>
          <Regular12SpoqaHanSansNeo text="편집+" style={styles.gray500Color} />
        </Touchable>
      </SpaceBetweenContainer>
      <SpaceBetweenContainer style={{ paddingHorizontal: 9, marginBottom: 33 }}>
        {[1, 2, 3, 4].map((data, index) => (
          <View key={index} style={{ alignItems: 'center' }}>
            <Touchable>
              <Image
                resizeMode="contain"
                style={styles.categoryImage}
                source={
                  index === 3
                    ? require('assets/icons/common/noneSelect.png')
                    : require('assets/icons/common/gather/culture_performance.png')
                }
              />
            </Touchable>
            <Regular12SpoqaHanSansNeo
              text="라이프"
              style={{ ...styles.gray900Color, marginTop: 9 }}
            />
          </View>
        ))}
      </SpaceBetweenContainer>
      <Touchable style={styles.allViewBtn}>
        <Regular12SpoqaHanSansNeo text="전체보기" style={styles.gray600Color} />
      </Touchable>
      <Regular18SpoqaHanSansNeo
        text="모집중인 모임"
        style={{ ...styles.gray900Color, marginBottom: 24, marginTop: 28 }}
      />
      <FlatList
        data={[1, 2, 3]}
        renderItem={({ item }) => <RecruitmentGatherItem />}
        horizontal
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        style={{ marginBottom: 63 }}
      />
      <RowContainer style={{ marginBottom: 16 }}>
        <Regular18SpoqaHanSansNeo
          text={
            <>
              <Bold18SpoqaHanSansNeo
                text="김너굴"
                style={styles.green500Color}
              />
              <Text>{'님의 \n취향저격 모임!'}</Text>
            </>
          }
        />
      </RowContainer>
      <FlatList
        data={[1, 2, 3]}
        renderItem={({ item }) => (
          <HotGatherPost gather={item} onPress={onClickShowMoreHotGather} />
        )}
        keyExtractor={(item, index) => `key${index}`}
        horizontal
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        style={styles.hotGatherBox}
      />
      <RowContainer style={{ marginBottom: 18 }}>
        <Regular18SpoqaHanSansNeo
          text="마감임박! 서두르세요"
          style={{ ...styles.gray900Color }}
        />
        <Image
          source={require('assets/icons/common/highVoltage.png')}
          style={styles.icon}
        />
      </RowContainer>
      <FlatList
        data={[1, 2, 3]}
        renderItem={({ item }) => <ImminentDeadline />}
        keyExtractor={(item, index) => `key${index}`}
        horizontal
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      />
      <Regular18SpoqaHanSansNeo
        text="키워드로 찾아봐요"
        style={{ ...styles.gray900Color, marginTop: 55, marginBottom: 32 }}
      />
      <RowContainer style={styles.solidWrapBox}>
        {[
          '서핑',
          '원데이클래스',
          '독서',
          '손뜨개',
          '플로깅',
          '영상제작',
          '유기견',
          '등산',
        ].map((data, index) => (
          <Touchable
            style={styles.solidBox}
            key={index}
            onPress={() => {
              onPressKeyWord(data);
            }}
          >
            <Regular14SpoqaHanSansNeo
              text={data}
              style={{ ...styles.green400Color }}
            />
          </Touchable>
        ))}
      </RowContainer>
    </ProfileHeaderLayout>
  );
}
const gap = 8;
const solidGap = 6;

const styleSheet = (theme: ThemeType) =>
  StyleSheet.create({
    wrapBox: {
      flex: 1,
      flexWrap: 'wrap',
      paddingHorizontal: gap / -2,
    },
    solidWrapBox: {
      flex: 1,
      flexWrap: 'wrap',
      paddingHorizontal: solidGap / -2,
      justifyContent: 'center',
    },
    solidBox: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 16,
      paddingVertical: 7.5,
      marginHorizontal: solidGap / 2,
      marginBottom: 13,
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
    categoryImage: {
      width: 60,
      height: 60,
    },
    allViewBtn: {
      backgroundColor: theme.colors.GRAY200,
      borderRadius: 8,
      height: 36,
      alignItems: 'center',
      justifyContent: 'center',
      width: 110,
      alignSelf: 'center',
    },
    hotGatherBox: {
      backgroundColor: theme.colors.GRAY50,
      marginHorizontal: -16,
      marginBottom: 42,
    },
    icon: {
      width: 20,
      height: 20,
    },
  });
export default GatherScreen;

import React from 'react';
import { FlatList, Image, StyleSheet, View } from 'react-native';
import Swiper from 'react-native-swiper';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useDispatch } from 'react-redux';

import { Medium17GmarketSans } from '@components/common/Label/GmarketLabel';
import ProfileHeaderLayout from '@components/common/Layouts/ProfileHeaderLayout';
import Touchable from '@components/common/buttons/Touchable';
import RowContainer from '@components/common/containers/RowContainer';
import { ScrollRowContainer } from '@components/common/containers/ScrollRowContainer';
import CommunityPost from '@components/elements/MainScreen/CommunityPost';
import HotGatherPost from '@components/elements/MainScreen/HotGatherPost';
import NatureGather from '@components/elements/MainScreen/NatureGather';
import { SCREEN_WIDTH } from '@constants/auth';
import { GATHER_CATEGORIES } from '@constants/gatherList';
import { BANNER_LIST } from '@constants/main/banner';
import { ThemeType } from '@theme/ThemeType';
import useThemedStyles from '@theme/useThemedStyles';
import { SearchKeyword } from '@utils/SearchKeyword';

import {
  Regular12SpoqaHanSansNeo,
  Regular14SpoqaHanSansNeo,
  Regular16SpoqaHanSansNeo,
  Thin12SpoqaHanSansNeo,
} from '@/components/common/Label/SpoqaHanSansNeoLabel';

function HomeScreen({ navigation }: { navigation: any }) {
  const style = useThemedStyles(styles);
  const dispatch = useDispatch();
  const onClickCommunity = (item: any) => {
    console.log('test');
  };
  const onClickShowMoreHotGather = (item: any) => {};

  const onPressKeyWord = (keyword: string) => {
    SearchKeyword(keyword, dispatch, navigation);
  };

  return (
    <ProfileHeaderLayout containerStyle={{ paddingTop: 12 }}>
      <View style={{ marginHorizontal: -16 }}>
        <Swiper
          autoplay
          showsPagination={false}
          width={SCREEN_WIDTH}
          height={(SCREEN_WIDTH - 32) * 0.58}
        >
          {BANNER_LIST.map((banner, index) => (
            <Touchable style={style.bannerBox} key={index}>
              <Image source={banner} style={style.banner} />
              <RowContainer style={style.order}>
                <Regular12SpoqaHanSansNeo
                  text={`${index + 1}/${BANNER_LIST.length}`}
                  style={{ ...style.whiteColor }}
                />
              </RowContainer>
            </Touchable>
          ))}
        </Swiper>
      </View>

      <RowContainer style={{ marginTop: 32 }}>
        <Medium17GmarketSans
          text="인기 모임 분야 "
          style={style.gray900Color}
        />
        <Medium17GmarketSans text="TOP6" style={style.greenColor} />
      </RowContainer>
      <ScrollRowContainer
        style={{
          marginTop: 20,
          marginRight: -16,
          marginBottom: 39,
        }}
      >
        <RowContainer>
          <>
            {GATHER_CATEGORIES.slice(0, 6).map((gather, index) => (
              <Touchable key={index} style={style.communityBox}>
                <Image source={gather.image} style={style.community} />
                <Regular12SpoqaHanSansNeo
                  text={gather.title}
                  style={{
                    ...style.gray800Color,
                    marginTop: 6,
                    marginBottom: 14,
                  }}
                />
              </Touchable>
            ))}
          </>
          <Touchable style={style.showMore}>
            <Regular12SpoqaHanSansNeo
              text="더보기"
              style={{ ...style.gray600Color, marginRight: 12 }}
            />
            <Entypo
              name="chevron-small-right"
              style={style.gray600Color}
              size={16}
            />
          </Touchable>
        </RowContainer>
      </ScrollRowContainer>
      <RowContainer style={{ marginBottom: 22 }}>
        <Medium17GmarketSans text="커뮤 인기글!" style={style.gray900Color} />
        <Image
          source={require('assets/icons/command/fire.png')}
          style={{ width: 20, height: 20 }}
        />
        <RowContainer style={{ flex: 1, justifyContent: 'flex-end' }}>
          <Touchable style={{ flexDirection: 'row' }}>
            <Regular12SpoqaHanSansNeo
              text="더보기"
              style={style.gray400Color}
            />
            <Entypo
              name="chevron-small-right"
              style={style.gray400Color}
              size={16}
            />
          </Touchable>
        </RowContainer>
      </RowContainer>
      <FlatList
        data={[1, 2, 3]}
        renderItem={({ item }) => (
          <CommunityPost community={item} onPress={onClickCommunity} />
        )}
        keyExtractor={(item, index) => `key${index}`}
        horizontal
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        style={{ marginRight: -16 }}
      />
      <RowContainer style={{ marginTop: 44, marginBottom: 15 }}>
        <Medium17GmarketSans
          text="분야별 HOT한 모임"
          style={style.gray900Color}
        />
        <Image
          source={require('assets/icons/command/light.png')}
          style={{ width: 20, height: 20 }}
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
        style={style.hotGatherBox}
      />
      <RowContainer style={{ marginBottom: 24 }}>
        <Medium17GmarketSans
          text="환경 모임엔 뭐가 있을까?"
          style={style.gray900Color}
        />
        <Image
          source={require('assets/icons/command/book.png')}
          style={{ width: 20, height: 20, marginLeft: 2 }}
        />
      </RowContainer>
      <FlatList
        data={[1, 2, 3]}
        renderItem={({ item }) => (
          <NatureGather gather={item} onPress={onClickShowMoreHotGather} />
        )}
        keyExtractor={(item, index) => `key${index}`}
        horizontal
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        style={{ marginBottom: 42 }}
      />
      <View style={{ marginBottom: 25 }}>
        <RowContainer style={{ marginBottom: 3 }}>
          <Medium17GmarketSans
            text="이런 모임은 어떠세요?"
            style={style.gray900Color}
          />
          <Image
            source={require('assets/icons/command/sparkles.png')}
            style={{ width: 20, height: 20, marginLeft: 1 }}
          />
        </RowContainer>
        <Thin12SpoqaHanSansNeo
          text="에코유가 제안해드릴게요!"
          style={{ ...style.gray700Color }}
        />
      </View>
      <RowContainer style={style.wrapBox}>
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
            style={style.dotBox}
            key={index}
            onPress={() => {
              onPressKeyWord(data);
            }}
          >
            <Regular14SpoqaHanSansNeo text={data} style={style.gray600Color} />
          </Touchable>
        ))}
      </RowContainer>
      <Touchable
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          marginTop: 4,
        }}
      >
        <Regular16SpoqaHanSansNeo
          text="모임 더 둘러보기"
          style={{ ...style.green400Color, marginRight: 3 }}
        />
        <MaterialCommunityIcons
          name="arrow-right"
          style={{ ...style.green400Color }}
          size={18}
        />
      </Touchable>
    </ProfileHeaderLayout>
  );
}
const gap = 8;

const styles = (theme: ThemeType) =>
  StyleSheet.create({
    bannerBox: {
      position: 'relative',
      paddingHorizontal: 16,
    },
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
export default HomeScreen;

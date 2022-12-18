import React from 'react';
import { FlatList, Image, ScrollView, StyleSheet, View } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';

import { Medium17GmarketSans } from '@components/common/Label/GmarketLabel';
import Touchable from '@components/common/buttons/Touchable';
import { FlexContainer } from '@components/common/containers/FlexContainer';
import RowContainer from '@components/common/containers/RowContainer';
import { ScrollRowContainer } from '@components/common/containers/ScrollRowContainer';
import CommunityPost from '@components/elements/MainScreen/CommunityPost';
import HotGatherPost from '@components/elements/MainScreen/HotGatherPost';
import NatureGather from '@components/elements/MainScreen/NatureGather';
import { GATHER } from '@constants/gatherList';
import { ThemeType } from '@theme/ThemeType';
import useThemedStyles from '@theme/useThemedStyles';

import {
  Regular12SpoqaHanSansNeo,
  Thin12SpoqaHanSansNeo,
} from '@/components/common/Label/SpoqaHanSansNeoLabel';

function HomeScreen() {
  const style = useThemedStyles(styles);

  const onClickCommunity = (item: any) => {
    console.log('test');
  };
  const onClickShowMoreHotGather = (item: any) => {};

  return (
    <ScrollView style={{ flex: 1 }}>
      <FlexContainer style={style.container}>
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
              {GATHER.map((gather, index) => (
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
      </FlexContainer>
    </ScrollView>
  );
}

const styles = (theme: ThemeType) =>
  StyleSheet.create({
    container: {
      paddingHorizontal: 16,
      paddingBottom: 72,
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
  });
export default HomeScreen;

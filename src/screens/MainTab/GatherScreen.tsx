import React from 'react';
import {
  FlatList,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { useDispatch } from 'react-redux';

import ProfileHeader from '@components/common/HeaderComponent/ProfileHeader';
import {
  Bold18SpoqaHanSansNeo,
  Light12SpoqaHanSansNeo,
  Regular12SpoqaHanSansNeo,
  Regular18SpoqaHanSansNeo,
  Regular20SpoqaHanSansNeo,
  Thin20SpoqaHanSansNeo,
} from '@components/common/Label/SpoqaHanSansNeoLabel';
import ProfileHeaderLayout from '@components/common/Layouts/ProfileHeaderLayout';
import ImminentDeadline from '@components/common/ListItem/ImminentDeadline';
import RecruitmentGatherItem from '@components/common/ListItem/RecruitmentGatherItem';
import SearchWrap from '@components/common/SearchWrap';
import Touchable from '@components/common/buttons/Touchable';
import RowContainer from '@components/common/containers/RowContainer';
import SpaceBetweenContainer from '@components/common/containers/SpaceBetweenContainer';
import HotGatherPost from '@components/elements/MainScreen/HotGatherPost';
import { SCREEN_WIDTH } from '@constants/auth';
import { ThemeType } from '@theme/ThemeType';
import useThemedStyles from '@theme/useThemedStyles';

interface GatherScreenType {
  navigation: any;
}
function GatherScreen({ navigation }: GatherScreenType) {
  const styles = useThemedStyles(styleSheet);
  const onClickShowMoreHotGather = (item: any) => {};

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
      <SpaceBetweenContainer style={{ marginBottom: 30 }}>
        <Regular18SpoqaHanSansNeo
          text="즐겨찾는 모임 카테고리"
          style={styles.gray900Color}
        />
        <Touchable
          onPress={() => {
            navigation.navigate('EditFavoriteCommunity');
          }}
        >
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
      <SearchWrap
        gap={6}
        buttonStyle={styles.solidBox}
        fontStyle={styles.green400Color}
      />
    </ProfileHeaderLayout>
  );
}

const styleSheet = (theme: ThemeType) =>
  StyleSheet.create({
    solidBox: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 16,
      paddingVertical: 7.5,
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
      width: SCREEN_WIDTH,
      height: SCREEN_WIDTH * 0.853333333,
      marginBottom: 34,
      justifyContent: 'center',
      marginHorizontal: -16,
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

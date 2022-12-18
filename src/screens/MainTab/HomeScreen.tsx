import React from 'react';
import { FlatList, Image, StyleSheet, View } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';

import { Medium17GmarketSans } from '@components/common/Label/GmarketLabel';
import Touchable from '@components/common/buttons/Touchable';
import { FlexContainer } from '@components/common/containers/FlexContainer';
import RowContainer from '@components/common/containers/RowContainer';
import { ScrollRowContainer } from '@components/common/containers/ScrollRowContainer';
import CommunityPost from '@components/elements/MainScreen/CommunityPost';
import { GATHER } from '@constants/gatherList';
import { ThemeType } from '@theme/ThemeType';
import useThemedStyles from '@theme/useThemedStyles';

import { Regular12SpoqaHanSansNeo } from '@/components/common/Label/SpoqaHanSansNeoLabel';

function HomeScreen() {
  const style = useThemedStyles(styles);

  const onClickCommunity = (item: any) => {
    console.log('test');
  };

  return (
    <FlexContainer>
      <View style={style.container}>
        <RowContainer style={{ marginTop: 32 }}>
          <Medium17GmarketSans
            text="인기 모임 분야 "
            style={style.gray900Color}
          />
          <Medium17GmarketSans text="TOP6" style={style.greenColor} />
        </RowContainer>
        <ScrollRowContainer
          style={{ marginTop: 20, marginRight: -16, marginBottom: 39 }}
        >
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
      </View>
    </FlexContainer>
  );
}

const styles = (theme: ThemeType) =>
  StyleSheet.create({
    container: {
      paddingHorizontal: 16,
    },
    gray900Color: { color: theme.colors.GRAY900 },
    gray800Color: { color: theme.colors.GRAY800 },
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
  });
export default HomeScreen;

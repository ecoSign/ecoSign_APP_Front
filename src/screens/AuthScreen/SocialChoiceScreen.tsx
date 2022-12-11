import React from 'react';
import { Image, StyleSheet } from 'react-native';

import {
  Bold16SpoqaHanSansNeo,
  Medium18SpoqaHanSansNeo,
  Regular16SpoqaHanSansNeo,
  Thin18SpoqaHanSansNeo,
} from '@components/common/Label/SpoqaHanSansNeoLabel';
import { EcoUChildButton } from '@components/common/buttons/EcoUButton';
import Touchable from '@components/common/buttons/Touchable';
import { FlexContainer } from '@components/common/containers/FlexContainer';
import RowContainer from '@components/common/containers/RowContainer';
import { ThemeType } from '@theme/ThemeType';
import useThemedStyles from '@theme/useThemedStyles';

import { SOCIALTYPE } from '@/constants/social';

function SocialChoiceScreen({ navigation }: any) {
  const style = useThemedStyles(styles);

  return (
    <FlexContainer style={style.container}>
      <Thin18SpoqaHanSansNeo text="반가워요" />
      <RowContainer style={style.title}>
        <Medium18SpoqaHanSansNeo text="에코유" />
        <Thin18SpoqaHanSansNeo text="에 처음 오셨군요!" />
      </RowContainer>
      <EcoUChildButton
        btnStyle={{ position: 'relative' }}
        onPress={() => {
          navigation.push('IdentityVerificationScreen');
        }}
      >
        <>
          <Image
            source={require('../../assets/images/auth/tree.png')}
            style={style.tree}
            resizeMode="contain"
          />
          <RowContainer>
            <Bold16SpoqaHanSansNeo text="에코유" style={style.startTitle} />
            <Regular16SpoqaHanSansNeo
              text="로 시작하기"
              style={style.startTitle}
            />
          </RowContainer>
        </>
      </EcoUChildButton>
      <>
        {SOCIALTYPE.map((data) => (
          <Touchable key={data.name} style={style.box}>
            <Image
              source={data.source}
              style={style.socialImage}
              resizeMode="contain"
            />
            <RowContainer
              style={{ width: 122, textAlign: 'left', marginLeft: 13 }}
            >
              <Bold16SpoqaHanSansNeo text={data.name} style={style.font} />
              <Regular16SpoqaHanSansNeo text="로 시작하기" style={style.font} />
            </RowContainer>
          </Touchable>
        ))}
      </>
    </FlexContainer>
  );
}
const styles = (theme: ThemeType) =>
  StyleSheet.create({
    container: {
      paddingHorizontal: 16,
      paddingVertical: 25,
    },
    title: {
      marginBottom: 60,
    },
    box: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      background: '#FFFFFF',
      borderWidth: 1,
      borderColor: '#E0E0E0',
      borderRadius: 15,
      height: 54,
      marginTop: 20,
    },
    font: {
      color: '#212121',
    },
    socialImage: {
      width: 32,
      height: 32,
      position: 'absolute',
      left: 20,
    },
    startTitle: {
      color: theme.colors.MAIN,
    },
    tree: {
      width: 83,
      height: 83,
      position: 'absolute',
      right: 0,
      top: -60,
    },
  });

export default SocialChoiceScreen;

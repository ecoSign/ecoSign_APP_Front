import React, { useEffect } from 'react';
import { Image, StyleSheet } from 'react-native';

import { NoTo16NormalTxt } from '@components/Labels';
import {
  CenterContainer,
  FlexContainer,
} from '@components/common/containers/FlexContainer';
import { GradientContainer } from '@components/common/containers/GradientContainer';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '@constants/auth';
import { useNavigation } from '@react-navigation/native';
import { resetNavigation } from '@utils/navigation';

import { MainTabNavigationProp } from './types';

function SplashScreen() {
  const navigation = useNavigation<MainTabNavigationProp>();

  useEffect(() => {
    setTimeout(() => {
      resetNavigation(navigation, 'Auth');
    }, 1000);
  }, [navigation]);

  return (
    <FlexContainer style={styles.container}>
      <GradientContainer>
        <CenterContainer style={styles.top}>
          <Image
            source={require('../assets/images/auth/splash_logo.png')}
            style={styles.logo}
            resizeMode="contain"
          />
          <NoTo16NormalTxt
            text="당신의 일상에 에코를 더하다"
            style={{ ...styles.title, fontWeight: 'bold' }}
          />
          <NoTo16NormalTxt text="오늘도 에코유 하세요!" style={styles.title} />
        </CenterContainer>

        <Image
          source={require('../assets/images/auth/splash_bear.png')}
          style={styles.bottom}
          resizeMode="contain"
        />
      </GradientContainer>
    </FlexContainer>
  );
}

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  logo: {
    width: SCREEN_WIDTH * 0.45,
    height: 50,
    marginBottom: 22.6,
  },
  title: {
    fontSize: 14,
    lineHeight: 21,
    color: '#757575',
  },
  top: {
    position: 'absolute',
    left: 0,
    top: 0,
    paddingTop: SCREEN_HEIGHT * 0.2,
    alignItems: 'center',
    width: '100%',
  },
  bottom: {
    width: SCREEN_WIDTH,
    marginTop: 56 + SCREEN_HEIGHT * 0.09, // 56 + 74
    // height: 465,
    // height: SCREEN_HEIGHT * 0.52,
  },
});

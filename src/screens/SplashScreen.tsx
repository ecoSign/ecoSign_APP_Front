import React, { useEffect } from 'react';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '@/constants/auth';
import { StyleSheet, Image } from 'react-native';
import { resetNavigation } from '@/utils/navigation';
import { useNavigation } from '@react-navigation/native';
import { MainTabNavigationProp } from './types';
import { FlexContainer } from '@components/containers/FlexContainer';
import { NoTo16NormalTxt } from '@components/Labels';
import { GradientContainer } from '@components/containers/GradientContainer';

const SplashScreen = () => {
  const navigation = useNavigation<MainTabNavigationProp>();

  useEffect(() => {
    // setTimeout(() => {
    //   resetNavigation(navigation, 'Auth');
    // }, 2000);
  }, [navigation]);

  return (
    <FlexContainer style={styles.container}>
      <FlexContainer style={styles.centerContainer}>
        <Image
          source={require('../assets/images/auth/splash_logo.png')}
          style={styles.logo}
          resizeMode={'contain'}
        />
        <NoTo16NormalTxt
          text={'당신의 일상에 에코를 더하다'}
          style={{ ...styles.title, fontWeight: 'bold' }}
        />
        <NoTo16NormalTxt text={'오늘도 에코유 하세요!'} style={styles.title} />
      </FlexContainer>

      <FlexContainer style={styles.bottom}>
        <Image
          source={require('../assets/images/auth/splash_bear.png')}
          style={{
            width: SCREEN_WIDTH,
            // height: 465,
            // height: SCREEN_HEIGHT * 0.52,
          }}
          resizeMode="contain"
        />
      </FlexContainer>
    </FlexContainer>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  centerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottom: {
    justifyContent: 'center',
  },
});

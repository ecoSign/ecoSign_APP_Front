import React, { useEffect } from 'react';

import { StyleSheet, Image, Text } from 'react-native';
import { resetNavigation } from '@/utils/navigation';
import { useNavigation } from '@react-navigation/native';
import { MainTabNavigationProp } from './types';
import {
  CenterContainer,
  FlexContainer,
} from '@components/containers/FlexContainer';

const SplashScreen = () => {
  const navigation = useNavigation<MainTabNavigationProp>();

  useEffect(() => {
    setTimeout(() => {
      resetNavigation(navigation, 'Intro');
    }, 1000);
  }, [navigation]);

  return (
    <FlexContainer style={styles.container}>
      <CenterContainer>
        <Text>스플래시</Text>
        {/*<Image*/}
        {/*  source={require('../assets/images/splash_img.png')}*/}
        {/*  style={{ width: 200, resizeMode: 'contain', marginLeft: 13 }}*/}
        {/*/>*/}
      </CenterContainer>
    </FlexContainer>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {},
});

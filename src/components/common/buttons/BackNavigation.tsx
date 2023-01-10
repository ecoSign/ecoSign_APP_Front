import React from 'react';
import { Image, Text, View } from 'react-native';

import Touchable from '@components/common/buttons/Touchable';
import { useNavigation } from '@react-navigation/native';

function BackNavigation() {
  const navigation = useNavigation();
  return (
    <Touchable
      onPress={() => {
        navigation.goBack();
      }}
    >
      <Image
        source={require('assets/icons/common/leftArrowThin.png')}
        style={{
          width: 24,
          height: 24,
        }}
      />
    </Touchable>
  );
}

export default BackNavigation;

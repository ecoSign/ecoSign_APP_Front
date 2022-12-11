import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

import RowContainer from '@components/common/containers/RowContainer';
import Font from '@styles/Font';
import { ThemeType } from '@theme/ThemeType';

function AuthStep({ step = 1 }: { step?: number }) {
  const step2Image =
    step >= 2
      ? require('../../../assets/images/auth/activeStep2.png')
      : require('../../../assets/images/auth/unActiveStep2.png');

  const step3Image =
    step >= 3
      ? require('../../../assets/images/auth/activeStep3.png')
      : require('../../../assets/images/auth/unActiveStep3.png');

  return (
    <RowContainer>
      <Image
        source={require('../../../assets/images/auth/activeStep1.png')}
        style={styles.image}
      />
      <Image source={step2Image} style={[styles.image, styles.step2Image]} />
      <Image source={step3Image} style={styles.image} />
    </RowContainer>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 12,
    height: 12,
  },
  step2Image: {
    marginHorizontal: 10,
  },
});
export default AuthStep;

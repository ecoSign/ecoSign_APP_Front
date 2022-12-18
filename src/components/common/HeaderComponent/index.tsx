import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Touchable from '@components/common/buttons/Touchable';
import { ThemeType } from '@theme/ThemeType';
import styled from 'styled-components/native';

interface Type {
  onPressLeft?: () => void;
}

function HeaderComponent({ onPressLeft }: Type) {
  return (
    <View>
      <Touchable onPress={onPressLeft}>
        <Text>pp</Text>
      </Touchable>
    </View>
  );
}

const styles = (theme: ThemeType) =>
  StyleSheet.create({
    body: {
      // backgroundColor: theme.colors.BACKGROUND,
      justifyContent: 'space-evenly',
      alignItems: 'center',
      padding: 20,
    },
    title: {
      // color: theme.colors.PRIMARY,
      fontSize: theme.typography.size.L,
      letterSpacing: theme.typography.letterSpacing.M,
      fontWeight: 'bold',
    },
    text: {
      // color: theme.colors.TEXT,
      fontSize: theme.typography.size.M,
      letterSpacing: theme.typography.letterSpacing.S,
      textAlign: 'justify',
    },
    referralCode: {
      // color: theme.colors.TEXT_SECONDARY,
      fontSize: theme.typography.size.S,
      letterSpacing: theme.typography.letterSpacing.L,
      fontWeight: 'bold',
    },
  });

export default HeaderComponent;

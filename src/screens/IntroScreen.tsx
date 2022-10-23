import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { FlexContainer } from '@components/containers/FlexContainer';

const IntroScreen = () => {
  return (
    <>
      <FlexContainer style={styles.container}>
        <Text>intro</Text>
      </FlexContainer>
    </>
  );
};

export default IntroScreen;

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
});

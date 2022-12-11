import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import DisableButton from '@components/common/buttons/DisableButton';
import { FlexContainer } from '@components/common/containers/FlexContainer';
import RowContainer from '@components/common/containers/RowContainer';
import AuthStep from '@components/elements/AuthScreen/AuthStep';

interface SignUpLayoutType {
  header?: any;
  step?: any;
  content?: any;
  text?: any;
  disabled?: any;
  onPress: any;
}
function SignUpLayout({
  header,
  step,
  content,
  text,
  disabled = false,
  onPress,
}: SignUpLayoutType) {
  return (
    <FlexContainer style={styles.container}>
      <RowContainer
        style={{ alignItems: 'flex-start', justifyContent: 'space-between' }}
      >
        {header}
        <AuthStep step={step} />
      </RowContainer>
      <FlexContainer style={{ flex: 1 }}>{content}</FlexContainer>
      <DisableButton text={text} disabled={disabled} onPress={onPress} />
    </FlexContainer>
  );
}
const styles = StyleSheet.create({
  container: { paddingTop: 25, paddingHorizontal: 25, paddingBottom: 40 },
});
export default SignUpLayout;

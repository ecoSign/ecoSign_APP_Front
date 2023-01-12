import React, { ReactChild } from 'react';
import { KeyboardTypeOptions, View } from 'react-native';

import { Regular12SpoqaHanSansNeo } from '@components/common/Label/SpoqaHanSansNeoLabel';
import RowContainer from '@components/common/containers/RowContainer';
import { HasResetInput } from '@components/common/inputs/Inputs';
import useToggle from '@hooks/useToggle';
import styled from 'styled-components';

interface TitleInputType {
  onChangeText: (text: string) => void;
  value: string;
  placeholder: string;
  keyboardType?: KeyboardTypeOptions;
  title: string;
  maxLength?: number;
  rightIcon?: ReactChild;
  secureTextEntry?: boolean;
  hasError?: boolean;
}
function TitleInput({
  onChangeText,
  value,
  placeholder,
  keyboardType,
  title,
  rightIcon,
  maxLength,
  secureTextEntry,
  hasError,
}: TitleInputType) {
  const [isFocused, toggle, setIsFocused] = useToggle();

  return (
    <InputBox isFocused={isFocused} hasError={hasError}>
      <Regular12SpoqaHanSansNeo
        text={title}
        style={{ color: '#757575', marginBottom: 5 }}
      />
      <RowContainer>
        <HasResetInput
          onChangeText={onChangeText}
          value={value}
          placeholder={placeholder}
          keyboardType={keyboardType}
          maxLength={maxLength}
          secureTextEntry={secureTextEntry}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />

        {rightIcon && (rightIcon as any)}
      </RowContainer>
    </InputBox>
  );
}

const InputBox = styled(View)<{ isFocused: boolean; hasError?: boolean }>`
  background-color: ${(props: { theme: { colors: { DISABLE: any } } }) =>
    props.theme.colors.DISABLE};

  border-width: 1px;
  border-color: ${(props: any) =>
    props.hasError
      ? props.theme.colors.RED200
      : props.isFocused
      ? props.theme.colors.GRAY900
      : 'transparent'};

  padding-top: 6px;
  padding-bottom: 12px;
  padding-horizontal: 14;
  margin-bottom: 14px;
  border-radius: 10px;
`;

export default TitleInput;

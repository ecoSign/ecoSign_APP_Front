import React from 'react';
import {
  Controller,
  SubmitErrorHandler,
  SubmitHandler,
  useForm,
} from 'react-hook-form';
import { StyleSheet, View } from 'react-native';

import {
  Regular12SpoqaHanSansNeo,
  Regular14SpoqaHanSansNeo,
  Regular16SpoqaHanSansNeo,
  Regular18SpoqaHanSansNeo,
  Thin18SpoqaHanSansNeo,
} from '@components/common/Label/SpoqaHanSansNeoLabel';
import SignUpLayout from '@components/common/Layouts/SignUpLayout';
import Touchable from '@components/common/buttons/Touchable';
import RowContainer from '@components/common/containers/RowContainer';
import { HasResetInput } from '@components/common/inputs/Inputs';
import TitleInput from '@components/elements/AuthScreen/TitleInput';
import { ThemeType } from '@theme/ThemeType';
import useThemedStyles from '@theme/useThemedStyles';
import styled from 'styled-components';

interface FormValues {
  id: string;
  password: string;
  passwordCheck: string;
}

function PersonalInformationScreen({ navigation }: any) {
  const style = useThemedStyles(styles);

  const { control, handleSubmit } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data: FormValues) => {
    console.log(data);
    navigation.navigate('InitialProfileScreen');
  };

  const onError: SubmitErrorHandler<FormValues> = (errors, e) =>
    console.log('errors', errors);
  // const onError: SubmitErrorHandler<FormValues> = (errors, e) => {
  //   return console.log(errors);
  // };
  // const { ...methods } = useForm();

  function Header() {
    return (
      <View>
        <Thin18SpoqaHanSansNeo
          text="자, 이제 마지막이에요!"
          style={style.titleText}
        />

        <RowContainer>
          <Regular18SpoqaHanSansNeo text="개인정보" style={style.titleText} />
          <Thin18SpoqaHanSansNeo
            text="를 입력해주세요."
            style={style.titleText}
          />
        </RowContainer>
      </View>
    );
  }

  function Content() {
    return (
      <View style={{ marginTop: 24 }}>
        <Controller
          control={control}
          rules={{
            required: {
              value: true,
              message: 'Field is required!',
            },
          }}
          name="id"
          defaultValue=""
          render={({ field: { onChange, value } }) => (
            <TitleInput
              onChangeText={onChange}
              value={value}
              placeholder="이름 입력"
              maxLength={12}
              title="아이디"
            />
          )}
        />

        <Controller
          control={control}
          rules={{
            required: {
              value: true,
              message: 'Field is required!',
            },
          }}
          name="password"
          defaultValue=""
          render={({ field: { onChange, value } }) => (
            <TitleInput
              onChangeText={onChange}
              value={value}
              placeholder="비밀번호 입력"
              maxLength={12}
              secureTextEntry
              title="비밀번호"
            />
          )}
        />

        <Controller
          control={control}
          rules={{
            required: {
              value: true,
              message: 'Field is required!',
            },
          }}
          name="passwordCheck"
          defaultValue=""
          render={({ field: { onChange, value } }) => (
            <TitleInput
              onChangeText={onChange}
              value={value}
              placeholder="비밀번호 재입력"
              maxLength={12}
              secureTextEntry
              title="비밀번호 재확인"
            />
          )}
        />

        <InputBox>
          <Regular12SpoqaHanSansNeo
            text="휴대폰번호"
            style={{ color: '#757575', marginBottom: 5 }}
          />
          <Regular16SpoqaHanSansNeo
            text="01096691584"
            style={{
              height: 24,
              lineHeight: 24,
            }}
          />
        </InputBox>
      </View>
    );
  }

  return (
    <SignUpLayout
      header={<Header />}
      step={3}
      text="다음"
      disabled={false}
      content={<Content />}
      onPress={handleSubmit(onSubmit, onError)}
    />
  );
}

const styles = (theme: ThemeType) =>
  StyleSheet.create({
    titleText: {
      color: theme.colors.GRAY900,
      lineHeight: 18 * 1.5,
    },
    sendButton: {
      paddingHorizontal: 7.5,
      paddingVertical: 3,
      borderRadius: 5,
      marginLeft: 5,
    },
    ActiveSendButton: {
      backgroundColor: theme.colors.WHITE,
      borderWidth: 1,
      borderColor: theme.colors.MAIN,
    },
    UnActiveSendButton: {
      backgroundColor: theme.colors.MAIN,
    },
  });

const InputBox = styled(View)`
  background-color: ${(props: { theme: { colors: { DISABLE: any } } }) =>
    props.theme.colors.DISABLE};
  padding-top: 6px;
  padding-bottom: 12px;
  padding-horizontal: 14;
  margin-bottom: 14px;
  border-radius: 10px;
  //border-width: 1px;
  //border-color: #212121;
`;
export default PersonalInformationScreen;

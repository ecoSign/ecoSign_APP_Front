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
  Regular18SpoqaHanSansNeo,
  Thin18SpoqaHanSansNeo,
} from '@components/common/Label/SpoqaHanSansNeoLabel';
import SignUpLayout from '@components/common/Layouts/SignUpLayout';
import Touchable from '@components/common/buttons/Touchable';
import RowContainer from '@components/common/containers/RowContainer';
import TitleInput from '@components/elements/AuthScreen/TitleInput';
import { ThemeType } from '@theme/ThemeType';
import useThemedStyles from '@theme/useThemedStyles';
import styled from 'styled-components';

interface FormValues {
  phone: string;
  verificationCode: string;
}

function IdentityVerificationScreen({ navigation }: any) {
  const style = useThemedStyles(styles);

  const { control, handleSubmit } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data: FormValues) => {
    navigation.navigate('AuthTermsScreen');
  };

  const onError: SubmitErrorHandler<FormValues> = (errors, e) => {};
  const isSendVerification = true;
  // const onError: SubmitErrorHandler<FormValues> = (errors, e) => {
  //   return console.log(errors);
  // };
  // const { ...methods } = useForm();

  function Header() {
    return (
      <View>
        <Thin18SpoqaHanSansNeo
          text="서비스 이용을 위해"
          style={style.titleText}
        />
        <RowContainer>
          <Regular18SpoqaHanSansNeo text="본인인증" style={style.titleText} />
          <Thin18SpoqaHanSansNeo text="이 필요해요" style={style.titleText} />
        </RowContainer>
      </View>
    );
  }

  function SendButton() {
    return (
      <Touchable
        style={[
          style.sendButton,
          isSendVerification
            ? style.ActiveSendButton
            : style.UnActiveSendButton,
        ]}
      >
        <Regular12SpoqaHanSansNeo
          text="번호전송"
          style={{ color: isSendVerification ? '#9CCC65' : '#fff' }}
        />
      </Touchable>
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
          name="phone"
          defaultValue=""
          render={({ field: { onChange, value } }) => (
            <TitleInput
              title="휴대폰번호"
              onChangeText={onChange}
              value={value}
              placeholder="‘ - ’ 제외. 숫자만 입력"
              keyboardType="numeric"
              rightIcon={<SendButton />}
              maxLength={12}
            />
          )}
        />

        <View style={{ position: 'relative' }}>
          <Controller
            control={control}
            rules={{
              required: {
                value: true,
                message: 'Field is required!',
              },
            }}
            name="verificationCode"
            defaultValue=""
            render={({ field: { onChange, value } }) => (
              <TitleInput
                title="인증번호"
                onChangeText={onChange}
                value={value}
                placeholder="숫자만 입력"
                keyboardType="numeric"
                maxLength={4}
              />
            )}
          />
          <Regular12SpoqaHanSansNeo text="4:00" style={style.timer} />
        </View>
        {/*  <RowContainer style={{ marginTop: -14, marginLeft: 9 }}> */}
        {/*    <AntDesign */}
        {/*        name="exclamationcircleo" */}
        {/*        size={10} */}
        {/*        style={style.errorStyle} */}
        {/*    /> */}
        {/*    <Regular12SpoqaHanSansNeo */}
        {/*        text={'동일한 닉네임이 존재합니다'} */}
        {/*        style={style.errorStyle} */}
        {/*    /> */}
        {/* </RowContainer> */}
      </View>
    );
  }

  return (
    <SignUpLayout
      header={<Header />}
      step={1}
      text="인증"
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
    errorStyle: {
      color: theme.colors.RED200,
      marginRight: 6,
      lineHeight: 18,
    },
    timer: {
      color: theme.colors.GREEN400,
      position: 'absolute',
      right: 39 + 6,
      top: 29,
    },
  });

const InputBox = styled(View)`
  background-color: ${(props: { theme: { colors: { DISABLE: any } } }) =>
    props.theme.colors.DISABLE};
  padding: 6px 14px 12px;
  margin-bottom: 14px;
  border-radius: 10px;
  //border-width: 1px;
  //border-color: #212121;
`;
export default IdentityVerificationScreen;

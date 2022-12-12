import React from 'react';
import {
  Controller,
  SubmitErrorHandler,
  SubmitHandler,
  useForm,
} from 'react-hook-form';
import { Image, StyleSheet, View } from 'react-native';

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
import { ThemeType } from '@theme/ThemeType';
import useThemedStyles from '@theme/useThemedStyles';
import styled from 'styled-components';

interface FormValues {
  nickName: string;
}

function InitialProfileScreen({ navigation }: any) {
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
        <Thin18SpoqaHanSansNeo text="프로필 설정" style={style.titleText} />
      </View>
    );
  }

  function Content() {
    return (
      <View style={{ marginTop: 24 }}>
        <RowContainer
          style={{
            justifyContent: 'center',
            marginBottom: 35,
          }}
        >
          <View style={{ position: 'relative' }}>
            <Image
              source={require('../../assets/images/command/defaultProfile.png')}
              resizeMode="contain"
              style={{ width: 100, height: 100 }}
            />
            <View style={style.cameraBox}>
              <Image
                source={require('../../assets/icons/command/camera.png')}
                resizeMode="contain"
                style={style.camera}
              />
            </View>
          </View>
        </RowContainer>
        <InputBox>
          <Regular12SpoqaHanSansNeo
            text="닉네임"
            style={{ color: '#757575', marginBottom: 5 }}
          />
          <RowContainer>
            <Controller
              control={control}
              rules={{
                required: {
                  value: true,
                  message: 'Field is required!',
                },
              }}
              name="nickName"
              defaultValue=""
              render={({ field: { onChange, value } }) => (
                <HasResetInput
                  onChangeText={onChange}
                  value={value}
                  placeholder="에코유453"
                  maxLength={8}
                />
              )}
            />
          </RowContainer>
        </InputBox>

        <Regular12SpoqaHanSansNeo
          text={'\u2022 최대 8자 이내로 설정해주세요'}
          style={style.inforText}
        />
        <Regular12SpoqaHanSansNeo
          text={
            '\u2022 프로필사진과 닉네임은 마이페이지에서 수정이 가능합니다.'
          }
          style={style.inforText}
        />
      </View>
    );
  }

  return (
    <SignUpLayout
      header={<Header />}
      text="다음"
      disabled={false}
      content={<Content />}
      onPress={handleSubmit(onSubmit, onError)}
    />
  );
}

const styles = (theme: ThemeType) =>
  StyleSheet.create({
    cameraBox: {
      backgroundColor: theme.colors.GRAY100,
      borderWidth: 1,
      borderColor: theme.colors.GRAY200,
      width: 30,
      height: 30,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 15,
      position: 'absolute',
      bottom: 0,
      right: 0,
    },
    camera: {
      width: 20,
      height: 20,
    },
    titleText: {
      color: theme.colors.GRAY900,
      lineHeight: 18 * 1.5,
    },
    inforText: {
      color: theme.colors.GREEN500,
    },
  });

const InputBox = styled(View)`
  background-color: ${(props: { theme: { colors: { DISABLE: any } } }) =>
    props.theme.colors.DISABLE};
  padding-top: 6px;
  padding-bottom: 12px;
  padding-horizontal: 14;
  margin-bottom: 30px;
  border-radius: 10px;
  //border-width: 1px;
  //border-color: #212121;
`;
export default InitialProfileScreen;

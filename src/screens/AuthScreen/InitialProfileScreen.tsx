import React from 'react';
import {
  Controller,
  SubmitErrorHandler,
  SubmitHandler,
  useForm,
} from 'react-hook-form';
import { Image, StyleSheet, Text, View } from 'react-native';

import BottomSheet from '@components/common/BottomSheet';
import {
  Bold18GmarketSans,
  Bold20GmarketSans,
  Medium18GmarketSans,
  Medium20GmarketSans,
} from '@components/common/Label/GmarketLabel';
import {
  Regular12SpoqaHanSansNeo,
  Thin18SpoqaHanSansNeo,
} from '@components/common/Label/SpoqaHanSansNeoLabel';
import SignUpLayout from '@components/common/Layouts/SignUpLayout';
import EcoUButton from '@components/common/buttons/EcoUButton';
import { FlexContainer } from '@components/common/containers/FlexContainer';
import RowContainer from '@components/common/containers/RowContainer';
import TitleInput from '@components/elements/AuthScreen/TitleInput';
import { SCREEN_WIDTH } from '@constants/auth';
import { useLayout } from '@hooks/useLayout';
import useToggle from '@hooks/useToggle';
import { ThemeType } from '@theme/ThemeType';
import useThemedStyles from '@theme/useThemedStyles';

interface FormValues {
  nickName: string;
}

function InitialProfileScreen({ navigation }: any) {
  const style = useThemedStyles(styles);
  const [modalVisible, modalVisibleToggle, setModalVisible] = useToggle();
  const [layout, setLayout] = useLayout();

  const { control, handleSubmit } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data: FormValues) => {
    console.log(data);
    modalVisibleToggle();
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
            <TitleInput
              onChangeText={onChange}
              value={value}
              placeholder="에코유453"
              maxLength={8}
              title="닉네임"
            />
          )}
        />

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
    <>
      <SignUpLayout
        header={<Header />}
        text="완료"
        disabled={false}
        content={<Content />}
        onPress={handleSubmit(onSubmit, onError)}
      />
      {modalVisible && (
        <BottomSheet
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          disable
        >
          <View style={style.signUpSuccessContainer}>
            <FlexContainer
              style={{
                flex: 0,
                alignItems: 'center',
              }}
            >
              <View style={{ position: 'relative' }}>
                <Image
                  source={require('../../assets/images/auth/chatBubble.png')}
                  style={style.successBubble}
                  resizeMode="contain"
                />
                <View
                  style={{
                    ...style.loginText,
                    transform: [
                      {
                        translateX: -(layout.width / 2) - 10,
                      },
                      {
                        translateY: -(layout.height / 2) - layout.height * 0.21,
                      },
                    ],
                  }}
                  onLayout={setLayout}
                >
                  <RowContainer>
                    <Bold18GmarketSans
                      text="너굴이짱"
                      style={style.successTitle}
                    />
                    <Medium18GmarketSans
                      text="님 반가워요!"
                      style={style.successTitle}
                    />
                  </RowContainer>
                  <Medium18GmarketSans
                    text="에코유에 오신것을 환영합니다 :D"
                    style={style.successTitle}
                  />
                </View>
              </View>
              <Image
                source={require('../../assets/images/auth/singUpSuccess.png')}
                resizeMode="contain"
                style={style.successImage}
              />
              {/**/}
              {/*    */}
            </FlexContainer>
            <EcoUButton
              text="에코유 홈으로 가기"
              btnStyle={style.loginBtn}
              onPress={() => {
                console.log('13');
              }}
            />
          </View>
        </BottomSheet>
      )}
    </>
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
    signUpSuccessContainer: {
      paddingHorizontal: 16,
      paddingTop: 25,
      paddingBottom: 40,
      flexDirection: 'column',
    },
    successBubble: {
      width: SCREEN_WIDTH - 52,
      height: (SCREEN_WIDTH - 52) * 0.38,
    },
    successImage: {
      height: SCREEN_WIDTH * 0.61,
      // width: SCREEN_WIDTH * 0.61,
    },
    loginBtn: {
      marginTop: 14,
    },
    loginText: {
      position: 'absolute',
      left: '50%',
      top: '50%',
    },
    successTitle: {
      color: theme.colors.GRAY700,
    },
  });

export default InitialProfileScreen;

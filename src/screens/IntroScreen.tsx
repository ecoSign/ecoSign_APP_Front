import React, { useCallback, useRef, useState } from 'react';
import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

import { GMarketNormalTxt } from '@components/Labels';
import EcoUButton from '@components/buttons/EcoUButton';
import { FlexContainer } from '@components/containers/FlexContainer';
import RowContainer from '@components/containers/RowContainer';
import { UserInput } from '@components/inputs/Inputs';
import useInput from '@hooks/useInput';
import Font from '@styles/Font';

const IntroScreen = () => {
  const pwInput = useRef<TextInput>(null);

  const [userId, onChangeId, setUserId] = useInput('');
  const [pw, onChangePw, setPw] = useInput('');
  const [isPwVisible, setIsPwVisible] = useState(false);

  const onLogin = useCallback(() => {
    Alert.alert('a');
  }, []);

  return (
    <FlexContainer style={styles.container}>
      <RowContainer style={styles.top}>
        <Image
          source={require('../assets/images/auth/splash_logo.png')}
          style={styles.logo}
          resizeMode={'contain'}
        />
      </RowContainer>
      <GMarketNormalTxt
        text={'당신의 에코유를 들려주세요.'}
        style={{
          color: '#616161',
          fontWeight: '300',
          marginBottom: 10,
          fontFamily: Font.GmarketSansTTFLight,
        }}
      />

      <UserInput
        value={userId}
        onChangeText={onChangeId}
        leftIcon={require('../assets/icons/auth/id.png')}
        placeholder="아이디"
        onSubmitEditing={() => pwInput?.current?.focus()}
      />
      <UserInput
        inputRef={pwInput}
        value={pw}
        onChangeText={onChangePw}
        leftIcon={require('../assets/icons/auth/pw.png')}
        rightIcon={require('../assets/icons/auth/id.png')}
        placeholder="비밀번호"
        autoCorrect={false}
        secureTextEntry={!isPwVisible}
      />
      <TouchableOpacity style={styles.findAccount} onPress={() => null}>
        <GMarketNormalTxt
          text={'아이디/비밀번호 찾기'}
          style={{
            fontSize: 12,
            lineHeight: 18,
            color: '#9e9e9e',
            marginRight: 2,
          }}
        />
        <AntDesign name={'right'} color={'#9E9E9E'} size={10} />
      </TouchableOpacity>
      <EcoUButton
        text={'로그인'}
        btnStyle={styles.loginBtn}
        onPress={onLogin}
      />
      {/*<GradientButton outerStyle={styles.loginBtn} onPress={onLogin}>*/}
      {/*  <GMarketNormalTxt text={'로그인'} style={{ color: '#9CCC65' }} />*/}
      {/*</GradientButton>*/}

      <Text style={styles.bottomTxt}>
        아직 회원이 아니시라면?
        <GMarketNormalTxt
          text={' 회원가입 '}
          onPress={() => Alert.alert('회원가입하러 간드아~~')}
          style={{ color: '#9CCC65' }}
        />
        하러가기
      </Text>
    </FlexContainer>
  );
};

export default IntroScreen;

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  logo: {
    width: 129,
    height: 38,
  },
  top: {
    paddingTop: 39,
    marginBottom: 14.5,
  },
  findAccount: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 25,
    alignSelf: 'flex-end',
  },
  loginBtn: {
    marginTop: 43,
  },
  bottomTxt: {
    fontFamily: Font.GmarketSansTTFLight,
    fontSize: 14,
    lineHeight: 21,
    color: '#424242',
    textAlign: 'center',
    marginTop: 70,
  },
});

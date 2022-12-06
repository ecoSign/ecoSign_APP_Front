import React, { useCallback, useEffect, useRef, useState } from 'react';
import {
  Alert,
  Animated,
  Easing,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

import { GMarketNormalTxt, NoTo16NormalTxt } from '@components/Labels';
import EcoUButton from '@components/common/buttons/EcoUButton';
import { FlexContainer } from '@components/common/containers/FlexContainer';
import RowContainer from '@components/common/containers/RowContainer';
import { UserInput } from '@components/common/inputs/Inputs';
import { SOCIALTYPE } from '@constants/social';
import useInput from '@hooks/useInput';
import Font from '@styles/Font';

function IntroScreen() {
  const pwInput = useRef<TextInput>(null);

  const [userId, onChangeId, setUserId] = useInput('');
  const [pw, onChangePw, setPw] = useInput('');
  const [isPwVisible, setIsPwVisible] = useState(false);

  const onLogin = useCallback(() => {
    Alert.alert('a');
  }, []);

  const ArrowDownMove = (ArrowMove: any) => {
    Animated.loop(
      Animated.timing(ArrowMove, {
        toValue: 100,
        duration: 1000,
        useNativeDriver: true,
      }),
      { iterations: 1000 },
    ).start();
  };
  const ArrowMove = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(ArrowMove, {
          toValue: 20,
          duration: 700,
          useNativeDriver: true,
        }),
        Animated.timing(ArrowMove, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: true,
        }),
      ]),
      { iterations: 1000 },
    ).start();
  }, []);

  return (
    <ScrollView style={{ flex: 1 }}>
      <FlexContainer style={styles.container}>
        <FlexContainer>
          <RowContainer style={styles.top}>
            <Image
              source={require('../assets/images/auth/textLogo.png')}
              style={styles.logo}
              resizeMode="contain"
            />
          </RowContainer>
          <GMarketNormalTxt
            text="당신의 에코유를 들려주세요."
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
              text="아이디/비밀번호 찾기"
              style={{
                fontSize: 12,
                lineHeight: 18,
                color: '#9e9e9e',
                marginRight: 2,
              }}
            />
            <AntDesign name="right" color="#9E9E9E" size={10} />
          </TouchableOpacity>
          <EcoUButton
            text="로그인"
            btnStyle={styles.loginBtn}
            onPress={onLogin}
          />
        </FlexContainer>

        <RowContainer
          style={{
            justifyContent: 'center',
          }}
        >
          <View style={styles.line} />
          <NoTo16NormalTxt text="or" style={{ marginHorizontal: 20 }} />
          <View style={styles.line} />
        </RowContainer>
        <RowContainer
          style={{
            flex: 0,
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 41,
          }}
        >
          {SOCIALTYPE.map((data, index) => (
            <View key={index} style={styles.socialBox}>
              {index === 2 && (
                <Animated.View
                  style={{
                    position: 'absolute',
                    top: -40,
                    transform: [{ translateY: ArrowMove }],
                  }}
                >
                  <Image
                    source={require('../assets/icons/auth/beforeLogin.png')}
                    resizeMode="contain"
                    style={{ width: 72, height: 28 }}
                  />
                </Animated.View>
              )}
              <Image
                source={data.source}
                style={{ width: '100%', height: '100%' }}
                resizeMode="contain"
              />
            </View>
          ))}
        </RowContainer>
        <Text style={styles.bottomTxt}>
          아직 회원이 아니시라면?
          <GMarketNormalTxt
            text=" 회원가입 "
            onPress={() => Alert.alert('회원가입하러 간드아~~')}
            style={{ color: '#9CCC65' }}
          />
          하러가기
        </Text>
      </FlexContainer>
    </ScrollView>
  );
}

export default IntroScreen;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingBottom: 72,
  },
  logo: {
    width: 188,
    height: 76,
  },
  top: {
    paddingTop: 44,
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
    marginTop: 68,
  },
  socialBox: {
    background: '#fff',
    borderWidth: 1,
    color: 'E0E0E0',
    borderRadius: 15,
    padding: 20,
    aspectRatio: 1,
    width: 72,
    height: 72,
  },
  line: {
    height: 1,
    width: 72,
    backgroundColor: '#E0E0E0',
  },
});

import React, { useCallback, useState } from 'react';
import { ScrollView, StyleSheet } from 'react-native';

import AccordionList from '@components/common/AccordionList';
import {
  Bold16SpoqaHanSansNeo,
  Regular18SpoqaHanSansNeo,
} from '@components/common/Label/SpoqaHanSansNeoLabel';
import SignUpLayout from '@components/common/Layouts/SignUpLayout';
import Touchable from '@components/common/buttons/Touchable';
import { AUTH_TERMS } from '@constants/authTerms';
import { ThemeType } from '@theme/ThemeType';
import useThemedStyles from '@theme/useThemedStyles';

function AuthTermsScreen({ navigation }: any) {
  const style = useThemedStyles(styles);
  const [acceptList, setAcceptList] = useState<string[]>([]);

  const onClickCheck = useCallback(
    (value: string) => {
      if (acceptList.includes(value)) {
        setAcceptList((prev) => prev.filter((data) => data !== value));
      } else {
        setAcceptList([...acceptList, value]);
      }
    },
    [acceptList],
  );

  const onToggleAllAccept = useCallback(() => {
    if (acceptList.length >= 4) {
      setAcceptList([]);
    } else {
      setAcceptList(AUTH_TERMS.map((data) => data.value));
    }
  }, [acceptList]);

  function Header() {
    return (
      <Regular18SpoqaHanSansNeo
        text="이용 약관 동의"
        style={[style.titleText]}
      />
    );
  }
  function Content() {
    return (
      <ScrollView style={{ marginBottom: 20 }}>
        <Touchable
          style={[
            style.buttonStyle,
            acceptList.length >= 4
              ? style.activeButtonStyle
              : style.unActiveButtonStyle,
          ]}
          onPress={onToggleAllAccept}
        >
          <Bold16SpoqaHanSansNeo
            text="모두 동의하기"
            style={
              acceptList.length >= 4
                ? style.activeAcceptStyle
                : style.unActiveAcceptStyle
            }
          />
        </Touchable>
        {AUTH_TERMS.map((term, index) => (
          <AccordionList
            key={index}
            title={term.title}
            subTitle={term.content}
            isRequired={term.isRequired}
            onClick={onClickCheck}
            isActive={acceptList.includes(term.value)}
            value={term.value}
            // subTitleStyle={style.subTitleStyle}
            // titleStyle={style.titleStyle}
          />
        ))}
      </ScrollView>
    );
  }

  const onPressNextScreen = () => {
    navigation.navigate('PersonalInformationScreen');
  };

  return (
    <SignUpLayout
      header={<Header />}
      step={2}
      text="약관 동의"
      disabled={
        !(
          acceptList.includes('termsService') &&
          acceptList.includes('privacyPolicy')
        )
      }
      content={<Content />}
      headerStyle={{ alignItems: 'center', marginBottom: 24 }}
      onPress={onPressNextScreen}
      stepStyle={{ marginTop: 0 }}
    />
  );
}

const styles = (theme: ThemeType) =>
  StyleSheet.create({
    titleText: {
      lineHeight: 18 * 1.5,
      color: theme.colors.GRAY900,
    },
    activeAcceptStyle: {
      color: theme.colors.GREEN400,
      fontWeight: '700',
    },
    unActiveAcceptStyle: {
      color: theme.colors.GRAY500,
      fontWeight: '700',
    },
    buttonStyle: {
      alignItems: 'center',
      justifyContent: 'center',
      height: 50,
      borderRadius: 10,
      marginBottom: 25,
    },
    activeButtonStyle: {
      backgroundColor: theme.colors.WHITE,
      borderColor: theme.colors.GREEN400,
      borderWidth: 1,
    },
    unActiveButtonStyle: {
      backgroundColor: 'rgba(0, 0, 0, 0.03)',
    },
  });
export default AuthTermsScreen;

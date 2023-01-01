import React, { useCallback, useEffect, useState } from 'react';
import { Image, LayoutAnimation, StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

import {
  Regular12SpoqaHanSansNeo,
  Regular14SpoqaHanSansNeo,
} from '@components/common/Label/SpoqaHanSansNeoLabel';
import Touchable from '@components/common/buttons/Touchable';
import RowContainer from '@components/common/containers/RowContainer';
import { ThemeType } from '@theme/ThemeType';
import useThemedStyles from '@theme/useThemedStyles';

interface Type {
  title: string;
  subTitle: string;
  isRequired?: boolean;
  onClick: any;
  isActive: boolean;
  value: string;
}
function AccordionList({
  title,
  subTitle,
  isRequired,
  onClick,
  isActive,
  value,
}: Type) {
  const style = useThemedStyles(styles);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const toggleOpen = useCallback(() => {
    if (isLoading) {
      return;
    }
    setIsLoading(true);
    setIsOpen((value) => !value);
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, [isLoading, isOpen, LayoutAnimation]);

  return (
    <View>
      <Touchable
        onPress={toggleOpen}
        activeOpacity={0.6}
        style={style.titleBox}
      >
        {/* AntDesign */}
        <RowContainer style={{ justifyContent: 'space-between' }}>
          <RowContainer>
            <Touchable
              onPress={() => {
                onClick(value);
              }}
            >
              <Icon
                name="check"
                size={18}
                style={isActive ? style.check : style.unCheck}
              />
            </Touchable>
            <Regular14SpoqaHanSansNeo text={title} style={style.title} />
            <Regular14SpoqaHanSansNeo
              text={isRequired ? '(필수)' : '(선택)'}
              style={style.required}
            />
          </RowContainer>
          <Image
            source={require('../../../assets/icons/common/arrow.png')}
            resizeMode="contain"
            style={{
              width: 16,
              height: 16,
              transform: [{ rotate: !isOpen ? '0deg' : '180deg' }],
            }}
          />
        </RowContainer>
      </Touchable>
      <View style={[style.list, !isOpen ? style.hidden : undefined]}>
        <Regular12SpoqaHanSansNeo text={subTitle} style={style.subTitle} />
        {/* <Text style={{ ...styles.subTitle, ...subTitleStyle }}>{subTitle}</Text> */}
      </View>
    </View>
  );
}

const styles = (theme: ThemeType) =>
  StyleSheet.create({
    hidden: {
      height: 0,
      padding: 0,
      paddingHorizontal: 0,
      paddingVertical: 0,
    },
    list: {
      overflow: 'hidden',
      maxHeight: 100,
      backgroundColor: theme.colors.GRAY50,
      paddingHorizontal: 8,
      paddingVertical: 6,
    },
    title: {
      color: '#000000',
      marginLeft: 8,
    },
    subTitle: {
      color: theme.colors.GRAY500,
    },
    titleBox: {
      paddingTop: 13,
      paddingBottom: 16,
    },
    required: {
      marginLeft: 8,
      color: theme.colors.GREEN400,
    },
    check: {
      color: theme.colors.GREEN400,
    },
    unCheck: {
      color: theme.colors.GRAY500,
    },
  });
export default AccordionList;

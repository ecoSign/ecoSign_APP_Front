import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

import BottomSheet from '@components/common/BottomSheet';
import { Regular16SpoqaHanSansNeo } from '@components/common/Label/SpoqaHanSansNeoLabel';
import Touchable from '@components/common/buttons/Touchable';
import RowContainer from '@components/common/containers/RowContainer';
import { SCREEN_WIDTH } from '@constants/auth';
import useToggle from '@hooks/useToggle';
import { ThemeType } from '@theme/ThemeType';
import useThemedStyles from '@theme/useThemedStyles';

function BottomPlusSheet() {
  const style = useThemedStyles(styles);

  const [modalVisible, modalVisibleToggle, setModalVisible] = useToggle();

  return (
    <>
      <Touchable onPress={modalVisibleToggle}>
        <Image
          source={require('assets/icons/main/plus.png')}
          resizeMode="contain"
          style={style.plus}
        />
      </Touchable>
      {modalVisible && (
        <BottomSheet
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          openDuration={700}
          closeDuration={1000}
        >
          <RowContainer style={style.bottomSheet}>
            <Touchable
              style={{
                alignItems: 'center',
              }}
            >
              <Image
                source={require('assets/icons/main/addGather.png')}
                style={style.image}
              />
              <Regular16SpoqaHanSansNeo text="모임생성" style={style.title} />
            </Touchable>
            <View style={style.bar} />
            <Touchable
              style={{
                alignItems: 'center',
              }}
            >
              <Image
                source={require('assets/icons/main/write.png')}
                style={style.image}
              />
              <Regular16SpoqaHanSansNeo text="글쓰기" style={style.title} />
            </Touchable>
          </RowContainer>
        </BottomSheet>
      )}
    </>
  );
}

const styles = (theme: ThemeType) =>
  StyleSheet.create({
    plus: {
      height: 55,
      width: 55,
    },
    bottomSheet: {
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      paddingBottom: 50,
      paddingTop: 27,
      paddingHorizontal: SCREEN_WIDTH * 0.18,
      justifyContent: 'space-between',
    },
    title: {
      color: theme.colors.GRAY900,
      marginTop: 10,
    },
    image: {
      width: 50,
      height: 50,
    },
    bar: {
      width: 1,
      height: '50%',
      backgroundColor: theme.colors.GRAY300,
    },
  });

export default BottomPlusSheet;

import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

import HeaderComponent from '@components/common/HeaderComponent';
import { useAsync } from '@hooks/useAsync';
import { useLayout } from '@hooks/useLayout';
import Font from '@styles/Font';
import { ThemeType } from '@theme/ThemeType';
import useThemedStyles from '@theme/useThemedStyles';
import axios from 'axios';
import styled from 'styled-components/native';

import useTheme from '../theme/useTheme';

function TEST() {
  const theme = useTheme();
  const style = useThemedStyles(styles);
  const [layout, setLayout] = useLayout();
  const [post, setPosts] = useState([]);

  const [error, resetError] = useAsync(async () => {
    setPosts([]);
    resetError();
    const posts = await axios.get('https://api.coinpaprika.com/v1/coins');
    setPosts(posts?.data?.slice(0, 10));
  });

  return (
    <View style={style.body} onLayout={setLayout}>
      <HeaderComponent />
      <Text style={{ fontFamily: Font.GmarketSansTTFBold }}>213412234</Text>
      <Text style={{ fontFamily: Font.GmarketSansTTFLight }}>21341234</Text>
      {error && <Text>err</Text>}
      {/* <FlatList */}
      {/*    data={post} */}
      {/*    renderItem={({ item }) => <Text>{item?.name}</Text>} */}
      {/* /> */}

      <Text style={style.title}>Home Screen</Text>
      <Text style={style.text} onLayout={setLayout}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae
        lorem enim. Etiam accumsan nibh eu laoreet sollicitudin. Proin
        ultricies, metus nec auctor ultricies, dui metus vulputate odio, id
        hendrerit lectus mauris a ex.
      </Text>
      <Text style={style.referralCode}>3XP4N510</Text>

      <Container>
        <Text>1</Text>
      </Container>
    </View>
  );
}

const Container = styled.View`
  background-color: ${(props) => props.theme.colors.SUCCESS};
`;

const styles = (theme: ThemeType) =>
  StyleSheet.create({
    body: {
      backgroundColor: theme.colors.BACKGROUND,
      justifyContent: 'space-evenly',
      alignItems: 'center',
      padding: 20,
    },
    title: {
      color: theme.colors.PRIMARY,
      fontSize: theme.typography.size.L,
      letterSpacing: theme.typography.letterSpacing.M,
      fontWeight: 'bold',
    },
    text: {
      color: theme.colors.TEXT,
      fontSize: theme.typography.size.M,
      letterSpacing: theme.typography.letterSpacing.S,
      textAlign: 'justify',
    },
    referralCode: {
      color: theme.colors.TEXT_SECONDARY,
      fontSize: theme.typography.size.S,
      letterSpacing: theme.typography.letterSpacing.L,
      fontWeight: 'bold',
    },
  });

export default TEST;

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import Touchable from '@components/buttons/Touchable';
import { ThemeType } from '@theme/ThemeType';

interface Type {
    onPressLeft?: () => void;
}

const HeaderComponent = ({ onPressLeft }: Type) => {
    return (
        <View>
            <Touchable onPress={onPressLeft}>
                <Text>pp</Text>
            </Touchable>
        </View>
    );
};

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

export default HeaderComponent;

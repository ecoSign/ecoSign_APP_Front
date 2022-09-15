import React from 'react';
import { ReactChild, ReactChildren } from 'react';
import { TouchableOpacity, View, ViewPropTypes } from 'react-native';

interface Type {
    children?: ReactChild | ReactChild[] | ReactChildren | ReactChildren[];
    // @ts-ignore
    style?: ViewPropTypes.style;
    onPress?: () => void;
}

const Touchable = ({ children, onPress, style }: Type) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={style}>{children}</View>
        </TouchableOpacity>
    );
};

export default Touchable;

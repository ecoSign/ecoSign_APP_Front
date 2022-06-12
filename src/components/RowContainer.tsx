import { ViewPropTypes } from 'react-native';
import React, { ReactChild, ReactChildren } from 'react';
import { View } from 'react-native';

interface Type {
    children?: ReactChild | ReactChild[] | ReactChildren | ReactChildren[];
    // @ts-ignore
    style?: ViewPropTypes.style;
}

const RowContainer = ({ children, style }: Type) => {
    return (
        <View style={{ flexDirection: 'row', alignItems: 'center', ...style }}>
            {children}
        </View>
    );
};

export default RowContainer;

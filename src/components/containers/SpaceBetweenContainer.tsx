import React, { ReactChild, ReactChildren } from 'react';
import { View, ViewPropTypes } from 'react-native';

interface Type {
    children?: ReactChild | ReactChild[] | ReactChildren | ReactChildren[];
    // @ts-ignore
    style?: ViewPropTypes.style;
}

const SpaceBetweenContainer = ({ children, style }: Type) => {
    return (
        <View
            style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                ...style,
            }}
        >
            {children}
        </View>
    );
};

export default SpaceBetweenContainer;

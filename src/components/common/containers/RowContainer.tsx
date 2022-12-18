import React, { ReactChild, ReactChildren } from 'react';
import { View, ViewPropTypes } from 'react-native';

interface Type {
  children?: ReactChild | ReactChild[] | ReactChildren | ReactChildren[];
  // @ts-ignore
  style?: ViewPropTypes.style;
}

export function RowContainer({ children, style }: Type) {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', ...style }}>
      {children}
    </View>
  );
}

export default RowContainer;

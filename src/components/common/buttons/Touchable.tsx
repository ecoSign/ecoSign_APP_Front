import React, { ReactChild, ReactChildren } from 'react';
import { StyleProp, TouchableOpacity, View, ViewStyle } from 'react-native';

interface Type {
  children?: ReactChild | ReactChild[] | ReactChildren | ReactChildren[];
  style?: StyleProp<ViewStyle>;
  onPress?: () => void;
}

function Touchable({ children, onPress, style }: Type) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={style}>{children}</View>
    </TouchableOpacity>
  );
}

export default Touchable;

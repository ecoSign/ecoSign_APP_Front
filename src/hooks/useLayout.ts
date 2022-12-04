import React, { useCallback, useState } from 'react';
import { LayoutChangeEvent, LayoutRectangle, Text } from 'react-native';

// 해당 뷰의 위치 및 크기를 가져올 수있다
//        <View style={style.body} onLayout={setLayout}>
// <Text>lay:{JSON.stringify(layout, null)}</Text>

export const useLayout = (): [
  LayoutRectangle,
  (e: LayoutChangeEvent) => void,
] => {
  const [layout, setLayout] = useState<LayoutRectangle>({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
  });
  const onLayout = useCallback((e: LayoutChangeEvent) => {
    // eslint-disable-next-line @typescript-eslint/no-shadow
    const { layout } = e.nativeEvent;
    setLayout(layout);
  }, []);
  return [layout, onLayout];
};

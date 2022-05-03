import { LayoutChangeEvent, LayoutRectangle } from 'react-native';
import { useState, useCallback } from 'react';

export const useLayout = (): [
    LayoutRectangle,
    (e: LayoutChangeEvent) => void
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

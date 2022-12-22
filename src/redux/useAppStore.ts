import { TypedUseSelectorHook, useSelector } from 'react-redux';

export type AppStoreType = ReturnType<any>;

const useAppStore: TypedUseSelectorHook<AppStoreType> = (
  selector,
  equalityFn,
) => useSelector(selector, equalityFn);

export default useAppStore;

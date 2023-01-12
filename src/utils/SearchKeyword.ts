import { addKeyword } from '@/redux/slices/keywordSlice';
import { store } from '@/redux/store';

export const SearchKeyword = (
  keyword: string,
  dispatch: typeof store.dispatch,
  navigation: { navigate: (arg0: any, arg1: { keyword: string }) => any },
) => {
  dispatch(addKeyword(keyword));
  navigation.navigate('SearchResults', { keyword });
};

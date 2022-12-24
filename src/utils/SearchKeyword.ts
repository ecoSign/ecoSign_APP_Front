import { addKeyword } from '@/redux/slices/keywordSlice';

export const SearchKeyword = (
  keyword: string,
  dispatch: any,
  navigation: { navigate: (arg0: any, arg1: { keyword: string }) => any },
) => {
  dispatch(addKeyword(keyword));
  navigation.navigate('SearchResults', { keyword });
};

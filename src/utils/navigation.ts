import { CommonActions, StackActions } from '@react-navigation/native';
import { MainTabNavigationProp } from '@screens/types';

// e.g. NestingNavigate('MemberMyPage', 'MemberAccountSetting')

export const nestingNavigate = (
  navigation: {
    navigate: (arg0: any, arg1: { screen: any; params: any }) => any;
  },
  path1: any,
  path2: any,
  params: any,
) => {
  return navigation.navigate(path1, { screen: path2, params });
};

export const resetNavigation = (
  navigation: MainTabNavigationProp,
  path: string,
) => {
  const reset = CommonActions.reset({
    index: 0,
    routes: [{ name: path }],
    // key: null,
  });
  navigation.dispatch(reset);
};

export const resetNavigationWithParams = (
  navigation: { dispatch: (arg0: CommonActions.Action) => void },
  path: any,
  params: any,
) => {
  const reset = CommonActions.reset({
    index: 0,
    routes: [{ name: path, params }],
    // key: null,
  });
  navigation.dispatch(reset);
};

export const resetNestedNavigation = (
  navigation: any,
  path1: string,
  path2: string,
  params: any,
) => {
  const reset = {
    ...CommonActions.reset({
      index: 0,
      routes: [
        {
          name: path1,
          state: {
            routes: [
              {
                name: path2,
                params,
              },
            ],
          },
        },
      ],
    }),
  };
  navigation.dispatch(reset);
};

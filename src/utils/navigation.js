import { CommonActions, StackActions } from '@react-navigation/native';

// e.g. NestingNavigate('MemberMyPage', 'MemberAccountSetting')
export const nestingNavigate = (navigation, path1, path2, params) => {
    navigation.navigate(path1, { screen: path2, params });
};

export const resetNavigation = (navigation, path) => {
    const reset = CommonActions.reset({
        index: 0,
        routes: [{ name: path }],
        // key: null,
    });
    navigation.dispatch(reset);
};

export const resetNavigationWithParams = (navigation, path, params) => {
    const reset = CommonActions.reset({
        index: 0,
        routes: [{ name: path, params }],
        // key: null,
    });
    navigation.dispatch(reset);
};

export const resetNestedNavigation = (navigation, path1, path2, params) => {
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

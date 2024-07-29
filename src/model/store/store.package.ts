import {
    configureStore,
    type ThunkMiddleware,
    type Tuple,
    type UnknownAction,
} from '@reduxjs/toolkit';

import { exampleApi } from '../api/example/example-api.ts';
import { reducer as exampleReducer } from '../store/slices/example/example.store.ts';

import { tabBarReducer } from './slices/tabBar/slice.ts';
import { userReducer } from './slices/user/slice.ts';

export type RootReducer = {
    example: ReturnType<typeof exampleReducer>;
    user: ReturnType<typeof userReducer>;
    tabBar: ReturnType<typeof tabBarReducer>;
};

type ExtraArguments = {
    exampleApi: typeof exampleApi;
};

export class Store {
    public instance: ReturnType<
        typeof configureStore<
            RootReducer,
            UnknownAction,
            Tuple<[ThunkMiddleware<RootReducer, UnknownAction, ExtraArguments>]>
        >
    >;

    public constructor() {
        this.instance = configureStore({
            devTools: true,
            reducer: {
                example: exampleReducer,
                user: userReducer,
                tabBar: tabBarReducer,
            },
            middleware: (getDefaultMiddleware) => {
                return getDefaultMiddleware({
                    thunk: {
                        extraArgument: this.extraArguments,
                    },
                });
            },
        });
    }

    public get extraArguments(): ExtraArguments {
        return {
            exampleApi,
        };
    }
}

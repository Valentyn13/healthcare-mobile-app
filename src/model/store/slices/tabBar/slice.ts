import { createSlice } from '@reduxjs/toolkit';

import { TabBarStateType } from './types';

const initialState: TabBarStateType = {
    isVisible: true,
};

const slice = createSlice({
    name: 'tabBar',
    initialState,
    reducers: {
        toggleTabBar: (state) => {
            state.isVisible = !state.isVisible;
        },
        visibleTabBar: (state) => {
            state.isVisible = true;
        },
    },
});

export const tabBarActions = slice.actions;
export const tabBarReducer = slice.reducer;

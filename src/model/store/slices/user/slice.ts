import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { User, UserSchema } from './types.ts';

const initialState: UserSchema = {
    isLoading: false,
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setAuthData: (state, action: PayloadAction<User>) => {
            state.authData = action.payload;
            state.isLoading = false;
        },
        logout: (state) => {
            state.authData = undefined;
        },
    },
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;

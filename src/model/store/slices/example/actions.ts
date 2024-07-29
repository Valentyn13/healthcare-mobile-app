import { createAsyncThunk } from '@reduxjs/toolkit';

import { AsyncThunkConfig } from '../../../../shared/index.ts';

import { name as sliceName } from './slice.ts';

const getExampleData = createAsyncThunk<
    {
        userId: number;
        id: number;
        title: string;
        completed: boolean;
    },
    void,
    AsyncThunkConfig
>(`${sliceName}/get-data`, async (_, { extra, rejectWithValue }) => {
    try {
        const { exampleApi } = extra;
        const a = await exampleApi.getPositions();

        return a;
    } catch (error) {
        return rejectWithValue(
            `Error while fetching data ${JSON.stringify(error)}`,
        );
    }
});

export { getExampleData };

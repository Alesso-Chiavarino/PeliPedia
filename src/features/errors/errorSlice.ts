import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { type ErrorState } from '../../types/Error';

const initialState: ErrorState = {
    message: '',
};

export const errorSlice = createSlice({
    name: 'error',
    initialState,
    reducers: {
        setErrorAction: (state, action: PayloadAction<string>) => {
            state.message = action.payload;
        },
        clearErrorAction: (state) => {
            state.message = '';
        },
    },
});

export const { setErrorAction, clearErrorAction } = errorSlice.actions;

export default errorSlice.reducer;

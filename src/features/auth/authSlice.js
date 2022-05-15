import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { loginService } from '../../services';

const loginHelper = createAsyncThunk(
    'auth/loginHelper',
    async ({username, password} , { rejectWithValue }) => {
        try {
            const response = await loginService(username, password);
            console.log(response)
            return response;
        } catch (error) {
            console.log(error)
            return rejectWithValue(error.response.data);
        }
    },
);

const initialState = {
    token: '' || JSON.parse(localStorage.getItem('ti_socials_token')),
    currentUser: null || JSON.parse(localStorage.getItem('ti_socials_user')),
    isAuthLoading: false,
    authError: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: (state) => {
            localStorage.removeItem('ti_socials_user');
            state.token = '';
            state.currentUser = null;
        },
    },
    extraReducers: {
        [loginHelper.pending]: (state) => {
            state.isAuthLoading = true;
        },

        [loginHelper.fulfilled]: (state, { payload }) => {
            state.currentUser = payload.foundUser;
            state.token = payload.encodedToken;
            state.isAuthLoading = false;
            state.authError = null;
            localStorage.setItem('ti_socials_token', JSON.stringify(payload.encodedToken));
            localStorage.setItem('ti_socials_user', JSON.stringify(payload.foundUser));
        },

        [loginHelper.rejected]: (state, { payload }) => {
            state.isAuthLoading = false;
            state.authError = payload.errors;
        },
    },
});

export { loginHelper };
export const { logout } = authSlice.actions;
export const authReducer = authSlice.reducer;

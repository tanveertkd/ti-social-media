import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { loginService, signUpService } from '../../services';

import toast from 'react-hot-toast';

const loginHelper = createAsyncThunk(
    'auth/loginHelper',
    async ({ username, password }, { rejectWithValue }) => {
        try {
            const response = await loginService(username, password);
            toast.success('Welcome!');
            return response;
        } catch (error) {
            if(error.response.status === 404) {
                toast.error('Could not find username.')
            }
            return rejectWithValue(error.response.data);
        }
    },
);

const signupHelper = createAsyncThunk(
    'auth/signupHelper',
    async ( userInput , { rejectWithValue }) => {
        try {
            const response = await signUpService(userInput);
            return response;
        } catch (error) {
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
            localStorage.removeItem('ti_socials_token')
            localStorage.removeItem('ti_socials_user');
            state.token = '';
            state.currentUser = null;
        },
    },
    extraReducers: {
        // Login
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

        // Signup
        [signupHelper.pending]: (state) => {
            state.isAuthLoading = true;
        },
        [signupHelper.fulfilled]: (state, { payload }) => {
            state.currentUser = payload.createdUser;
            state.token = payload.encodedToken;
            state.isAuthLoading = false;
            state.authError = null;
            localStorage.setItem('ti_socials_token', JSON.stringify(payload.encodedToken));
            localStorage.setItem('ti_socials_user', JSON.stringify(payload.createdUser));
        },
        [signupHelper.rejected]: (state, { payload }) => {
            state.isAuthLoading = false;
            state.authError = payload.errors;
        },
    },
});

export { loginHelper, signupHelper };
export const { logout } = authSlice.actions;
export const authReducer = authSlice.reducer;

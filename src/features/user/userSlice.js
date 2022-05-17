import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
    editUserService,
    getAllUsersService,
    getPostByUsername,
    getUserService,
} from '../../services';

const getAllUsersHelper = createAsyncThunk(
    'users/getAllUsersHelper',
    async (_, { rejectWithValue }) => {
        try {
            const response = await getAllUsersService();
            console.log('all users', response);
            return response;
        } catch (error) {
            console.log(error);
            return rejectWithValue(error.response.data);
        }
    },
);

const getUserHelper = createAsyncThunk(
    'users/getUserHelper',
    async ({ username }, { rejectWithValue }) => {
        try {
            const response = await getUserService(username);
            console.log('getUserHelper', response);
            return response;
        } catch (error) {
            console.log('getUserHelper', error);
            return rejectWithValue(error.response.data);
        }
    },
);

const editUserHelper = createAsyncThunk(
    'users/editUserHelper',
    async ({ userInput, token }, { rejectWithValue }) => {
        try {
            const response = await editUserService(userInput, token);
            console.log('users/editUserHelper', response);
            return response;
        } catch (error) {
            console.log('users/editUserHelper', error);
            return rejectWithValue(error.response.data);
        }
    },
);

const getUsersPost = createAsyncThunk(
    'users/getUsersPost',
    async (username, { rejectWithValue }) => {
        try {
            const response = await getPostByUsername(username);
            console.log(response);
            return response;
        } catch (error) {
            console.log('getUserHelper', error);
            return rejectWithValue(error.response.data);
        }
    },
);

const initialState = {
    users: [],
    userPost: [],
    isLoading: false,
    error: null,
};

const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers: {
        // All users
        [getAllUsersHelper.pending]: (state) => {
            state.isLoading = true;
        },
        [getAllUsersHelper.fulfilled]: (state, { payload }) => {
            console.log('data payload', payload);
            state.users = payload;
            state.isLoading = false;
        },
        [getAllUsersHelper.rejected]: (state, { payload }) => {
            state.isLoading = false;
            state.error = payload.errors;
        },

        // User posts
        [getUsersPost.pending]: (state) => {
            state.isLoading = true;
        },
        [getUsersPost.fulfilled]: (state, { payload }) => {
            state.userPost = payload.posts;
        },
        [getUsersPost.rejected]: (state, { payload }) => {
            state.isLoading = false;
            state.error = payload.errors;
        },

        // Edit user profile
        [editUserHelper.pending]: (state) => {
            console.log('editUserHelper pending');
            state.isLoading = true;
        },
        [editUserHelper.fulfilled]: (state, { payload }) => {
            console.log('editUserHelper fulfilled');
            state.users = state.users.map((user) =>
                user.username === payload.username ? payload : user,
            );
            state.isLoading = false;
            state.error = null;
        },
        [editUserHelper.rejected]: (state, { payload }) => {
            console.log('editUserHelper rejected');
            state.error = payload.data.errors;
        },
    },
});

export { getAllUsersHelper, getUsersPost, editUserHelper };
export const userReducer = userSlice.reducer;

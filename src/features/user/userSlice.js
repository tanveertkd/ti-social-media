import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getAllUsersService, getPostByUsername, getUserService } from '../../services';

const getAllUsersHelper = createAsyncThunk(
    'users/getAllUsersHelper',
    async (_, { rejectWithValue }) => {
        try {
            const response = await getAllUsersService();
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
            state.users = payload;
            state.isLoading = false;
        },
        [getAllUsersHelper.rejected]: (state, { payload }) => {
            state.isLoading = false;
            state.error = payload.errors;
        },

        // User posts
        [getUsersPost.fulfilled]: (state, { payload }) => {
            state.userPost = payload.posts;
        },
    },
});

export { getAllUsersHelper, getUsersPost };
export const userReducer = userSlice.reducer;

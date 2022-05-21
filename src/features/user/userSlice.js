import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
    editUserService,
    followService,
    getAllUsersService,
    getPostByUsername,
    getUserService,
    unfollowService,
} from '../../services';

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
            return response;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    },
);

const followUserHelper = createAsyncThunk(
    'users/followUserHelper',
    async ({ followUserId, token }, { rejectWithValue }) => {
        try {
            const response = await followService(followUserId, token);
            return response;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    },
);

const unfollowUserHelper = createAsyncThunk(
    'users/unfollowUserHelper',
    async ({ followUserId, token }, { rejectWithValue }) => {
        try {
            const response = await unfollowService(followUserId, token);
            return response;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    },
);

const initialState = {
    users: [],
    userPost: [],
    isLoading: false,
    error: null,
    searchedUser: '',
    searchUserResult: [],
};

const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        setSearchedUser: (state, { payload }) => {
            state.searchedUser = payload;
            state.searchUserResult = state.users?.filter(
                (user) =>
                    user.username.toLowerCase().includes(state.searchedUser) ||
                    user.firstName.toLowerCase().includes(state.searchedUser) ||
                    user.lastName.toLowerCase().includes(state.searchedUser),
            );
        },

        resetSearch: (state) => {
            state.searchedUser = '';
            state.searchUserResult = [];
        },
    },
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
        [getUsersPost.pending]: (state) => {
            state.isLoading = true;
        },
        [getUsersPost.fulfilled]: (state, { payload }) => {
            state.userPost = payload;
            state.isLoading = false;
            state.error = null;
        },
        [getUsersPost.rejected]: (state, { payload }) => {
            state.isLoading = false;
            state.error = payload.errors;
        },

        // Edit user profile
        [editUserHelper.pending]: (state) => {
            state.isLoading = true;
        },
        [editUserHelper.fulfilled]: (state, { payload }) => {
            state.users = state.users.map((user) =>
                user.username === payload.username ? payload : user,
            );
            state.isLoading = false;
            state.error = null;
        },
        [editUserHelper.rejected]: (state, { payload }) => {
            state.isLoading = false;
            state.error = payload.data.errors;
        },

        // Follow users
        [followUserHelper.pending]: (state) => {
            state.isLoading = true;
        },
        [followUserHelper.fulfilled]: (state, { payload }) => {
            state.isLoading = false;
            state.users = state.users.map((user) =>
                user.username === payload.followUser.username ? payload.followUser : user,
            );
            state.users = state.users.map((user) =>
                user.username === payload.user.username ? payload.user : user,
            );
            state.error = null;
        },
        [followUserHelper.rejected]: (state, { payload }) => {
            state.error = payload;
        },

        // Unfollow users
        [unfollowUserHelper.pending]: (state) => {
            state.isLoading = true;
        },
        [unfollowUserHelper.fulfilled]: (state, { payload }) => {
            state.isLoading = false;
            state.users = state.users.map((user) =>
                user.username === payload.followUser.username ? payload.followUser : user,
            );
            state.users = state.users.map((user) =>
                user.username === payload.user.username ? payload.user : user,
            );
            state.error = null;
        },
        [unfollowUserHelper.rejected]: (state, { payload }) => {
            state.error = payload;
        },
    },
});

export { getAllUsersHelper, getUsersPost, editUserHelper, followUserHelper, unfollowUserHelper };
export const { setSearchedUser, resetSearch } = userSlice.actions;
export const userReducer = userSlice.reducer;

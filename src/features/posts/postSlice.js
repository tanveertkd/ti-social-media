import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { createNewPostService, getAllPostsService } from '../../services';

const getAllPostsHelper = createAsyncThunk(
    'posts/getAllPostsHelper',
    async (_, { rejectWithValue }) => {
        try {
            const response = await getAllPostsService();
            return response;
        } catch (error) {
            console.log(error);
            return rejectWithValue(error.response.data);
        }
    },
);

const createNewPostHelper = createAsyncThunk(
    'posts/createNewPostHelper',
    async ({ userInput, token }, { rejectWithValue }) => {
        console.log('posts/createNewPostHelper', userInput)
        try {
            const response = await createNewPostService(userInput, token);
            console.log(response);
            return response;
        } catch (error) {
            console.log(error);
            return rejectWithValue(error.response.data);
        }
    },
);

const initialState = {
    posts: [],
    isLoading: false,
    error: null,
};

const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {},
    extraReducers: {
        // All posts
        [getAllPostsHelper.pending]: (state) => {
            state.isLoading = true;
        },
        [getAllPostsHelper.fulfilled]: (state, { payload }) => {
            state.posts = payload;
            state.isLoading = false;
            state.error = null;
        },
        [getAllPostsHelper.rejected]: (state, { payload }) => {
            state.isLoading = false;
            state.error = payload.errors;
        },

        // New Post
        [createNewPostHelper.pending]: (state) => {
            state.isLoading = true;
        },
        [createNewPostHelper.fulfilled]: (state, { payload }) => {
            state.isLoading = false;
            state.posts = payload;
            state.error = null;
        },
        [createNewPostHelper.rejected]: (state, { payload }) => {
            state.isLoading = false;
            state.error = payload.errors;
        },
    },
});

export { getAllPostsHelper, createNewPostHelper };
export const postReducer = postSlice.reducer;

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getAllPostsService } from '../../services';

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
    },
});

export { getAllPostsHelper };
export const postReducer = postSlice.reducer;
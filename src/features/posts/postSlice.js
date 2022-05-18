import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
    createNewPostService,
    getAllPostsService,
    likePostService,
    dislikePostService,
    getPostCommentsService,
    addCommentService,
    editPostService,
    deletePostService,
} from '../../services';

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
        try {
            const response = await createNewPostService(userInput, token);
            return response;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    },
);

const editPostHelper = createAsyncThunk(
    'posts/editPostHelper',
    async ({ postId, postContent, token }, { rejectWithValue }) => {
        console.log('data', postContent)
        try {
            const response = await editPostService(postId, postContent, token);
            return response;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    },
);

const deletePostHelper = createAsyncThunk(
    'posts/deletePostHelper',
    async({postId, token}, {rejectWithValue}) => {
        try{
            const response = await deletePostService(postId, token);
            return response;
        }catch(error){
            console.log(error)
            return rejectWithValue(error.response.data);
        }
    }
)

const likePostHelper = createAsyncThunk(
    'posts/likePostHelper',
    async ({ postId, token }, { rejectWithValue }) => {
        console.log('called');
        try {
            const response = await likePostService(postId, token);
            return response;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    },
);

const dislikePostHelper = createAsyncThunk(
    'posts/likePostHelper',
    async ({ postId, token }, { rejectWithValue }) => {
        try {
            const response = await dislikePostService(postId, token);
            return response;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    },
);

const getPostCommentsHelper = createAsyncThunk(
    'posts/getPostCommentsHelper',
    async (postId, { rejectWithValue }) => {
        try {
            const response = await getPostCommentsService(postId);
            return response;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    },
);

const addCommentsHelper = createAsyncThunk(
    'posts/getPostCommentsHelper',
    async ({ postId, userInput, token }, { rejectWithValue }) => {
        try {
            const response = await addCommentService(postId, userInput, token);
            return response;
        } catch (error) {
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

        // Edit post
        [editPostHelper.pending]: (state) => {
            state.isLoading = true;
        },
        [editPostHelper.fulfilled]: (state, { payload }) => {
            state.posts = payload;
            state.isLoading = false;
            state.error = null;
        },
        [editPostHelper.rejected]: (state, { payload }) => {
            state.isLoading = false;
            state.error = payload.errors;
        },

        // Delete post
        [deletePostHelper.pending]: (state) => {
            state.isLoading = true;
        },
        [deletePostHelper.fulfilled]: (state, { payload }) => {
            state.posts = payload;
            state.isLoading = false;
            state.error = null;
        },
        [deletePostHelper.rejected]: (state, { payload }) => {
            state.isLoading = false;
            state.error = payload.errors;
        },

        // Like posts
        [likePostHelper.pending]: (state) => {
            state.isLoading = true;
        },
        [likePostHelper.fulfilled]: (state, { payload }) => {
            state.posts = payload;
            state.isLoading = false;
            state.error = null;
        },
        [likePostHelper.rejected]: (state, { payload }) => {
            state.isLoading = false;
            state.error = payload.errors;
        },

        // Dislike posts
        [dislikePostHelper.pending]: (state) => {
            state.isLoading = true;
        },
        [dislikePostHelper.fulfilled]: (state, { payload }) => {
            state.posts = payload;
            state.isLoading = false;
            state.error = null;
        },
        [dislikePostHelper.rejected]: (state, { payload }) => {
            state.isLoading = false;
            state.error = payload.errors;
        },

        // post comments
        [addCommentsHelper.pending]: (state) => {
            state.isLoading = true;
        },
        [addCommentsHelper.fulfilled]: (state, { payload }) => {
            state.posts = payload;
            state.isLoading = false;
            state.error = null;
        },
        [addCommentsHelper.rejected]: (state, { payload }) => {
            state.isLoading = false;
            state.error = payload;
        },
    },
});

export {
    getAllPostsHelper,
    createNewPostHelper,
    editPostHelper,
    deletePostHelper,
    likePostHelper,
    dislikePostHelper,
    addCommentsHelper,
};
export const postReducer = postSlice.reducer;

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
import {
    bookmarkPostService,
    getAllBookmarksService,
    removeBookmarkService,
} from '../../services/postServices';

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
        console.log('data', postContent);
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
    async ({ postId, token }, { rejectWithValue }) => {
        try {
            const response = await deletePostService(postId, token);
            return response;
        } catch (error) {
            console.log(error);
            return rejectWithValue(error.response.data);
        }
    },
);

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
        console.log(postId, userInput, token)
        try {
            const response = await addCommentService(postId, userInput, token);
            return response;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    },
);

const getAllBookmarksHelper = createAsyncThunk(
    'posts/getAllBookmarksHelper',
    async ({ token }, { rejectWithValue }) => {
        try {
            const response = await getAllBookmarksService(token);
            console.log('helper', response);
            return response;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    },
);

const addBookmarkHelper = createAsyncThunk(
    'posts/addBookmarkHelper',
    async ({ postId, token }, { rejectWithValue }) => {
        try {
            const response = await bookmarkPostService(postId, token);
            return response;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    },
);

const removeBookmarkHelper = createAsyncThunk(
    'posts/removeBookmarkHelper',
    async ({ postId, token }, { rejectWithValue }) => {
        try {
            const response = await removeBookmarkService(postId, token);
            return response;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    },
);

const initialState = {
    posts: [],
    bookmarkedPosts: [],
    isLoading: false,
    error: null,
    sortBy: 'Latest',
};

const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {
        setSortBy: (state, { payload }) => {
            state.sortBy = payload;
        },
    },
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

        // Bookmarks
        [getAllBookmarksHelper.pending]: (state) => {
            state.isLoading = true;
        },
        [getAllBookmarksHelper.fulfilled]: (state, { payload }) => {
            state.bookmarkedPosts = payload;
            state.isLoading = false;
            state.error = null;
        },
        [getAllBookmarksHelper.rejected]: (state, { payload }) => {
            state.isLoading = false;
            state.error = payload;
        },
        [addBookmarkHelper.pending]: (state) => {
            state.isLoading = true;
        },
        [addBookmarkHelper.fulfilled]: (state, { payload }) => {
            state.bookmarkedPosts = payload;
            state.isLoading = false;
            state.error = null;
        },
        [addBookmarkHelper.rejected]: (state, { payload }) => {
            state.isLoading = false;
            state.error = payload;
        },
        // Remove Bookmark
        [removeBookmarkHelper.pending]: (state) => {
            state.isLoading = true;
        },
        [removeBookmarkHelper.fulfilled]: (state, { payload }) => {
            state.bookmarkedPosts = payload;
            state.isLoading = false;
            state.error = null;
        },
        [removeBookmarkHelper.rejected]: (state, { payload }) => {
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
    getAllBookmarksHelper,
    addBookmarkHelper,
    removeBookmarkHelper,
};

export const { setSortBy } = postSlice.actions;
export const postReducer = postSlice.reducer;

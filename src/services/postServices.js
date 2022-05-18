import axios from 'axios';
import toast from 'react-hot-toast';

const getAllPostsService = async () => {
    try {
        const response = await axios.get('/api/posts');
        if (response.status === 200 || response.status === 201) {
            return response.data.posts;
        }
    } catch (error) {
        toast.error('Failed to load posts.');
        console.log("Couldn't get posts.", error);
    }
};

const getPostByUsername = async (username) => {
    try {
        const response = await axios.get(`/api/posts/user/${username}`);
        if (response.status === 200 || response.status === 201) {
            return response.data.posts;
        }
    } catch (error) {
        console.log("Couldn't get user posts.", error);
    }
};

const createNewPostService = async (postData, encodedToken) => {
    try {
        const response = await axios.post(
            '/api/posts',
            {
                postData,
            },
            {
                headers: {
                    authorization: encodedToken,
                },
            },
        );
        if (response.status === 200 || response.status === 201) {
            toast.success('Created new post!');
            return response.data.posts;
        }
    } catch (error) {
        toast.error('Failed to create new post.');
        console.log("Couldn't create new post.", error);
    }
};

const likePostService = async (postId, encodedToken) => {
    try {
        const response = await axios.post(
            `/api/posts/like/${postId}`,
            {},
            {
                headers: {
                    authorization: encodedToken,
                },
            },
        );
        if (response.status === 200 || response.status === 201) {
            toast.success('Liked post');
            return response.data.posts;
        }
    } catch (error) {
        toast.error("Couldn't like the post");
        console.log("Couldn't like the post.", error);
    }
};

const dislikePostService = async (postId, encodedToken) => {
    try {
        const response = await axios.post(
            `/api/posts/dislike/${postId}`,
            {},
            {
                headers: {
                    authorization: encodedToken,
                },
            },
        );
        if (response.status === 200 || response.status === 201) {
            toast.success('Disliked post');
            return response.data.posts;
        }
    } catch (error) {
        toast.error("Couldn't dislike the post");
        console.log("Couldn't dislike the post.", error);
    }
};

const getPostCommentsService = async (postId) => {
    try{
        const response = await axios.get(`/api/comments/${postId}`);
        console.log(response);
        if(response.status === 200 || response.status === 201){
            return response.data.comments;
        }
    }catch(error){
        toast.error('Failed to load comments.');
        console.log("Failed to fetch comments", error);
    }
}

const addCommentService = async (postId, commentData, encodedToken) => {
    try{
        const response = await axios.post(`/api/comments/add/${postId}`, 
            {
                commentData
            },
            {
                headers: {
                    authorization: encodedToken
                }
            }
        )
        if(response.status === 200 || response.status === 201){
            toast.success('Added comment!')
            return response.data.posts;
        }
    }catch(error) {
        toast.error('Failed to add comment.');
        console.log("Failed to add comment", error);
    }
}

export {
    getAllPostsService,
    getPostByUsername,
    createNewPostService,
    likePostService,
    dislikePostService,
    getPostCommentsService,
    addCommentService
};

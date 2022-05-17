import axios from 'axios';

const getAllPosts = async () => {
    try {
        const response = await axios.get('/api/posts');
        if (response.status === 200 || response.status === 201) {
            console.log(response);
            return response.data;
        }
    } catch (error) {
        console.log("Couldn't get posts.", error);
    }
};

const getPostByUsername = async (username) => {
    try {
        const response = await axios.get(`/api/posts/user/${username}`);
        if (response.status === 200 || response.status === 201) {
            return response.data;
        }
    } catch (error) {
        console.log("Couldn't get user posts.", error);
    }
};

// const createNewPostService = async ()

export { getAllPosts, getPostByUsername };

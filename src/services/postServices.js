import axios from 'axios';
import toast from 'react-hot-toast';

const getAllPostsService = async () => {
    try {
        const response = await axios.get('/api/posts');
        if (response.status === 200 || response.status === 201) {
            return response.data.posts;
        }
    } catch (error) {
        toast.error('Failed to load posts.')
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

const createNewPostService = async (post, encodedToken) => {
    try{
        const response = await axios.post('/api/posts',
            {
                post
            },
            {
                headers: {
                    authorization: encodedToken,
                }
            }
        )
        if(response.status === 200 || response.status === 201){
            toast.success('Created new post!');
            return response.data.posts;
        }
    }catch(error){
        toast.error('Failed to create new post.');
        console.log("Couldn't create new post.", error);
    }
}

export { getAllPostsService, getPostByUsername, createNewPostService };

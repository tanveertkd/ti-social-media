import toast from 'react-hot-toast';
import axios from 'axios';

const getAllUsersService = async () => {
    try {
        const response = await axios.get('/api/users');
        // console.log('service', response)
        if (response.status === 200 || response.status === 201) {
            return response.data.users;
        }
    } catch (error) {
        console.log("Couldn't fetch users.", error);
    }
};

const getUserService = async (user) => {
    try {
        const response = await axios.get(`/api/users/${user}`);
        if (response.status === 200) {
            return response.data;
        }
    } catch (error) {
        toast.error("Couldn't fetch user.");
        console.log("Couldn't fetch user.");
    }
};

const editUserService = async (userData, encodedToken) => {
    try {
        const response = await axios.post(
            '/api/users/edit',
            {
                userData,
            },
            {
                headers: {
                    authorization: encodedToken,
                },
            },
        );
        if (response.status === 200 || response.status === 201) {
            toast.success('Edit successfull!');
            return response.data.user;
        }
    } catch (error) {
        console.log("Couldn't edit user.", error);
    }
};

const followService = async (followUserId, encodedToken) => {
    try {
        const response = await axios.post(
            `/api/users/follow/${followUserId}`,
            {},
            {
                headers: {
                    authorization: encodedToken,
                },
            },
        );
        if (response.status === 200 || response.status === 201) {
            toast.success('Followed user!');
            return response.data;
        }
    } catch (error) {
        toast.error("Couldn't follow user.")
        console.log("Couldn't follow user.", error);
    }
};

const unfollowService = async (followUserId, encodedToken) => {
    try{
        const response = await axios.post(`/api/users/unfollow/${followUserId}`,
            {},
            {
                headers: {
                    authorization: encodedToken,
                }
            }
        )
        if(response.status === 200 || response.status === 201){
            toast.success('Unfollowed user.');
            return response.data;
        }
    }catch(error){
        toast.error("Couldn't unfollow user.")
        console.log("Couldn't unfollow user.", error);
    }
}

export { getAllUsersService, getUserService, editUserService, followService, unfollowService };

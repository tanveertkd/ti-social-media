import toast from 'react-hot-toast';
import axios from 'axios';

const getAllUsersService = async () => {
    try {
        const response = await axios.get('/api/users');
        // console.log('service', response)
        if (response.status === 200 || response.status === 201) {
            return response.data;
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

const editUserService = async (encodedToken) => {
    try {
        const response = await axios.post('/api/users/edit', {
            authorization: encodedToken,
        });
        if (response.status === 200 || response.status === 201) return response;
    } catch (error) {
        console.log("Couldn't edit user.");
    }
};

export { getAllUsersService, getUserService, editUserService };

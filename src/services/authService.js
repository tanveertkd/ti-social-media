import axios from "axios";
import toast from "react-hot-toast";

const loginService = async (username, password) => {
    const response = await axios.post("/api/auth/login", {
        username,
        password,
    });
    return response.data;
};

const signUpService = async (userInput) => {
    const { firstName, lastName, email, username, password, avatarUrl, bio } = userInput;
    
    try{
        const response = await axios.post('/api/auth/signup', {
            firstName,
            lastName,
            email,
            username,
            password,
            avatarUrl,
            bio
        });
        if(response.status === 201) {
            toast.success('Welcome to TI!');
            return response.data;
        }
    } catch(error) {
        if(error.response.status === 422) {
            toast.error('Sorry, this username is already taken.');
        }
        console.log("Could not create user.", error);
    }
};

export { loginService, signUpService}
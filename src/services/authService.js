import axios from "axios";

const loginService = async (username, password) => {
    const response = await axios.post("/api/auth/login", {
        username,
        password,
    });
    return response.data;
};

const signUpService = async (userInput) => {
    const { firstName, lastName, email, password } = userInput;
    
    try{
        const response = await axios.post('/api/auth/signup', {
            firstName,
            lastName,
            email,
            password,
        });
        if(response.status === 201)
            return response.data;
    } catch(error) {
        console.log("Couldn't create user.", error);
    }
};

export { loginService, signUpService}
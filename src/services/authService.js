import axios from "axios";

const loginService = async (username, password) => {
    const response = await axios.post("/api/auth/login", {
        username,
        password,
    });
    console.log("service response", response);
    return response.data;
};

export { loginService }
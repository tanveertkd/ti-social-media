import { useAuthContext } from "../contexts/userAuthContext";

const useAuth = () => {
    const {newUser, setNewUser} = useAuthContext();    
    const toggleUser = () => (!newUser ? setNewUser(true) : setNewUser(false));
    return { newUser, toggleUser };
};

export { useAuth };

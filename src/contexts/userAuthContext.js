import { createContext, useContext, useState } from "react";

const userAuthContext = createContext();

const UserAuthProvider = ({ children }) => {
  const [newUser, setNewUser] = useState(false);
  return (
    <userAuthContext.Provider value={{ newUser, setNewUser }}>
      {children}
    </userAuthContext.Provider>
  );
};

const useAuthContext = () => useContext(userAuthContext)

export { useAuthContext, UserAuthProvider };
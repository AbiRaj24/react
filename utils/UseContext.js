import { createContext } from "react";

const UserContext=createContext({
    loggedUser:"default User"
});

export default UserContext;
import { createContext, useContext, useState } from "react";

// 1. Create the context
const UserContext = React.createContext();

// 2. Create the higher component
export function UserProvider({children, username})
{
    const [currentUser, setCurrentUser] = useState(username); 

    return (
        <UserContext.Provider value={{currentUser, setCurrentUser }}>
            {children}
        </UserContext.Provider>
    );
};

//3 Export
export function useUserContext()
{
    return useContext(UserContext);
}
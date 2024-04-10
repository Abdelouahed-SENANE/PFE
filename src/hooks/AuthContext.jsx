import { createContext, useContext, useEffect, useMemo, useState } from "react";
import instance from "../config/ConfigAxios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    // State to hold the authentication token
    const [token, setToken_] = useState(sessionStorage.getItem("token"));
    const [user, setUser_] = useState(
        JSON.parse(sessionStorage.getItem("user") || null)
    );

    // Function to set the authentication token
    const setToken = (newToken) => {
        setToken_(newToken);
    };
    // set user to local storage
    const setUser = (user) => {
        if (user) {
            sessionStorage.setItem("user", JSON.stringify(user));
        } else {
            sessionStorage.removeItem("user");
        }
        setUser_(user);
    };
    useEffect(() => {
        if (token) {
            instance.defaults.headers.common["Authorization"] =
                "Bearer " + token;
            sessionStorage.setItem("token", token);
        } else {
            delete instance.defaults.headers.common["Authorization"];
            sessionStorage.removeItem("token");
        }
    }, [token]);

    const contextValue = useMemo(
        () => ({
            token,
            setToken,
            user,
            setUser,
        }),
        [token]
    );

    return (
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};

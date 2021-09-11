import React, { useState } from "react";

const AuthContext = React.createContext({
    token: "",
    isLoggedIn: false,
    loginHandler: (token) => {},
    logoutHandler: () => {},
});

export const AuthContextProvider = (props) => {
    const [token, setToken] = useState(null);

    const isUserLoggedIn = !!token;

    const loginHandler = (token) => {
        setToken(token);
    };

    const logoutHandler = () => {
        setToken(null);
    };

    const contextValue = {
        token: token,
        isLoggedIn: isUserLoggedIn,
        loginHandler: loginHandler,
        logoutHandler: logoutHandler,
    };
    return (
        <AuthContext.Provider value={contextValue}>
            {props.children}
        </AuthContext.Provider>
    );
};

export default AuthContext;

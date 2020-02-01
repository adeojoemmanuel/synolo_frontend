import React, { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";

/**
 * Helpers
 */
import { getJwt, removeJwt } from "../jwt.helpers";
import { setAuthToken } from "../header.helpers";

export const AuthContext = React.createContext();

const AuthProvider = ({ children }) => {
    const prevAuth = getJwt();

    const [authenticated, setAuthenticated] = useState(prevAuth);


    useEffect(() => {
        const getAuth = async () => {
            try {
                const jwt = getJwt();

                setAuthToken(jwt);

                console.log("hello");

                // decode token and get user info and experation
                const decoded = jwt_decode(jwt);

                //   auto logout if expired
                autoLogOut(decoded);
            } catch (error) {

                removeJwt();
                setAuthenticated(false);
            }
        };

        getAuth();

    }, [authenticated]);


    const autoLogOut = decoded => {
        // check for expired token
        const currentTime = Date.now() / 1000;
        if (decoded.exp < currentTime) {
            // remove jwt
            removeJwt();
            // Logout user
            setAuthToken(false);
            // clear current user
            setAuthenticated(false);
        }
    };

    const defaultContext = {
        authenticated,
        setAuthenticated
    };
    return (
        <AuthContext.Provider value={defaultContext}>
            {children}
        </AuthContext.Provider>
    );
};

const AuthConsumer = AuthContext.Consumer;

export  {AuthProvider, AuthConsumer};

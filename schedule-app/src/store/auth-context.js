import React, { useState, useEffect } from "react";

const AuthContext = React.createContext({
    isLoggedIn: false,
    onLogout: () => {},
    onLogin: (email,password) => {}

});


export const AuthContextProvider = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(()=> {
        const storeduserLoggedIn = localStorage.getItem('isLoggedIn');
        if(storeduserLoggedIn === '1') {
            setIsLoggedIn(true);
        }
    }, []);

    const loginHandle = ( data ) => {
        localStorage.setItem('isLoggedIn', '1');
        setIsLoggedIn(true);
    };
    
    const logoutHandle = () => {
        localStorage.removeItem('isLoggedIn');
        setIsLoggedIn(false);
    };

    return (<AuthContext.Provider value = {{
        isLoggedIn: isLoggedIn,
        onLogout: logoutHandle,
        onLogin: loginHandle
    }}>{props.children}</AuthContext.Provider>)
}

export default AuthContext;
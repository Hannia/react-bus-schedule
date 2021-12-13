import React, { useState, useEffect } from "react";

const AuthContext = React.createContext({
    isLoggedIn: false,
    showLogin: false,
    onLogout: () => {},
    onLogin: (email,password) => {},
    onDropdownLogin: () => {}

});


export const AuthContextProvider = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [showLogin, setShowLogin] = useState(false);

    useEffect(()=> {
        const storeduserLoggedIn = localStorage.getItem('isLoggedIn');
        if(storeduserLoggedIn === '1') {
            setIsLoggedIn(true);
        }
    }, []);

    const dropdownLogin = () => {
        if (showLogin){
            setShowLogin(false);
            return;
        }  
        setShowLogin(true);
    }

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
        showLogin: showLogin,
        onLogout: logoutHandle,
        onLogin: loginHandle,
        onDropdownLogin: dropdownLogin
    }}>{props.children}</AuthContext.Provider>)
}

export default AuthContext;
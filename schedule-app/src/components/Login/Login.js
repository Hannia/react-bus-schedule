import React, { useState } from "react";
import Button from '../UI/Button';

const Login = props => {

    const [userEmail, setUserEmail] = useState();
    const [userPassword, setUserPassword] = useState();

    const userEmailChangeHandle = (event) => {
        setUserEmail(event.target.value);
    }

    const userPasswordChangeHandle = (event) => {
        setUserPassword(event.target.value);
    }

    const summitHandle = (event) => {
        event.preventDefault();
        props.onLogin({
            userEmail: userEmail,
            userPassword: userPassword
        });
    }


    return (
        <form onSubmit= { summitHandle }>
            <input type="email" onChange= { userEmailChangeHandle }/>
            <input type="password" onChange= { userPasswordChangeHandle }/>
            <Button type="submit">Login</Button>
        </form>
    );
}

export default Login;
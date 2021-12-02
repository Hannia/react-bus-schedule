import React, { useEffect, useState } from "react";
import Button from '../UI/Button';
import classes from './Login.module.css';

const Login = props => {

    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [emailIsValid, setEmailIsValid]= useState();
    const [passwordIsValid, setPasswordIsValid] = useState();
    const [formIsValid, setFormIsValid] = useState(false);

    useEffect(() => {
        const identifier = setTimeout(() => {
            setFormIsValid(
                userEmail.includes('@') && userPassword.trim().length > 6
            )
        }, 500)

        return () => {
            clearTimeout(identifier);
        }
    }, [userEmail, userPassword]);

    const userEmailChangeHandle = (event) => {
        setUserEmail(event.target.value);
    }

    const validateEmailHandler = () => {
        setEmailIsValid(userEmail.includes('@'));
    }

    const userPasswordChangeHandle = (event) => {
        setUserPassword(event.target.value);
    }

    const validatePasswordHandler = () => {
        setPasswordIsValid(userPassword.trim().length > 0);
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
            <h2>Iniciar Sesión</h2>
            <div className={`${classes.control} ${
                    emailIsValid === false ? classes.invalid : ''}`} >
                        <input type="email" 
                                onChange= { userEmailChangeHandle } 
                                onBlur= { validateEmailHandler }
                                value= { userEmail }
                                placeholder= 'Ingrese su Correo'
                    />
            </div>
            <div className={`${classes.control} ${
                    passwordIsValid === false ? classes.invalid : ''}`}>
                    <input type="password" 
                        onChange= { userPasswordChangeHandle }
                        onBlur= { validatePasswordHandler }
                        value= { userPassword }
                        placeholder='Ingrese su contraseña'
                    />
            </div>
            <Button type="submit" disabled={!formIsValid}>Ingresar</Button>
        </form>
    );
}

export default Login;
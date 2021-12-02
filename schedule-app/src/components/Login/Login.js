import React, { useEffect, useState, useReducer } from "react";
import Button from '../UI/Button';
import classes from './Login.module.css';

const emailUser = (state, action) => {
    if (action.type === 'USER_INPUT'){
        return { value: action.val, isValid: action.val.includes('@') };
    }
    if (action.type === 'INPUT_BLUR') {
        return { value: state.value, isValid: state.value.includes('@') };
    }
    return { value: '', isValid: false };
}

const emailPassword = (state, action) => {
    if (action.type === 'USER_INPUT'){
        return { value: action.val, isValid: action.val.trim().length > 6 };
    }
    if (action.type === 'INPUT_BLUR') {
        return { value: state.value, isValid: state.value.trim().length > 6 }
    }
    return { value: '', isValid: false };
}

const Login = props => {

    const [formIsValid, setFormIsValid] = useState(false);
    const [emailState, dispatchEmail] = useReducer(emailUser, {
        value: '',
        isValid: null
    });
    const [passwordState, dispatchPassword] = useReducer(emailPassword, {
        value: '',
        isValid: null
    });

    const { isValid: emailIsValid } = emailState;
    const { isValid: passwordIsValid } = passwordState;

    useEffect(() => {
        const identifier = setTimeout(() => {
            setFormIsValid(emailIsValid  && passwordIsValid);
        }, 500);

        return () => {
            clearTimeout(identifier);
        }
    }, [emailIsValid, passwordIsValid]);

    const userEmailChangeHandle = (event) => {
        dispatchEmail({type: 'USER_INPUT', val: event.target.value});
        setFormIsValid(
            event.target.value.includes('@') && passwordState.isValid
        );
    };

    const validateEmailHandler = () => {
        dispatchEmail({ type: 'INPUT_BLUR'});
    }

    const userPasswordChangeHandle = (event) => {
        dispatchPassword({type: 'USER_INPUT', val: event.target.value});
        setFormIsValid(
            emailState.isValid && event.target.value.trim().length > 6
        );
    }

    const validatePasswordHandler = () => {
        dispatchPassword({ type: 'INPUT_BLUR'});
    }

    const summitHandle = (event) => {
        event.preventDefault();
        props.onLogin({
            userEmail: emailState.value,
            userPassword: passwordState.value
        });
    }


    return (
        <form onSubmit= { summitHandle }>
            <h2>Iniciar Sesión</h2>
            <div className={`${classes.control} ${
                    emailState.isValid === false ? classes.invalid : ''}`} >
                        <input type="email" 
                                onChange= { userEmailChangeHandle } 
                                onBlur= { validateEmailHandler }
                                value= { emailState.value }
                                placeholder= 'Ingrese su Correo'
                    />
            </div>
            <div className={`${classes.control} ${
                    passwordState.isValid === false ? classes.invalid : ''}`}>
                    <input type="password" 
                        onChange= { userPasswordChangeHandle }
                        onBlur= { validatePasswordHandler }
                        value= { passwordState.value }
                        placeholder='Ingrese su contraseña'
                    />
            </div>
            <Button type="submit" disabled={!formIsValid}>Ingresar</Button>
        </form>
    );
}

export default Login;
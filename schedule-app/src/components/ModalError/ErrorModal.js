import { Fragment } from "react";
import  ReactDOM from "react-dom";

import Cart from "../Cart/Cart";
import Button from '../BasicElement/Button';
import classes from './ErrorModal.module.css'

const Backdrop = props => {
    return <div className= {classes.backdrop} ></div>;
}

const ModalOverlay = props => {
    return (
            <Cart className={classes.modal}> 
                <header className={classes.header}>
                    <h2>{props.title}</h2>
                </header>
                <div className={classes.content}>
                    <p>{props.message}</p>
                </div>
                <footer className= {classes.actions}>
                    <Button classNameButton = {classes.buttonModal} onClick={ props.onConfirm }>Okay</Button>
                </footer> 
            </Cart>
    );
}

const ErrorModal = props => {

    return (
        <Fragment>
            {ReactDOM.createPortal( <Backdrop />, document.getElementById('backdrop-root'))}
            {ReactDOM.createPortal( <ModalOverlay title={props.title} message={props.message} onConfirm={props.onConfirm} />, document.getElementById('modal-root'))}
        </Fragment>
    )
}




export default ErrorModal;
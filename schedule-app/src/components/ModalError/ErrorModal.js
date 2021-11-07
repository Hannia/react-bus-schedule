import { Fragment } from "react";
import  ReactDOM from "react-dom";

import Cart from "../Cart/Cart";
import Button from '../BasicElement/Button';
import classes from './ErrorModal.css'

const Backdrop = props => {
    return <div className= {classes.backdrop} />;
}

const ModalOverlay = props => {
    return (
            <Cart> 
                <header>
                    <h2>{props.title}</h2>
                </header>
                <div className={}>
                    <p>{props.message}</p>
                </div>
                <footer className= {classes.actions}>
                    <Button classNameButton = {classes.buttonModal}>Okay</Button>
                </footer> 
            </Cart>
    );
}

const ErrorModal = props => {

    return (
        <Fragment>
            {ReactDOM.createPortal( <Backdrop />, document.getElementById('backdrop-root'))}
            {ReactDOM.createPortal( <ModalOverlay />, document.getElementById('modal-root'))}
        </Fragment>
    )
}




export default ErrorModal;
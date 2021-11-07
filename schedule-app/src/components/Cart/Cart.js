import classes from './Cart.css';


const Cart = props => {
    return <div className={ classes.card-content }>{ props.children }</div>;
}

export default Cart;
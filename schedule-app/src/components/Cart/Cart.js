import classes from './Cart.module.css';


const Cart = props => {
    return <div className={ props.className }>{ props.children }</div>;
}

export default Cart;
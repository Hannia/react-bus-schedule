const Button = (props) => {
    return (
        <button type={ props.type || 'button' } 
                className={ props.classBtn } 
                onClick={props.onClick} 
                disabled= { props.disabled }>{props.children}</button>
    )
} 

export default Button;
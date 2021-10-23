const ButtomElement = (props) => {
    return (
        <button type={ props.type } className={ props.classNameButton } disabled={props.disabled}>{ props.label }</button>
    )
}

export default ButtomElement;
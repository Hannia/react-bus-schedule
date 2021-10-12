const ButtomElement = (props) => {
    return (
        <button type={ props.type } className={ props.classNameButton }>{ props.label }</button>
    )
}

export default ButtomElement;
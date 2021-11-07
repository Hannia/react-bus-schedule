const Input = props => {

    const inputChangeHandler = event => {
        props.OnSaveInput ( {
            target: event.target.name,
            value: event.target.value
        });
    }

    let input = <input className={props.classes} 
                       type={ props.type } 
                       name={ props.name }  
                       onChange = { inputChangeHandler } 
                       placeholder = { props.placeholder }
                       value = { props.value } />

    if (props.type === 'number') {
        return input = <input 
                className={`${props.classes}`} 
                type= { props.type } 
                name= { props.name }  
                min = { props.min }
                max = { props.max }
                onChange = { inputChangeHandler }
                value = { props.value }
                placeholder={props.placeholder} />
    }

    if(props.type === "text") {
        return input = <input 
            className={`${props.classes}`} 
            type={ props.type } 
            name={ props.name }  
            onChange = { inputChangeHandler }
            placeholder = {props.placeholder}
            value = { props.value } />
    }

    return ( input );

}

export default Input;
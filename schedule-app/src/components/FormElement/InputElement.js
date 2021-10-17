import { useState } from "react";

const InputElement = (props) => {

    const [enteredData, setData] = useState('');

    const inputChangeHandler = event => {
        setData(event.target.value);
        props.OnSaveInput ( {
            target: event.target.name,
            value: event.target.value
        });
    }

    let inputHtml = <input className={props.classes} 
                           type={ props.type } 
                           name={ props.name }  
                           onChange = { inputChangeHandler } 
                           value = { enteredData }  />

    if (props.type === 'number') {
        return inputHtml = <input 
                className={`${props.classes}`} 
                type={ props.type } 
                name={ props.name }  
                min = { props.min }
                max = { props.max }
                onChange = { inputChangeHandler }
                value = { enteredData }
                placeholder={props.placeholder}
                required= {props.required}
            />
        }
    if(props.type === "text") {
        return inputHtml = <input 
            className={`${props.classes}`} 
            type={ props.type } 
            name={ props.name }  
            onChange = { inputChangeHandler }
            placeholder = {props.placeholder}
            value = { enteredData } 
            required= {props.required}
            />
        }

    return ( inputHtml );

}

export default InputElement;
import { useState } from "react";

const InputElement = (props) => {

    const [enteredData, setData] = useState('');
   // const [isValid, setIsValid] = useState(true);

    const inputChangeHandler = event => {
        setData(event.target.value);
        //if (event.target.value.trim().length > 0) setIsValid(true);
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
            />
        }

    return ( inputHtml );

}

export default InputElement;
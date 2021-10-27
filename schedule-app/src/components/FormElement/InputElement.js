import { useState } from "react";

const InputElement = (props) => {

    const [enteredData, setData] = useState('');

    const inputChangeHandler = event => {
        //setData(event.target.value);
        props.OnSaveInput ( {
            target: event.target.name,
            value: event.target.value
        });

        props.validButton();

    }

    let inputHtml = <input className={props.classes} 
                           type={ props.type } 
                           name={ props.name }  
                           onChange = { inputChangeHandler } 
                           placeholder = { props.placeholder }
                           value = { props.value }  />

    if (props.type === 'number') {
        return inputHtml = <input 
                className={`${props.classes}`} 
                type={ props.type } 
                name={ props.name }  
                min = { props.min }
                max = { props.max }
                onChange = { inputChangeHandler }
                value = { props.value }
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
            value = { props.value } 
            />
        }

    return ( inputHtml );

}

export default InputElement;
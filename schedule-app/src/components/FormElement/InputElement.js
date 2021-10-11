import { useState } from "react";

const InputElement = props => {

    const [enteredData, setData] = useState('');

    const inputChangeHandler = event => {
        setData(event.target.value);
        props.onSave ( {
            target: event.target.name,
            value: event.target.value
        });
    }

    const inputHtml = props.items.type === "number" ? 
    <input 
    className={`${props.classes}`} 
    type={ props.items.type }   
    min = { props.items.min }
    max = { props.items.max }
    name = { props.items.name_label }
    onChange = { inputChangeHandler }
    value = { enteredData }
    />
    : 
    <input 
    className={`${props.classes}`} 
    type={ props.items.type } 
    name={props.items.name_label } 
    onChange = { inputChangeHandler }
    value = { enteredData }
    />;

    return ( inputHtml );

}

export default InputElement;
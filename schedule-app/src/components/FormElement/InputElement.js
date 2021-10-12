import { useState } from "react";

const InputElement = (props) => {

    const [enteredData, setData] = useState('');

    const inputChangeHandler = event => {
        setData(event.target.value);
        props.onSave ( {
            target: event.target.name,
            value: event.target.value
        });
    }

    let testHtml = <input />

    if (props.type === 'number') {
        return testHtml = <input 
                className={`${props.classes}`} 
                type={ props.type }   
                min = { props.items.min }
                max = { props.items.max }
                name = { props.items.name_label }
                onChange = { inputChangeHandler }
                value = { enteredData }
            />
        }
    if(props.type === "text") {
        return testHtml = <input 
            className={`${props.classes}`} 
            type={ props.type } 
            name={props.items.name_label } 
            onChange = { inputChangeHandler }
            value = { enteredData } />
        }

    return ( testHtml );

}

export default InputElement;
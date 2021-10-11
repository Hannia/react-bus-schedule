import { useState } from 'react';

import InputElement from './InputElement'

const InputForm = (props) => {

 const onSaveHandle = (target) => {
        props.onSaveForm(target);
    }

    return (
        <div className="block_input">
            <label 
                htmlFor={ props.items.name_label } >
                    { props.items.label }
            </label>
            <InputElement 
                items={ props.items } 
                classes = { props.classes } 
                onSave= { onSaveHandle } 
                />
        </div>
   )
}

export default InputForm;


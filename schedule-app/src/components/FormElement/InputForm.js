import { useState } from 'react';

import InputElement from './InputElement'

const InputForm = (props) => {

 const onSaveHandle = (target) => {
        props.onSaveForm(target);
    }

//Puede ser que aqui con una opcion de condicion puedo agregar a opcion de seleccion am y pm 

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


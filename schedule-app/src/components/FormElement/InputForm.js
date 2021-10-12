import InputElement from './InputElement';
import LabelElement from './LabelElement';

const InputForm = (props) => {

 const onSaveHandle = (target) => {
        props.onSaveForm(target);
    }

    return (
        <div className="block_input">
            <LabelElement 
                htmlFor={ props.items.name_label } 
                label_name =  { props.items.label }
                />
            <InputElement 
                items = { props.items } 
                name ={ props.items.name_label } 
                type = { props.type }
                classes = { props.classes } 
                onSave= { onSaveHandle } 
                />
        </div>
   )
}

export default InputForm;


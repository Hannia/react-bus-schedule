import Input from '../BasicElement/Input';
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
            <Input 
                items = { props.items } 
                name ={ props.items.name_label } 
                type = { props.type }
                classes = { props.classes } 
                placeholder = { props.items.label }
                onSave= { onSaveHandle } 
                />
        </div>
   )
}

export default InputForm;


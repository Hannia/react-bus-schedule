import InputForm from "./InputForm";
import ButtomElement from "./ButtomElement";

const FormElement = (props) => {

    const onSaveFormHandler = (data) => {
        props.onSaved (data);
    }

    return (
        <form onSubmit={ props.action }>
            { props.items.map ( (item, index) => 
                    <InputForm items={item} key={`${index}`} classes={props.classes} onSaveForm= {onSaveFormHandler}/>
                ) 
            }
            <div className="buttom_submit">
                <ButtomElement type={ props.itemsButton.type } classNameButton= { props.classButton } label= { props.itemsButton.label } />
            </div>
        </form>
    );
}

export default FormElement;
import InputElement from "../FormElement/InputElement";
import ButtomElement from "../FormElement/ButtomElement";

const SelectTransport = () => {

    const OnSaveInput = (data) => {
        console.log(data);
    }

    return (<div>
        <InputElement 
            type = "search" 
            name="search_route"
            OnSaveInput= {OnSaveInput}
            placeholder = "Buscar"
            value= { '' }
            />
        <ButtomElement 
            type="button" 
            label= "Buscar"
            classNameButton="btn-search" 
            disabled= {null}/>
    </div>)
}

export default SelectTransport;


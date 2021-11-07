import { Fragment } from "react";

import Input from "../BasicElement/Input";
import Button from "../BasicElement/Button";

const SelectTransport = () => {

    const OnSaveInput = (data) => {
        console.log(data);
    }

    return (<Fragment>
        <Input 
            type = "search" 
            name="search_route"
            OnSaveInput= {OnSaveInput}
            placeholder = "Buscar"
            value= { '' }
            />
        <Button classNameButton="btn-search">Buscar</Button>
    </Fragment>)
}

export default SelectTransport;


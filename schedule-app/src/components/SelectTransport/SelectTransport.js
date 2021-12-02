import { Fragment } from "react";

import Input from "../UI/Input";
import Button from "../UI/Button";

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


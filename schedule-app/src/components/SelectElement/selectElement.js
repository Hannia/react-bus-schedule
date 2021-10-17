import OptionElement from "./OptionElement"

const SelectElement = props => {

    const dropDownTime = event => {
        props.OnSaveSelect({ 
            value: event.target.value,
            target: event.target.name
        });
    }

    return ( <select name={props.name} 
                     value={ props.selected } 
                     onChange={ dropDownTime }>
                    {props.options.map( (item,index) => <OptionElement 
                                                                key={`${item}${index}`} 
                                                                value={item} 
                                                                option={item} 
                                                                required= {props.required}/>)} 
                                                                </select>);}

export default SelectElement;
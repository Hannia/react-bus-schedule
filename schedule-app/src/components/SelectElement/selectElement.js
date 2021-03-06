import OptionElement from "./OptionElement"

const SelectElement = (props) => {

    const dropDownTime = event => {
        props.OnSaveSelect({ 
            value: event.target.value,
            target: event.target.name
        });
    }

    return ( <select name={props.name} 
                     value={ props.selected } 
                     onChange={ dropDownTime }>
                    {props.options.map( (item,index) => {return  <OptionElement 
                                                                key={`${item}${index}`} 
                                                                value={item} 
                                                                option={item} 
                                                                /> }) } 
                                                                </select>);}

export default SelectElement;
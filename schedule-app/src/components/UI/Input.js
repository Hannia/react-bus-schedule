import  classes  from './UI.module.css';

const Input = props => {

    const inputChangeHandler = event => {
        props.OnSaveInput ( {
            target: event.target.name,
            value: event.target.value 
        });
    }

    return (<input className={`${classes} ${props.class}`} 
                    name = { props.name }
                    onChange= { inputChangeHandler } 
                    value= {props.value} 
                    {...props.attr}/>);
}

export default Input;
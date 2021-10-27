import { useState } from "react";

/**Components */
import InputElement from "./InputElement";
import ButtomElement from "./ButtomElement";
import SpanElement from './SpanElement';
import SelectElement from "../SelectElement/SelectElement";

const FormAddRouter = () => {

    const dataRoutes = {
        departure: '',
        arrive: '',
        departure_hour: ' ',
        departure_minute: ' ',
        departure_time: 'am',
        arrive_hour: ' ',
        arrive_minute: ' ',
        arrive_time: 'am',
        price_ticket: ' ' 
    }

    /**State variables */
    const [dataArray, setDataArray] = useState(dataRoutes);
    const [isDisabled, setIsDisabled] = useState("disabled");

    const options = ['am','pm'];
 
    const addRouteHandle = event => {
        event.preventDefault();
        console.log(dataArray);
        setDataArray((prevState) => {
            return {...prevState, departure: ''}; 
        });
        setDataArray((prevState) => {
            return {...prevState, arrive: ''} 
        });
        setDataArray((prevState) => {
            return {...prevState, departure_hour: ' '} 
        });
        setDataArray( (prevState) => {
            return {...prevState, departure_minute: ' '}
        });
        setDataArray((prevState) => { 
            return {...prevState, arrive_hour: ' ' }
        });
        setDataArray((prevState) => {
            return {...prevState, arrive_minute: ' ' } 
        });
        setDataArray((prevState) => {
            return { ...prevState, departure_time:'am'}
        });
        setDataArray((prevState) => {
            return { ...prevState, arrive_time: 'am'}
        });
        setDataArray((prevState) => { 
                return { ...prevState, price_ticket: ' '}
        });
    }

    const saveFormHandle = (data) => {
        if (data.target === 'departure') {           
            setDataArray((prevState) => {
                return {...prevState, departure: data.value}; 
            });
        }
        if (data.target === 'arrive') {
            setDataArray((prevState) => {
                return {...prevState, arrive: data.value} });
        }
        if (data.target === 'departure_hour') {
           setDataArray((prevState) => {
               return {...prevState, departure_hour: data.value} });
        }
        if (data.target === 'departure_minute') {
            setDataArray( (prevState) => {
                return {...prevState, departure_minute: data.value}} );
        }
        if (data.target === 'arrive_hour') {
            setDataArray((prevState) => { 
                return {...prevState, arrive_hour: data.value}} );
        }
        if (data.target === 'arrive_minute') {
            setDataArray((prevState) => {
                return {...prevState, arrive_minute: data.value} });
        }
        if (data.target === 'departure_time'){
            setDataArray((prevState) => {
                return { ...prevState, departure_time:data.value}} );
        }
        if (data.target === 'arrive_time') {
            setDataArray((prevState) => {
                return { ...prevState, arrive_time:data.value}} );
        }
        if (data.target === 'price_ticket') {
            setDataArray((prevState) => { 
                return { ...prevState, price_ticket:data.value}});
        }
    }

    const validDisabled = _ => {
       if ( ( dataArray.departure.trim().length -1) > 0 && 
            ( dataArray.arrive.trim().length -1) > 0  &&
            ( dataArray.departure_hour !== '') && 
            ( dataArray.departure_minute !== '') &&
            ( dataArray.arrive_hour !== '') && 
            ( dataArray.arrive_minute !== ''))
                setIsDisabled(null);
       else { setIsDisabled('disabled'); } 
   }

return <form onSubmit={addRouteHandle}>
            <div className="place-class">
                <SpanElement label="Ingresar Ruta" />
                <div className="input-routes">
                    <InputElement 
                        classes={`input-class ${dataArray.departure === '' || dataArray.departure.trim().length -1 > 0  ? 'disable'  : 'active'}`}
                        type="text" 
                        name="departure" 
                        placeholder="Lugar de Salida" 
                        OnSaveInput = {saveFormHandle} 
                        validButton= {validDisabled}
                        value = { dataArray.departure }
                        />
                    <InputElement 
                        classes={`input-class ${dataArray.arrive === '' || dataArray.arrive.trim().length -1 > 0 ? 'disable' : 'active'}`}
                        type="text" name="arrive" 
                        placeholder="Lugar de Llegada" 
                        OnSaveInput = {saveFormHandle} 
                        validButton= {validDisabled}
                        value= { dataArray.arrive }
                        />
                </div>
            </div>
            <div className="departure">
                <SpanElement label="Ingresar hora de salida" />
                <div className="departure_time">
                    <InputElement 
                        classes= {`input-number ${dataArray.departure_hour === '0' || dataArray.departure_hour !== '' ? 'disable' : 'active'  }`}
                        type="number" 
                        name="departure_hour" 
                        placeholder="Hora" min="1" max="12" 
                        OnSaveInput = {saveFormHandle} 
                        validButton= {validDisabled} 
                        value= { dataArray.departure_hour }
                        />
                    <InputElement 
                        classes={`input-number ${dataArray.departure_minute === '0' || dataArray.departure_minute !== '' ? 'disable' : 'active'  }`}
                        type="number" 
                        name="departure_minute" 
                        placeholder="Minutos" min="00" max="59" 
                        OnSaveInput = {saveFormHandle} 
                        validButton= {validDisabled}
                        value= { dataArray.departure_minute }
                        /> 
                    <SelectElement name="departure_time" selected={dataArray.departure_time} options={['am','pm']} OnSaveSelect = {saveFormHandle} />                   
                </div>
            </div>
            <div className="arrive">
                <SpanElement label="Ingresar hora aproximada de llegada" />
                <div className="arrive_time">
                    <InputElement 
                        classes={`input-number ${dataArray.arrive_hour === '0' || dataArray.arrive_hour !== '' ? 'disable' : 'active' }`} 
                        type="number" name="arrive_hour" 
                        placeholder="Hora" min="1" max="12" 
                        OnSaveInput = {saveFormHandle} 
                        validButton= {validDisabled}
                        value = { dataArray.arrive_hour }
                        />
                    <InputElement 
                        classes={`input-number ${dataArray.arrive_minute === '0' || dataArray.arrive_minute !== '' ? 'disable' : 'active'}`} 
                        type="number" 
                        name="arrive_minute" 
                        placeholder="Minutos" min="00" max="59" 
                        OnSaveInput = {saveFormHandle} 
                        validButton= {validDisabled}
                        value = { dataArray.arrive_minute }
                        />   
                    <SelectElement name="arrive_time" selected={dataArray.arrive_time} options={options} OnSaveSelect = {saveFormHandle}/>    
                </div>
            </div>
            <div className="price">
                <InputElement 
                    classes= {`input-number ${ dataArray.price_ticket === '0' || dataArray.price_ticket !== '' ?  'disable' : 'active' }`}
                    type= "number"
                    name="price_ticket"
                    placeholder = "Precio del tiquete"
                    OnSaveInput = {saveFormHandle}
                    validButton = {validDisabled}
                    value= { dataArray.price_ticket }
                />
            </div>
        <div className="buttom_submit">
             <ButtomElement type="submit" classNameButton= {`button` } label= "Agregar nueva ruta" disabled={isDisabled} />
        </div>
    </form>

}



export default FormAddRouter;
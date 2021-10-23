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
        departure_hour: '0',
        departure_minute: '0',
        departure_time: 'am',
        arrive_hour: '0',
        arrive_minute: '0',
        arrive_time: 'am'
    }

    const [dataArray, setDataArray] = useState(dataRoutes);
    const [isDisabled, setIsDisabled] = useState("disabled");
 
    const addRouteHandle = event => {
        event.preventDefault();
        console.log(dataArray);
    }

    const saveFormHandle = (data) => {
        if (data.target === 'departure') {           
            setDataArray({...dataArray, departure: data.value} );
        }
        if (data.target === 'arrive') {
            setDataArray({...dataArray, arrive: data.value} );
        }
        if (data.target === 'departure_hour') {
           setDataArray({...dataArray, departure_hour: data.value} );
        }
        if (data.target === 'departure_minute') {
            setDataArray({...dataArray, departure_minute: data.value} );
        }
        if (data.target === 'arrive_hour') {
            setDataArray({...dataArray, arrive_hour: data.value} );
        }
        if (data.target === 'arrive_minute') {
            setDataArray({...dataArray, arrive_minute: data.value} );
        }
        if (data.target === 'departure_time'){
            setDataArray( { ...dataArray,departure_time:data.value});
        }
        if (data.target === 'arrive_time') {
            setDataArray( { ...dataArray, arrive_time:data.value});
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
       console.log(dataArray.departure_hour);

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
                        validButton= {validDisabled}/>
                    <InputElement 
                        classes={`input-class ${dataArray.arrive === '' || dataArray.arrive.trim().length -1 > 0 ? 'disable' : 'active'}`}
                        type="text" name="arrive" 
                        placeholder="Lugar de Llegada" 
                        OnSaveInput = {saveFormHandle} 
                        validButton= {validDisabled}/>
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
                        validButton= {validDisabled} />
                    <InputElement 
                        classes={`input-number ${dataArray.departure_minute === '0' || dataArray.departure_minute !== '' ? 'disable' : 'active'  }`}
                        type="number" 
                        name="departure_minute" 
                        placeholder="Minutos" min="00" max="59" 
                        OnSaveInput = {saveFormHandle} 
                        validButton= {validDisabled}/> 
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
                        validButton= {validDisabled}/>
                    <InputElement 
                        classes={`input-number ${dataArray.arrive_minute === '0' || dataArray.arrive_minute !== '' ? 'disable' : 'active'}`} 
                        type="number" 
                        name="arrive_minute" 
                        placeholder="Minutos" min="00" max="59" 
                        OnSaveInput = {saveFormHandle} 
                        validButton= {validDisabled}/>   
                    <SelectElement name="arrive_time" selected={dataArray.arrive_time} options={['am','pm']} OnSaveSelect = {saveFormHandle}/>    
                </div>
            </div>
        <div className="buttom_submit">
             <ButtomElement type="submit" classNameButton= {`button` } label= "Agregar nueva ruta" disabled={isDisabled} />
        </div>
    </form>

}



export default FormAddRouter;
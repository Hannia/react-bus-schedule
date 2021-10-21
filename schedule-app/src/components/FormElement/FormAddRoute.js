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
        departure_hour: 0,
        departure_minute: 0,
        departure_time: '',
        arrive_hour: 0,
        arrive_minute: 0,
        arrive_time: ''
    }

    const [prueba, setPrueba] = useState(dataRoutes);
 
    const addRouteHandle = event => {
        event.preventDefault();
        console.log(prueba);
    }

    const saveFormHandle = (data) => {
        if (data.target === 'departure') {
            setPrueba({...prueba, departure: data.value} );
        }
        if (data.target === 'arrive') {
            setPrueba({...prueba, arrive: data.value} );
        }
        if (data.target === 'departure_hour') {
           setPrueba({...prueba, departure_hour: data.value} );
        }
        if (data.target === 'departure_minute') {
            setPrueba({...prueba, departure_minute: data.value} );
        }
        if (data.target === 'arrive_hour') {
            setPrueba({...prueba, arrive_hour: data.value} );
        }
        if (data.target === 'arrive_minute') {
            setPrueba({...prueba, arrive_minute: data.value} );
        }
        if (data.target === 'departure_time'){
            setPrueba( { ...prueba,departure_time:data.value});
        }
        if (data.target === 'arrive_time') {
            setPrueba( { ...prueba, arrive_time:data.value});
        }
    }


return <form onSubmit={addRouteHandle}>
            <div className="place-class">
                <SpanElement label="Ingresar Ruta" />
                <div className="input-routes">
                    <InputElement classes="input-class" type="text" name="departure" placeholder="Lugar de Salida" OnSaveInput = {saveFormHandle} />
                    { <div className={`${!prueba.departure.trim() > 0 ? 'active' : 'disable'}`}> <SpanElement label="Debe ingresar Datos" /> </div>}
                    <InputElement classes="input-class" type="text" name="arrive" placeholder="Lugar de Llegada" OnSaveInput = {saveFormHandle} />
                </div>
            </div>
            <div className="departure">
                <SpanElement label="Ingresar hora de salida" />
                <div className="departure_time">
                    <InputElement classes="input-number" type="number" name="departure_hour" placeholder="Hora" min="1" max="12" OnSaveInput = {saveFormHandle} />
                    <InputElement classes="input-number" type="number" name="departure_minute" placeholder="Minutos" min="00" max="59" OnSaveInput = {saveFormHandle} /> 
                    <SelectElement name="departure_time" selected={prueba.departure_time} options={['am','pm']} OnSaveSelect = {saveFormHandle} />                   
                </div>
            </div>
            <div className="arrive">
                <SpanElement label="Ingresar hora aproximada de llegada" />
                <div className="arrive_time">
                    <InputElement classes="input-number" type="number" name="arrive_hour" placeholder="Hora" min="1" max="12" OnSaveInput = {saveFormHandle} />
                    <InputElement classes="input-number" type="number" name="arrive_minute" placeholder="Minutos" min="00" max="59" OnSaveInput = {saveFormHandle} />    
                    <SelectElement name="arrive_time" selected={prueba.arrive_time} options={['am','pm']} OnSaveSelect = {saveFormHandle}/>    
                </div>
            </div>
        <div className="buttom_submit">
             <ButtomElement type="submit" classNameButton= "button" label= "Agregar nueva ruta" />
        </div>
    </form>

}



export default FormAddRouter;
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

    const [departureTime, setDepartureTime] = useState('am'); 
    const [arriveTime, setArriveTimet] = useState('am'); 

    const addRouteHandle = event => {
        event.preventDefault();
        console.log(dataRoutes);
    }

    const saveFormHandle = (data) => {
        if (data.target === 'departure') {
            dataRoutes.departure = data.value
        }
        if (data.target === 'arrive') {
            dataRoutes.arrive = data.value
        }
        if (data.target === 'departure_hour') {
            dataRoutes.departure_hour = data.value
        }
        if (data.target === 'departure_minute') {
            dataRoutes.departure_minute= data.value
        }
        if (data.target === 'arrive_hour') {
            dataRoutes.arrive_hour = data.value
        }
        if (data.target === 'arrive_minute') {
            dataRoutes.arrive_minute = data.value
        }

    }

    const saveTimeHandle = data => {
        console.log(data);
        if (data.target === 'departure_time'){
            setDepartureTime(departureTime);
            dataRoutes.departure_time = data.value;
        }
        if (data.target === 'arrive_time') {
            setArriveTimet(arriveTime);
            dataRoutes.arrive_time = data.value;
        }
    }

return <form onSubmit={addRouteHandle} novalidate>
            <div className="place-class">
                <SpanElement label="Ingresar Ruta" />
                <div>
                    <InputElement classes="input-class" type="text" name="departure" placeholder="Lugar de Salida" OnSaveInput = {saveFormHandle} required={true}/>
                    <InputElement classes="input-class" type="text" name="arrive" placeholder="Lugar de Llegada" OnSaveInput = {saveFormHandle} required={true}/>
                </div>
            </div>
            <div className="departure">
                <SpanElement label="Ingresar hora de salida" />
                <div className="departure_time">
                    <InputElement classes="input-number" type="number" name="departure_hour" placeholder="Hora" min="1" max="12" OnSaveInput = {saveFormHandle} required={true}/>
                    <InputElement classes="input-number" type="number" name="departure_minute" placeholder="Minutos" min="00" max="59" OnSaveInput = {saveFormHandle} required={true}/> 
                    <SelectElement name="departure_time" selected={departureTime} options={['am','pm']} OnSaveSelect = {saveTimeHandle} required={true}/>                   
                </div>
            </div>
            <div className="arrive">
                <SpanElement label="Ingresar hora aproximada de llegada" />
                <div className="arrive_time">
                    <InputElement classes="input-number" type="number" name="arrive_hour" placeholder="Hora" min="1" max="12" OnSaveInput = {saveFormHandle} required={true}/>
                    <InputElement classes="input-number" type="number" name="arrive_minute" placeholder="Minutos" min="00" max="59" OnSaveInput = {saveFormHandle} required={true} />    
                    <SelectElement name="arrive_time" selected={arriveTime} options={['am','pm']} OnSaveSelect = {saveTimeHandle} required={true} />    
                </div>
            </div>
        <div className="buttom_submit">
             <ButtomElement type="submit" classNameButton= "button" label= "Agregar nueva ruta" />
        </div>
    </form>

}



export default FormAddRouter;
import { useState, Fragment } from "react";

/**Components */
import Input from "../BasicElement/Input";
import Button from "../BasicElement/Button";
import Cart from "../Cart/Cart";
import ErrorModal from "../ModalError/ErrorModal";
import SpanElement from './SpanElement';
import SelectElement from "../SelectElement/SelectElement";
import Unordered from '../BasicElement/Unordered';

const FormAddRouter = () => {

    const dataRoutes = {
        departure: '',
        arrive: '',
        schedule: [],
        price_ticket: '' 
    }

    /**State variables */
    const [dataArray, setDataArray] = useState(dataRoutes);
    const [departure_hour, setDeparture_hour] = useState('');
    const [departure_minute, setDeparture_minute] = useState('');
    const [arrive_hour, setArrive_hour] = useState('');
    const [arrive_minute, setArrive_minute] = useState('');
    const [departure_time, setDeparture_time] = useState('am');
    const [arrive_time, setArrive_time] = useState('am');
    const [error, setError] = useState();

    const options = ['am','pm'];
 
    const addRouteHandle = event => {
        event.preventDefault();
        console.log(dataArray);
        if (dataArray.departure.trim().length === 0 || dataArray.arrive.trim().length === 0) {
            setError ( {
                title:'Información invalida',
                message: "Debe ingresar la ruta"
            })
            return;
        }
        setDataArray((prevState) => {
            return {...prevState, departure: ''}; 
        });
        setDataArray((prevState) => {
            return {...prevState, arrive: ''} 
        });
        setDataArray((prevState) => { 
                return { ...prevState, price_ticket: ''}
        });
    }

    const saveFormHandle = (data) => {
        if (data.target === 'departure')           
            setDataArray((prevState) => {
                return {...prevState, departure: data.value}; 
            });
        
        if (data.target === 'arrive')
            setDataArray((prevState) => {
                return {...prevState, arrive: data.value} });
        
        if (data.target === 'departure_hour')
            setDeparture_hour(data.value);
        
        if (data.target === 'departure_minute')
            setDeparture_minute(data.value);

        if (data.target === 'arrive_hour') 
            setArrive_hour(data.value);

        if (data.target === 'arrive_minute')
            setArrive_minute(data.value);
        
        if (data.target === 'departure_time')
            setDeparture_time(data.value);
        
        if (data.target === 'arrive_time') 
            setArrive_time(data.value);

        if (data.target === 'price_ticket')
            setDataArray((prevState) => { 
                return { ...prevState, price_ticket:data.value}});
    }

    const addSchedule = _ => {
        if (departure_hour > 12 || departure_hour < 0 || arrive_hour < 0  || arrive_hour > 12) {
            return setError({
                title: 'Información invalida',
                message: 'Por favor, ingrese valores menores a 12 pero mayores a 0'
            });    
        }
        if (departure_minute > 60 || departure_minute < 0 || arrive_minute < 0  || arrive_minute > 60) {
            return setError({
                title: 'Información invalida',
                message: 'Por favor, ingrese valores menores a 60 pero mayores a 0'
            }); 
        }
        if (departure_hour.trim().length === 0 || 
            departure_minute.trim().length === 0 ||
            arrive_hour.trim().length === 0 ||
            arrive_minute.trim().length === 0){
            return setError({
                title: 'Información invalida',
                message: 'Debe ingresar los datos correctamente Hora/minutos'
            }); 
        }

        dataArray.schedule.push({
            departure_hour: departure_hour,
            departure_minute: departure_minute,
            departure_time: departure_time,
            arrive_hour: arrive_hour,
            arrive_minute: arrive_minute,
            arrive_time: arrive_time
        });
        setDataArray((prevState) => { return { ...prevState, schedule: dataArray.schedule}});
        setDeparture_hour('');
        setDeparture_minute('');
        setDeparture_time('am');
        setArrive_hour('');
        setArrive_minute('');
        setArrive_time('am');
    }

    const errorHandle = () => {
        setError(null);
    }

return <Fragment><Cart> 
        { error && <ErrorModal title={ error.title } message={ error.message } onConfirm= { errorHandle } /> }
        <form onSubmit={addRouteHandle}>
            <div className="place-class">
                <SpanElement label="Ingresar Ruta" />
                <div className="input-routes">
                    <Input 
                        classes={`input-class`}
                        type="text" 
                        name="departure" 
                        placeholder="Lugar de Salida" 
                        OnSaveInput = {saveFormHandle} 
                        value = { dataArray.departure }
                        />
                    <Input
                        classes={`input-class`}
                        type="text" name="arrive" 
                        placeholder="Lugar de Llegada" 
                        OnSaveInput = {saveFormHandle} 
                        value= { dataArray.arrive }
                        />
                </div>
            </div>
            <div className="departure">
                <p>Agregar los Horarios llagada y salida</p>
                <SpanElement label="Ingresar hora de salida" />
                <div className="departure_time">
                    <Input 
                        classes= {`input-number`}
                        type="number" 
                        name="departure_hour" 
                        placeholder="Hora" min="1" max="12" 
                        OnSaveInput = {saveFormHandle} 
                        value= { departure_hour }
                        />
                    <Input  
                        classes={`input-number`}
                        type="number" 
                        name="departure_minute" 
                        placeholder="Minutos" min="00" max="59" 
                        OnSaveInput = {saveFormHandle} 
                        value= { departure_minute }
                        /> 
                    <SelectElement name="departure_time" selected={departure_time} options={['am','pm']} OnSaveSelect = {saveFormHandle} />                   
                </div>
            </div>
            <div className="arrive">
                <SpanElement label="Ingresar hora aproximada de llegada" />
                <div className="arrive_time">
                    <Input 
                        classes={`input-number`} 
                        type="number" name="arrive_hour" 
                        placeholder="Hora" min="1" max="12" 
                        OnSaveInput = {saveFormHandle} 
                        value = { arrive_hour }
                        />
                    <Input 
                        classes={`input-number`} 
                        type="number" 
                        name="arrive_minute" 
                        placeholder="Minutos" min="00" max="59" 
                        OnSaveInput = {saveFormHandle} 
                        value = { arrive_minute }
                        />   
                    <SelectElement name="arrive_time" selected={arrive_time} options={options} OnSaveSelect = {saveFormHandle}/>    
                </div>
            </div>
                <Button classNameButton= {`button` } onClick={addSchedule}>Agregar horario</Button>
                <Unordered>
                    { dataArray.schedule.map( (item, index) => <li key={`schedule-${index}`}>{ 
                        `Hora Salida ${item.departure_hour} : ${item.departure_minute} ${item.departure_time} 
                         - Hora de llegada ${item.arrive_hour} : ${item.arrive_minute} ${item.arrive_time}` }</li>)  }
                </Unordered>
            <div className="price">
                <Input 
                    classes= {`input-number`}
                    type= "number"
                    name="price_ticket"
                    placeholder = "Precio del tiquete"
                    OnSaveInput = {saveFormHandle}
                    value= { dataArray.price_ticket }
                />
            </div>
        <div className="buttom_submit">
             <Button type="submit" classNameButton= {`button` } >Agregar nueva ruta</Button>
        </div>
    </form>
</Cart> </Fragment>
}



export default FormAddRouter;
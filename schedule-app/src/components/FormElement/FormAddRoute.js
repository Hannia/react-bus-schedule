import InputForm from "./InputForm";
import ButtomElement from "./ButtomElement";

const FormAddRouter = () => {

    const dataRoutes = {
        departure: '',
        arrive: '',
        departure_hour: 0,
        departure_minute: 0,
        arrive_hour: 0,
        arrive_minute: 0
    }

    const addRouteHandle = (event) => {
        event.preventDefault();
        console.log("Estpy funcionando");
        console.log (dataRoutes);
    }

    const departureAtrr = {
        name_label: 'departure',
        label: 'Lugar de Salida'
    }

    const arriveAtrr = {
        name_label: 'arrive',
        label: 'Lugar de Llegada'
    }

    const hourDepartureAttr = {
        name_label: 'departure_hour',
        label: 'Hora Salida',
        min: 1,
        max: 12
    }

    const minuteDepartureAttr = {
        name_label: 'departure_minute',
        label: 'Minutos Salida',
        min: 0,
        max: 59
    }

    const hourArriveAttr = {
        name_label: 'arrive_hour',
        label: 'Hora Llegada',
        min: 1,
        max: 12
    }

    const minuteArriveAttr = {
        name_label: 'arrive_minute',
        label: 'Minutos Llegada',
        min: 0,
        max: 59
    }

    const buttonAttr = {
        type: "submit",
        classes: "button",
        label: "Agregar nueva ruta"
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

return <form onSubmit={ addRouteHandle }>
        <InputForm items = { departureAtrr } classes="input-class" type="text" onSaveForm = {saveFormHandle}/>
        <InputForm items = { arriveAtrr } classes="input-class" type="text" onSaveForm = {saveFormHandle}/>
        <div className="departure_time">
             <InputForm items = { hourDepartureAttr } classes="input-number" type="number" onSaveForm = {saveFormHandle}/>
             <InputForm items = { minuteDepartureAttr } classes="input-number" type="number" onSaveForm = {saveFormHandle}/>       
        </div>
        <div className="arrive_time">
             <InputForm items = { hourArriveAttr } classes="input-number" type="number" onSaveForm = {saveFormHandle}/>
             <InputForm items = { minuteArriveAttr } classes="input-number" type="number" onSaveForm = {saveFormHandle}/>       
        </div>
        <div className="buttom_submit">
             <ButtomElement type={ buttonAttr.type } classNameButton= { buttonAttr.classes } label= { buttonAttr.label } />
        </div>
    </form>

}

export default FormAddRouter;
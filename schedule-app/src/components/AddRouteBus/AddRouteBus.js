import FormElement from '../FormElement/FormElement';

const AddRouteBus = () => {

    const dataAddRouteBus = {
        departure: '',
        arrive: '',
        departure_hours: 0
    }

    const classesInput= "input";
    const classesButton = "button_submit";

    const attr = [ {
            name_label: "departure",
            label: "Lugar de Salida",
            type: "text" 
    },
        {
            name_label: "arrive",
            label: "Lugar de Llegada",
            type: "text"
        },
        {
            name_label: "departure_hours",
            label: "Hora",
            type: "number", 
            min: '1',
            max: '24'
        },
        {
            name_label: "departure_min",
            label: "Minutos",
            type: "number", 
            min: '00',
            max: '60'
        },
        {
            name_label: "arrive_hours",
            label: "Hora",
            type: "number",
            min: '1',
            max: '24'
        }, 
        {
            name_label: "arrive_min",
            label: "Minutos",
            type: "number", 
            min: '00',
            max: '60'
        }
    ];

    const itemsButtom = {
        type : 'submit',
        label: 'Agregar nueva ruta'
    } 

    const savedFormHandler = (data) => {
       console.log('Estoy en add routes ya ', data);
       if (data.target === 'departure') {
           dataAddRouteBus.departure = data.value;
       }
       if (data.target === 'arrive') {
        dataAddRouteBus.arrive = data.value;
       }
       if (data.target === 'departure_hours') {
        dataAddRouteBus.departure_hours = data.value;
       }
    }
    
    const addRouteHandle = (event) => {
        event.preventDefault();
        console.log("Estpy funcionando");
        console.log (dataAddRouteBus);
    }

    return (<div>
                <FormElement
                    name = "formRoutes" 
                    action= { addRouteHandle } 
                    items= { attr } 
                    classes={classesInput} 
                    itemsButton = { itemsButtom } 
                    classButton= { classesButton }
                    onSaved = { savedFormHandler }
                    />
        </div>);
}

export default AddRouteBus;
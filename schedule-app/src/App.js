import { useState, Fragment } from 'react';

import './App.css';
import DisplayInfoForm from './components/FormElement/DisplayInfoForm';

import FormAddRouter from './components/FormElement/FormAddRoute';
import SelectTransport from './components/SelectTransport/SelectTransport';

// Agregar schedule

const listRutasBuses = [
  {
    id: Math.random().toString(),
    departure:'San Jose',
    arrive: 'Heredia',
    schedule: [
      {
        departure_hour: '2',
        departure_minute: '20',
        departure_time: 'pm',
        arrive_hour: '4',
        arrive_minute: '30',
        arrive_time: 'pm'
      }
    ],
    price_ticket: '300'
  },
  {
    id: Math.random().toString(),
    departure:'San Jose',
    arrive: 'Cartago',
    schedule: [
      {
        departure_hour: '2',
        departure_minute: '20',
        departure_time: 'pm',
        arrive_hour: '4',
        arrive_minute: '30',
        arrive_time: 'pm'
      }
    ],
    price_ticket: '300'
  }
];



function App() {

  const [routesList, setRoutesList] = useState(listRutasBuses);

  const newRouteData = (data) => {
    console.log('Info App', data);
    setRoutesList( (prevRoutesList) => {
      return [...prevRoutesList, data];
    } );
  }

  return (
    <div className="App">
      <Fragment>
          <SelectTransport />
          <FormAddRouter onSaveData={ newRouteData }/>
          <DisplayInfoForm items= {routesList} />
      </Fragment>
    </div>
  );
}

export default App;

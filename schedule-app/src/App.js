import { useState, Fragment, useContext } from 'react';

import './App.css';
import DisplayInfoForm from './components/FormElement/DisplayInfoForm';

import FormAddRouter from './components/FormElement/FormAddRoute';
import SelectTransport from './components/SelectTransport/SelectTransport';
import Prueba from './components/SelectTransport/Prueba';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import MainHeader from './components/MainHeader/MainHeader';
import AuthContext from './store/auth-context';

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
  const ctx = useContext(AuthContext);

  const newRouteData = (data) => {
    console.log('Info App', data);
    setRoutesList( (prevRoutesList) => {
      return [...prevRoutesList, data];
    } );
  }

  const datosPrueba = {
    user: 'Annia',
    id: '1'
    }
  
  const recivedData = data => {
    console.log (data);
  }


  return (
      <Fragment>
          <MainHeader />
            <main>
                {!ctx.isLoggedIn && <Login /> }
                {ctx.isLoggedIn && <Home /> }
            </main>
          <SelectTransport />
          { !ctx.isLoggedIn && <DisplayInfoForm items= {routesList} />}
          { ctx.isLoggedIn && <FormAddRouter onSaveData={ newRouteData } />}
          <Prueba onHandlePrueba={datosPrueba} onBackResponsive={recivedData}/>
      </Fragment>
  );
}

export default App;

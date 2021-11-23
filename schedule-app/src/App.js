import { useState, Fragment } from 'react';

import './App.css';
import DisplayInfoForm from './components/FormElement/DisplayInfoForm';

import FormAddRouter from './components/FormElement/FormAddRoute';
import SelectTransport from './components/SelectTransport/SelectTransport';
import Prueba from './components/SelectTransport/Prueba';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import MainHeader from './components/MainHeader/MainHeader';

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
  const [isLoggedIn, setIsLoggedIn] = useState(false);

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

  const isLogin = data => {
    console.log(data);
  }

  const loginHandle = ( data ) => {
    console.log (data);
    setIsLoggedIn(true);
  }

  const logoutHandle = () => {
    setIsLoggedIn(false);
  }


  return (
    <div className="App">
      <Fragment>
          <MainHeader isAuthenticated={isLoggedIn} onLogout= { logoutHandle }/>
          {!isLoggedIn && <Login onLogin = { loginHandle } /> }
          {isLoggedIn && <Home onLogin = { isLogin } /> }
          <SelectTransport />
          { !isLoggedIn && <DisplayInfoForm items= {routesList} />}
          { isLoggedIn && <FormAddRouter onSaveData={ newRouteData } />}
          <Prueba onHandlePrueba={datosPrueba} onBackResponsive={recivedData}/>
      </Fragment>
    </div>
  );
}

export default App;

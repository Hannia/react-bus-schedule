import { useState, Fragment, useContext } from 'react';

import clasess from './App.module.css';
import DisplayInfoForm from './components/FormElement/DisplayInfoForm';

import FormAddRouter from './components/FormElement/FormAddRoute';
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
      },
      {
        departure_hour: '3',
        departure_minute: '40',
        departure_time: 'pm',
        arrive_hour: '5',
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

  return (
      <Fragment>
          <MainHeader />
                {ctx.showLogin && <Login />}
                {ctx.isLoggedIn && <Home /> }
          <div className= {clasess.content}>
              { !ctx.isLoggedIn && <DisplayInfoForm items= {routesList} />}
              { ctx.isLoggedIn && <FormAddRouter onSaveData={ newRouteData } />}
          </div>

      </Fragment>
  );
}

export default App;

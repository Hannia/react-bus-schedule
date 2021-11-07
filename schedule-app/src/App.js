import { Fragment } from 'react';

import './App.css';

import FormAddRouter from './components/FormElement/FormAddRoute';
import SelectTransport from './components/SelectTransport/SelectTransport';


function App() {
  return (
    <div className="App">
      <Fragment>
          <SelectTransport />
          <FormAddRouter />
      </Fragment>
    </div>
  );
}

export default App;

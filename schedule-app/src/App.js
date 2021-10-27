import './App.css';

import FormAddRouter from './components/FormElement/FormAddRoute';
import SelectTransport from './components/SelectTransport/SelectTransport';
import Prueba from './components/SelectTransport/prueba';





function App() {
  return (
    <div className="App">
      <div>
          <SelectTransport />
          <FormAddRouter />
      </div>
    </div>
  );
}

export default App;

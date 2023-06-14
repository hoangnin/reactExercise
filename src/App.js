import { Component } from 'react';
import Main from '../src/Components/MainComponent';
import { BrowserRouter } from 'react-router-dom';
import ControlledForm from './Components/FormControllerComponent';
import UncontrolledForm from './Components/FormUncontrollerComponent';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Main />
          <ControlledForm />
          <UncontrolledForm />
        </div>
      </BrowserRouter>


    );
  }

}


export default App;

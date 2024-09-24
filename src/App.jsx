import './App.css';
// import Navbar from './components/Navbar';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import {Switch,Route} from 'react-router-dom';
function App() {
  return (
    <>
      <Switch>
        
      <Home/>
      </Switch>
    </>
  );
}

export default App;

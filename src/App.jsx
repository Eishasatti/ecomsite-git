import './App.css';
// import Navbar from './components/Navbar';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import Products from './components/Products';

import Navbar from '/.components/Navbar';
import {Switch,Route} from 'react-router-dom';
import Product from './components/Product';
function App() {
  return (
    <>
    <Navbar/>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/products' component={Products}/>
        <Route exact path='/products/:id' component={Product}/>
        
      
      </Switch>
    </>
  );
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom';
import Signup from './components/Signup/Signup';
import Login from './components/Login/Login';
import Homepage from './components/Homepage/Homepage';
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom';
import Placeorder from './components/Placeorder/Placeorder';

function App() {
  return (

    <Router>
       <div>
         <Switch>
         <Route exact path="/"> <Signup/> </Route>
         <Route path="/Login"> <Login/> </Route>
         <Route path="/Homepage"> <Homepage/> </Route>
         <Route path="/Placeorder"> <Placeorder/> </Route>
         </Switch>
       </div>
    </Router>
  ); 
}

export default App;

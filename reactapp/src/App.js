import React from 'react';
import ReactDOM from 'react-dom';
import Signup from './components/Signup/Signup';
import Login from './components/Login/Login';
import Homepage from './components/Homepage/Homepage';
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom';
import Placeorder from './components/Placeorder/Placeorder';
import Myorder from './components/Myorder/Myorder';
import Admingifts from './components/Admingifts/Admingifts';
import Editgifts from './components/Admingifts/Editgifts';
import Adminthemes from './components/Adminthemes/Adminthemes';
import Editthemes from './components/Adminthemes/Editthemes';

function App() {
  return (

    <Router>
       <div>
         <Switch>
         <Route exact path="/"> <Signup/> </Route>
         <Route path="/Login"> <Login/> </Route>
         <Route path="/Homepage"> <Homepage/> </Route>
         <Route path="/Placeorder"> <Placeorder/> </Route>
         <Route path="/Myorder"> <Myorder/> </Route>
         <Route path="/Admingifts"> <Admingifts/> </Route>
         <Route path="/Editgifts"><Editgifts/></Route>
         <Route path="/Adminthemes"><Adminthemes/></Route>
         <Route path="/Editthemes"><Editthemes/></Route>
         </Switch>
       </div>
    </Router>
  ); 
}

export default App;

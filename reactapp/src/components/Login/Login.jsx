import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import {Link} from 'react-router-dom';

function Login(){
    return(
<div class="text-center bg-0 h1 ml-50 ">
      <div class="bg-primary"> <span class ="navbar-brand bg-primary align-middle  text-light">Login</span></div>
<br></br>
<div class="input-group mb-3" id="email">
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Enter email"></input>
</div>
<div  class="input-group mb-3" id="password">
  <input type="password" class="form-control" id="exampleFormControlInput1" placeholder="Password"></input>
  </div>
  <br></br>
<div  class="input-group mb-3" class="text-light"><button type="button" class="btn btn-primary" id="loginButton">Login</button></div>
<div class="h5">New User/admin?<Link to="/Signup" class="nav-link">Signup</Link></div>
</div>
    );
}
export default Login;
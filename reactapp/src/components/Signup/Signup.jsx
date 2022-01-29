import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import {Link} from 'react-router-dom';

function Signup() {
    return (
     <div class="text-center bg-0 h1 ">
      <div class="bg-primary"> <span class ="navbar-brand bg-primary align-middle  text-light">Register</span></div>
<br></br>
       <div class="input-group mb-3">
  <input type="text" class="form-control" aria-label="Text input with dropdown button" placeholder="Enter admin/user"></input>
  <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false"></button>
  <ul class="dropdown-menu dropdown-menu-end">
    <li><a class="dropdown-item" id ="admin" href="#">Admin</a></li>
    <li><a class="dropdown-item" id ="user"href="#">User</a></li>
  </ul>
</div>
<div id="email" class="input-group mb-3">
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Enter email"></input>
</div>
<div id="username" class="input-group mb-3">
  <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Enter username"></input>
</div>
<div id="mobileNumber" class="input-group mb-3">
  <input type="number" class="form-control" id="exampleFormControlInput1" placeholder="Enter Mobilenumber"></input>
</div>
<div id="password" class="input-group mb-3">
  <input type="password" class="form-control" id="exampleFormControlInput1" placeholder="Password"></input>
</div>
<div id="confirmPassword" class="input-group mb-3">
  <input type="password" class="form-control" id="exampleFormControlInput1" placeholder="Confirm Password"></input>
</div>
<br></br>
<div class="text-light"><Link to="/Homepage"  type="button"class="btn btn-primary">Submit</Link></div>
<div class="h5">Already a user?<Link to="/Login" class="nav-link">Login</Link></div>
</div>

    );
  }
  
  export default Signup;
  

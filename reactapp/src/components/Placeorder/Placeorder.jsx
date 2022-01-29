import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import {Link} from 'react-router-dom';

function Placeorder(){
    return(
        <div class=" text-center " >
<nav class="navbar navbar-expand-lg navbar-dark bg-primary text-light">
  <div class="container-fluid  text-center">
    <a class="navbar-brand text-center"  href="#">Home</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
      <div class="navbar-nav ">
        <a class="nav-link active" aria-current="page" href="#">My orders</a>
        <Link to="/Signup" class="nav-link">Logout</Link>
      </div>
   </div> 
</div>
</nav>
<br></br>
<br></br>



<div class="container-fluid mb-5">
<div class="row " >

<div class="col-6 mb-5">

<div id="orderName" class="input-group mb-3">
  <input type="text" class="form-control" id="orderName" placeholder="Enter your name"></input>
</div>

<div id="orderDate" class="input-group mb-3">
  <input placeholder="Enter the order date" type="date" class="form-control" id="orderDate" ></input>
</div>

<div id="orderAddress" class="input-group mb-3">
  <input type="address" class="form-control" id="orderAddress" placeholder="Enter your Address"></input>
</div>

<div id="orderPhoneNo" class="input-group mb-3">
  <input type="mobilenumber" class="form-control" id="orderPhoneNo" placeholder="Enter your phone number"></input>
</div>

<div id="orderEmailId" class="input-group mb-3">
  <input type="email" class="form-control" id="orderEmailId" placeholder="Enter your email id"></input>
</div>

</div>

<div class="col-6">


<div id="orderPrice" class="input-group mb-3">
  <input type="text" class="form-control" id="orderPrice" placeholder="Price 20$"></input>
</div>

<div id="giftModel" class="input-group mb-3">
  <input type="text" class="form-control" id="giftModel" placeholder="Gift Model: Arcylic Board"></input>
</div>

<div id="orderDescription" class="input-group mb-3">
  <input type="text" class="form-control" id="orderDescription" placeholder="order description"></input>
</div>

<div class="input-group">
  <select class="form-select" id="orderCategory">
    <option selected>Select the Theme Model</option>
    <option class="form-check-input" value="1" type="checkbox">Photo Design</option>
    <option value="2">Pattern</option>
    <option value="3">Face Pattern</option>
    <option value="4">Wrist Chain</option>
  </select>
  <label class="input-group-text" for="inputGroupSelect02">Options</label>
</div>
<div class=" position-relative" id="placeOrder">
<button type="button" class="btn btn-primary position-absolute bottom-0 end-0 ">Place order</button>
<br></br>
<br></br>
<br></br>
<br></br>
</div>

</div>

</div>
</div>






</div>

    );
}
export default Placeorder;
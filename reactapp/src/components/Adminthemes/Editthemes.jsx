import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import {Link} from 'react-router-dom';
import { FaEdit , FaTrash} from "react-icons/fa"

function Editthemes(){
    return(
<div class=" text-center " >
<nav class="navbar navbar-expand-lg navbar-dark bg-primary text-light">
    <div class="container-fluid  text-center">
    <a class="navbar-brand text-center"  href="#">Gifts</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
      <div class="navbar-nav ">
      <a class="nav-link active" aria-current="page" href="#">Theme</a>
      <a class="nav-link active" aria-current="page" href="#">Orders</a>
      <Link to="/Signup" class="nav-link">Logout</Link>
      </div>
   </div> 
</div>
</nav>
<br></br>



<div class="container-fluid mb-5">
<div class="row " >

<div class="col-6 mb-3">

<div class="input-group mb-5">
  <input type="search" class="form-control rounded" placeholder="Type here to search Theme" aria-label="Search" aria-describedby="search-addon" />
  <button type="button" class="btn btn-primary">search</button>
</div>

<div class="row border mb-5 text-start">
    <div class="col-8 text-left">
        <p class="h4 text-left">Theme Name: Text Printing</p>
        <p class="h4 text-left">Theme Price: Rs.200</p>
        <p class="h4 text-left"> Theme Description: Various Colours with 3D</p>
    </div>
    <div class="col-4 h4">
    <FaEdit id="editOrder"/> <br></br> <br></br>
    <FaTrash id="deleteOrder"/>
    </div>
  </div>


  <div class="row border  text-start">
    <div class="col-8 text-left">
        <p class="h4 text-left">Theme Name: Frame Printing</p>
        <p class="h4 text-left">Theme Price: Rs.150</p>
        <p class="h4 text-left"> Theme Description: Handmade Print</p>
    </div>
    <div class="col-4 h4">
    <FaEdit id="editOrder"/> <br></br> <br></br>
    <FaTrash id="deleteOrder"/>
    </div>
  </div>





</div>



<div class="col-6 bg-info rounded-10">
<br></br>    
<div class="h4 mb-5 rounded-3 text-light">Edit Theme</div>
<div class="input-group   mb-5">
  <input type="text" class="form-control" id="editThemeName" placeholder="enter the theme name"></input>
</div>

<div class="input-group   mb-5">
  <input type="text" class="form-control" id="editThemePrice" placeholder="enter theme price"></input>
</div>

<div class="input-group   mb-5">
  <input type="text" class="form-control" id="editThemeDescription" placeholder="enter the description"></input>
</div>

<button type="button" class="btn btn-primary rounded-3" id="update">Update</button>
<br></br>
<br></br>
</div>

</div>





</div>
</div>






    );
}
export default Editthemes;
import React from "react";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro';

// import {Nav,Link,Container} from 'react-bootstrap';
import { Link  } from "react-router-dom";
import logo from "../../../../Images/logo.png";
import "./Navbar.css"

const Navbar = () => {
  return (
    <nav class="navbar-expand-lg navbar navbar-light container custom-nav">
      <form class="form-inline">
        <input
          class="form-control"
          type="search"
          placeholder="Search..."
          aria-label="Search"
        />
        {/* <button class="btn btn-outline-success" type="submit">Search</button> */}
      </form>
      <a class="navbar-brand" href="#">
        <img src={logo} alt="" />
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav-item">
            <Link class="nav-link active " aria-current="page" to="/home">
              Home
            </Link>
          </li>
         
          <li class="nav-item">
            <Link class="nav-link" to="/about">
              About Us
            </Link>
            
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/message">
              Message
            </Link>
            
          </li>
          


          <li class="nav-item">
            <Link class="nav-link" to="/project">
              Project
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/service">
              Services
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/client">
              Clients
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/contact">
              Contact
            </Link>
          </li>
     
          <li class="nav-item">
            <Link class="nav-link" to="/register">
            <i class="fas fa-user-plus"></i>
         

              Register
            </Link>
            </li>
          <li class="nav-item">
            <Link class="nav-link" to="/login">
           
            <i class="fas duotone fa-user"></i>
            

              Login
            </Link>
          </li>
     

              

        </ul>
      </div>


 

    </nav>

    


  );
};

export default Navbar;

import React from "react";
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
          {/* <li class="nav-item dropdown">
                <Link 
                  class="nav-link dropdown-toggle"
                  to="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown link
                </Link>
                <ul
                  class="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <a class="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li> */}
 <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown link
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
      
              

        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

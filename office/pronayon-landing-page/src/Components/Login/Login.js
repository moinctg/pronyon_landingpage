import React, { useState } from 'react';
import { NavLink,useLocation,useNavigate,Link}from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Modal,Button} from 'react-bootstrap';

import google from '../../Images/google.jpg'
import "./Login.css"
import useAuth  from './../../hook/UseAuth'



const Login = () => {

const [loginData,setLoginData] = useState({});
const { user, googleSignIn, loginUser, modal, setModal } = useAuth()
  
const location = useLocation();
const navigator = useNavigate();



  const handleOnBlur = e =>{
    const field = e.target.name;
    const value = e.target.value;

  const newloginData = {...loginData};
  newloginData[field] = value;
  console.log(newloginData)
  setLoginData(newloginData)
  }
  const handleLoginSubmit = e => {
    e.preventDefault()
    loginUser({...loginData, location,navigator})

  }

  const handleGoogleSignIn=() =>{
    googleSignIn(location, navigator)
  }
  
    return (
        <div>
    
            <div className="form-style-10">
        <h1>Sign In Now!<span>Login  and tell us what you think of the site!</span></h1>
        <Modal show={modal}>
        <Modal.Header>
          <Modal.Title>Login Successful !</Modal.Title>
        </Modal.Header>
        <Modal.Body>Hello Mr./Ms. {user?.displayName} You have successfully logged in !</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={ ()=>setModal(false)}>
            <Link style={{color:'white',textDecoration:'none'}} to="/dashboard">Go To Admin Panel </Link>
          </Button>
        </Modal.Footer>
        </Modal>
        <form onSubmit={handleLoginSubmit}>
          
          <div className="section"><span>1</span>Email  </div>
          <div className="inner-wrap">
            <label>Email Address <input type="email" onBlur={handleOnBlur} name="email" id='email' required /></label>
        
          </div>
          <div className="section"><span>2</span>Passwords</div>
          <div className="inner-wrap">
            <label>Password <input type="password" onBlur={handleOnBlur} id="password" name="password"  required /></label>
        
          </div>
          <div className="button-section">
            <input type="submit"  name="Sign In" />
            
 
          </div>
        </form>
        <div className="login_part_text ">
                        <NavLink 
                            style={{ textDecoration: 'none', color:'black'}}
                            to="/register">
                            <button className="button button-contactForm boxed-btn ">New User? Please Register</button>
                        </NavLink>
                        <br/>
                        
         <button className="button" onClick={ ()=> googleSignIn(location,navigator) }><img style={{width:'30px', marginLeft:'30px'}} src={google} alt="" /></button>
            </div>
            
            </div>
            </div>
         
    
    
    );
};

export default Login;
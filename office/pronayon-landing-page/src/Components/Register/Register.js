import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./Register.css"
import {Modal,Button} from 'react-bootstrap';
import UseAuth  from '../../hook/UseAuth';

const Register = () => {
  const  [registerData,setRegisterData] = useState({})
  const { registerUser,modal,setModal,user } = UseAuth();

  const handleOnChanged = e =>{
    const field = e.target.name
    const value = e.target.value
    const newRegisterData = {...registerData}
    newRegisterData[field] = value
    console.log(newRegisterData)
    setRegisterData(newRegisterData)
  }
  const handleRegisterSubmit = e =>{
    e.preventDefault()
    registerUser(registerData)
  }
  
    return (
        <div>
            <div className="form-style-10">
        <h1>Sign Up Now!<span>Sign up and tell us what you think of the site!</span></h1>
        <Modal show={modal}>
        <Modal.Header>
          <Modal.Title>Register Successful !</Modal.Title>
        </Modal.Header>
        <Modal.Body>Hello Mr./Ms. {user?.displayName} You have successfully logged in !</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={ ()=>setModal(false)}>
            <Link style={{color:'white',textDecoration:'none'}} to="/login">Go To Login</Link>
          </Button>
        </Modal.Footer>
        </Modal>
        <form onSubmit={handleRegisterSubmit}>
          <div className="section"><span>1</span>First Name &amp; Address</div>
          <div className="inner-wrap">
            <label>Your Full Name <input type="text" name="name" id="name" onBlur={handleOnChanged}  required /></label>
            <label>Address <textarea name="address" defaultValue={""} id='address' onBlur={handleOnChanged} required  /></label>
          </div>
          <div className="section"><span>2</span>Email &amp; Phone</div>
          <div className="inner-wrap">
            <label>Email Address <input type="email" name="email" id='email'  onBlur={handleOnChanged} required /></label>
            <label>Phone Number <input type="text" name="phone" id='phone' onBlur={handleOnChanged}  required/> </label>
          </div>
          <div className="section"><span>3</span>Passwords</div>
          <div className="inner-wrap">
 
            <label>Password <input type="password" name="password" id='password' onBlur={handleOnChanged}  required /></label>
            <label>Confirm Password <input type="password" name="rePassword" id='rePassword'  onBlur={handleOnChanged} required /></label>
          </div>
          <div className="button-section">
          
            <span className="privacy-policy">
              <input type="checkbox" name="field7"  onBlur={handleOnChanged}/>You agree to our Terms and Policy. 
            </span>
            <input type="submit"  value='Register' />
          </div>
        </form>
      </div>
        </div>
    );
};

export default Register;
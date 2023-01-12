import React from 'react';
import './Footer.css';
import img from '../../../../Images/footerImg.png';
import logo from '../../../../Images/logo.png';

const Footer = () => {
    return (
        <div className="container footer-img ">
           
            <div className="row pt-5">
            {/* <img src={img} alt=""/> */}
            <div className="col-md-4">
                <h1 className=''>Let us know your project</h1>
                <img className="p-5" src={logo} alt=""/>

            </div>
            <div className="col-md-4">
                <h5 className='p-2'>Contact Us</h5>
                 <p className='p-2'>031-22221222</p> 
                <p>info@pronayonbd.com</p>
                <div className='row p-4'>
                                <div className='col-3 '>
                                    <a href="#">
                                    <i class="fab fa-facebook fontawesome-style"></i>
                                    </a>
                                </div>
                                <div className='col-3 '>
                                    <a href="#">
                                    <i class="fab fa-instagram fontawesome-style"></i>
                                    </a>
                                </div>
                                <div className='col-3 mx-auto'>
                                    <a href="#">
                                    <i class="fab fa-twitter fontawesome-style"></i>
                                    </a>
                                </div>
                                <div className='col-3 mx-auto'>
                                    <a href="#">
                                    <i class="fab fa-instagram fontawesome-style"></i>
                                    </a>
                                </div>
                                </div>


            </div>
            <div className="col-md-4">
                <h4 className='p-2'>Our Office</h4>
                <h6 className="p-2">Commercial Court,95,Agrabad C/A,Chittaong</h6>

                <h6 className="p-2">All Right Reserved PRONAYON</h6>

            </div>

            </div>
         
        </div>
    );
};

export default Footer;
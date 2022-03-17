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
                <h2>Let us know your project</h2>
                <img className="p-3" src={logo} alt=""/>

            </div>
            <div className="col-md-4">
                <h4>Contact Us</h4>
                <h6>031-22221222</h6>
                <h6>info@pronayonbd.com</h6>
                <div className='row'>
                                <div className='col-3 mx-auto'>
                                    <a href="#">
                                    <i class="fab fa-facebook fontawesome-style"></i>
                                    </a>
                                </div>
                                <div className='col-3 mx-auto'>
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
                <h4>Our Office</h4>
                <h6 className="p-4">Commercial Court,95,Agrabad R/A,Chittaong</h6>

                <h6 className="p-4">All Right Reserved PRONAYON</h6>

            </div>

            </div>
         
        </div>
    );
};

export default Footer;
import React from 'react';
import img from '../../../../Images/footerImg.png';
import logo from '../../../../Images/logo.png';

const Footer = () => {
    return (
        <div className="container">
           
            <div className="row">
            <img src={img} alt=""/>
            <div className="col-md-4">
                <h2>Let us know your project</h2>
                <img src={logo} alt=""/>

            </div>
            <div className="col-md-4">

            </div>
            <div className="col-md-4">

            </div>

            </div>
           <h3>This is footer section</h3> 
        </div>
    );
};

export default Footer;
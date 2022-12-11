import React from 'react';
import "./About.css";

 import img1 from '../../../../Images/about.jpg';

const About = () => {
    return (
        <div className="container pt-4">
            <div className="row">
                <div className="col-lg-12">
                    <img src={img1}  alt=""/>


                </div>
                </div>
                <div className='row'>

                <div className="col-lg-12 p-4">

                <h1 className='text-center head-h1'>PRONAYON</h1>
            <p>
PRONAYON, a sister concern of Capco Group, is one of the most dynamic Architectural, Engineering, and Planning Consultants in Bangladesh with market leading position in Chittagong. As a stimulus platform of enthusiastic Architects and Engineers, it has anchored its proud journey in 1990. Though initially started with a few young Architects and engineers, PRONAYON, is now a committed and competent group of multi-disci- plined professionals.
It is a team of committed and versatile professionals, dedicated to idealize new thinking and creating bewitching designs and architecture. We, the PRONAYON family, is promise bound to assess and evaluate your inner often unexpressed desires and dreams and incarnate them into ulti- mate pleasant reality.
From the very beginning, PRONAYON has been carving its luminous footmark with innovative creation. Throughout the journey, we are keenly fo- cused to sharpen the advancement of technological edge and related soft skills and human capital to meet inclreasingly complex challenges of the time as well as the criteria of diverse clientele. Through this relentless pursuit of aesthetic quality and functional perfection, PRONAYON has been thrust to a highly acclaimed stature. We shall treat our success story as a continuous process in an unrelenting pursuit of the ideals we value. Our unwinking sight is vigilant on your forthcoming update demands.
Our strength is your satisfaction.
In quest of innovative and sustainable design solutions for a wide range of developments through multi-disciplinary expertise in architecture, en- gineering and interior design, the maestro - Architect Sohail M Shakoor envisioned in 1990 to build a dedicated platform to realise the goal of promoting the design profession as an ethically socially and environmentally conscious creative movement leading to the formation of PRONAY- ON. His prime focus is always designing built environments that enrich and transform people's lives</p>
                </div>
            </div>
           
        </div>
    );
};

export default About;
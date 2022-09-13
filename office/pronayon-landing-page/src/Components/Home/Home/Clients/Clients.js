import React from 'react';
import './Clients.css';
import img1 from '../../../../Images/Group 84.png';
import img2 from '../../../../Images/Group 85.png';
import img3 from '../../../../Images/Group 86.png';
import img4 from '../../../../Images/Group 87.png';
import img5 from '../../../../Images/Group 88.png';
import img6 from '../../../../Images/Group 89.png';
import img7 from '../../../../Images/Group 91.png';
import img8 from '../../../../Images/Group 92.png';
import img9 from '../../../../Images/Group 93.png';
import img10 from '../../../../Images/Group 95.png';

const Clients = () => {
    return (
        <div className="container pt-5">
            <div className='row '>
                <div className='col-lg-6 p-4 '>
                    <h1 className=" client-h1 p-4 ">Clients</h1>
                    <p className='ps-3 client-txt'>We are dedicated to diminishing our impact on the environment. We are also committed to continually improving our procedures in terms of product development, supply, packaging and distribution in an effort to minimize our environmental footprint</p>

                </div>
                <div className='col-lg-6 p-5'>
                    <div class="row row-cols-1 row-cols-md-3 g-4">
                        <div class="col">
                            <div class="card h-100">
                                <img src={img1} class="card-img-top" alt="..." />


                            </div>
                        </div>
                        <br/>
                        <div class="col">
                            <div class="card h-100  g-4">
                                <img src={img2} class="card-img-top" alt="..." />


                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100">
                                <img src={img3} class="card-img-top" alt="..." />


                            </div>
                        </div>
                    </div>
                    <br/>


                    <div class="row row-cols-1 row-cols-md-3 g-4">
                        <div class="col">
                            <div class="card h-100">
                                <img src={img4} class="card-img-top" alt="..." />


                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100">
                                <img src={img5} class="card-img-top" alt="..." />


                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100">
                                <img src={img6} class="card-img-top" alt="..." />


                            </div>
                        </div>
                    </div>
                    <br/>
            
                    <div class="row row-cols-1 row-cols-md-3 g-4">
                        <div class="col">
                            <div class="card h-100">
                                <img src={img7} class="card-img-top" alt="..." />


                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100">
                                <img src={img8} class="card-img-top" alt="..." />


                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100">
                                <img src={img9} class="card-img-top" alt="..." />


                            </div>
                            </div>
                        </div>
                    </div>
                </div>

       

           
                

         
            
        </div>
    );
};

export default Clients;
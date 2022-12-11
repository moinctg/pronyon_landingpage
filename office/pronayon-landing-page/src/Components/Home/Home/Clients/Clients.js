import React from 'react';
// import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import './Clients.css';
//import Swiper Sytles
// import "swiper/css";
// import "swiper/css/grid";
// import "swiper/css/pagination";
// import required modules
import { Grid, Pagination } from "swiper";


import img1 from '../../../../Images/bsrm.png';
import img2 from '../../../../Images/kepz.jpg';
import img3 from '../../../../Images/ctgclub.png';
import img4 from '../../../../Images/youngone.png';
import img5 from '../../../../Images/Heiderbag.png';
import img6 from '../../../../Images/bgc.png';
import img7 from '../../../../Images/ebl.png';
import img8 from '../../../../Images/mtb.png';
import img9 from '../../../../Images/bbl.png';
import img10 from '../../../../Images/aibl.png';
import img11 from '../../../../Images/kepz.jpg';
import img12 from '../../../../Images/puc.png';
import img13 from '../../../../Images/rackitt.png';
import img14 from '../../../../Images/sheema.png';
import img15 from '../../../../Images/unilever.png';
// import img16 from '../../../../Images/unilever.png';

const Clients = () => {
    return (
        <div className="container pt-5">
            <div className="row" data-aos="fade-up" data-aos-delay="1000">
                <div className='col-lg-6 p-4 '>
                    <h1 className=" client-h1 p-4 ">Clients</h1>
                    <p className='ps-3 client-txt'>We are dedicated to diminishing our impact on the environment. We are also committed to continually improving our procedures in terms of product development, supply, packaging and distribution in an effort to minimize our environmental footprint</p>

                </div>
                <div className='col-lg-6 p-5'>
                    <div class="row row-cols-1 row-cols-md-3 g-4">
                        <div class="col">
                            <div class="card h-75">
                                <img src={img1} class="card-img-top" alt="..." />


                            </div>
                        </div>
                        <br/>
                        <div class="col">
                            <div class="card h-75  g-4">
                                <img src={img2} class="card-img-top" alt="..." />


                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-75 g-4">
                                <img src={img3} class="card-img-top" alt="..." />


                            </div>
                        </div>
                    </div>
                    <br/>


                    <div class="row row-cols-1 row-cols-md-3 g-4">
                        <div class="col">
                            <div class="card h-75">
                                <img src={img4} class="card-img-top" alt="..." />


                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-75 ">
                                <img src={img5} class="card-img-top" alt="..." />


                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-75">
                                <img src={img6} class="card-img-top" alt="..." />


                            </div>
                        </div>
                    </div>
                    <br/>
            
                    <div class="row row-cols-1 row-cols-md-3 g-6">
                        <div class="col">
                            <div class="card h-75">
                                <img src={img7} class="card-img-top" alt="..." />


                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-75">
                                <img src={img8} class="card-img-top" alt="..." />


                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-75">
                                <img src={img9} class="card-img-top" alt="..." />


                            </div>
                            </div>
                        </div>
                    <div class="row row-cols-1 row-cols-md-3 g-4">
                        <div class="col ">
                            <div class="card h-75 ">
                                <img src={img10} class="card-img-top" alt="..." />


                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-75">
                                <img src={img11} class="card-img-top" alt="..." />


                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100">
                                <img src={img12} class="card-img-top" alt="..." />


                            </div>
                            </div>
                        </div>
                    
                    <div class="row row-cols-1 row-cols-md-3 g-4">
                        <div class="col">
                            <div class="card h-75">
                                <img src={img13} class="card-img-top" alt="..." />


                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-75">
                                <img src={img14} class="card-img-top" alt="..." />


                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-75">
                                <img src={img15} class="card-img-top" alt="..." />


                            </div>
                            
                           
                        </div>
                    </div>
                </div>
                </div>
                </div>

       

           
                

         
    //             {/* <>
    //   <Swiper
    //     slidesPerView={3}
    //     grid={{
    //       rows: 4
    //     }}
    //     spaceBetween={30}
    //     pagination={{
    //       clickable: true
    //     }}
    //     modules={[Grid, Pagination]}
    //     className="mySwiper"
    //   >
    //     <SwiperSlide>Slide 1</SwiperSlide>
    //     <SwiperSlide>Slide 2</SwiperSlide>
    //     <SwiperSlide>Slide 3</SwiperSlide>
    //     <SwiperSlide>Slide 4</SwiperSlide>
    //     <SwiperSlide>Slide 5</SwiperSlide>
    //     <SwiperSlide>Slide 6</SwiperSlide>
    //     <SwiperSlide>Slide 7</SwiperSlide>
    //     <SwiperSlide>Slide 8</SwiperSlide>
    //     <SwiperSlide>Slide 9</SwiperSlide>
    //   </Swiper>
    // </> */}
        

    );
};

export default Clients;
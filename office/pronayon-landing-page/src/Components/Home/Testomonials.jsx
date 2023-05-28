import React, {useEffect, useRef,useState} from 'react';
import {Swiper, SwiperSlide } from 'swiper/react';
import  "./Testomonials.module.css";
// Import Swiper styles
// import "swiper/css";
// import "swiper/css/scrollbar";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import required modules
import { Keyboard, Scrollbar, Navigation, Pagination } from "swiper";


const Testomonials = () => {
  const [testomonial,setTestomonial] =  useState ([])

  useEffect (()=>{
    fetch('https://pronayon-server-side.onrender.com/api/testomonial')
    .then(res=>res.json())
    .then(data=>setTestomonial(data))


  },[])
   
    return (
      <div className='container'>
      <h1 className='p'> Our Client Says..</h1>
      <Swiper
      slidesPerView={4}
      centeredSlides={true}
      spaceBetween={15}
      grabCursor={true}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="mySwiper"
    >
      {testomonial.map(testomonial=>  (
         <SwiperSlide>
          <div>
           
        
     
        
        
        
          
  <div class="col-md-12">
    <div class="card h-100">
      <img src="..." class="card-img-top" alt="..."/>
      <div class="card-body">
       
        <h5 class="card-title"> {testomonial.name} </h5>
        <p class="card-text"> {testomonial.comments}</p>
      </div>
      <div class="card-footer">
        <small class="text-muted">{testomonial.CreateAt}</small>
      </div>
    </div>
  </div>
 

</div>
            
         

          </SwiperSlide>

         ))}
      {/* 
    
      <SwiperSlide>
      <div class="row  g-4">
  <div class="col-md-6">
    <div class="card h-100">
      <img src="..." class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
      <div class="card-footer">
        <small class="text-muted">Last updated 3 mins ago</small>
      </div>
    </div>
  </div>
  <div class="col-md-6">
    <div class="card h-100">
      <img src="..." class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
      </div>
      <div class="card-footer">
        <small class="text-muted">Last updated 3 mins ago</small>
      </div>
    </div>
    </div>
    </div>
      </SwiperSlide>
      <SwiperSlide>
        
      </SwiperSlide>
      {/* <SwiperSlide>Slide 5</SwiperSlide>
      <SwiperSlide>Slide 6</SwiperSlide> */} 

    </Swiper>

</div>
       
          
      
         

 
          
      
    );
};

export default Testomonials;
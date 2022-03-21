import React from 'react';
import maskgroup1 from '../../../../Images/MaskGroup1.png';
import Group1 from '../../../../Images/Group1.png'
// import arc3 from '../../../../Images/arc3.jpg'
import arc4 from '../../../../Images/arc4.jpeg'
import arc6 from '../../../../Images/arc6.jpg'
// import React, { useState } from 'react';
//   import { Swiper, SwiperSlide } from 'swiper/react';
//   import { Thumbs } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import './Banner.css';


const Banner = () => {
    // const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <div>
            {/* <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      ...
    </Swiper> */}

<div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="10000">
      <img src={ Group1} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src={arc6} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src={arc4} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

            <div className="container">
                <div className="row">
                    <div className="col-md-8 p-4">
                        <h5 className="p-3 w-50">PRONAYON, a concern of Capco Group, is one of the most dynamic Architectural, Engineering, and Planning Consultants in Bangladesh with market leading position in Chittagong.</h5>
                        <img className="p-3" src={maskgroup1}  alt=""/>

                    </div>
                    <div className="col-md-4 p-4">
                        <h1>31 </h1>
                        <h6>Years experience</h6>
                        <h1>2000 </h1>
                        <h6>References of projects</h6>
                        <h5>A committed and competent group of multi-deciplined professionals.</h5>
                        <p>It is a team of committed and versatile professionals, dedicated to idealize new thinking and bewitching designs and architecture. We, the PRONAYON family, is promised to evaluate your imaginary concept and to incarnate your dream into the ultimate completion</p>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default Banner;
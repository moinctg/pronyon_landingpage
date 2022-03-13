import React from 'react';
import slide1 from '../../../../Images/Group1.png';
import maskgroup from '../../../../Images/MaskGroup1.png'
// import React, { useState } from 'react';
//   import { Swiper, SwiperSlide } from 'swiper/react';
//   import { Thumbs } from 'swiper';

// Import Swiper styles
import 'swiper/css';


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

            <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={slide1} class="d-block w-100" alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                            <h5>First slide label</h5>
                            <p>Some representative placeholder content for the first slide.</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src={slide1} class="d-block w-100" alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                            <h5>Second slide label</h5>
                            <p>Some representative placeholder content for the second slide.</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src={slide1} class="d-block w-100" alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                            <h5>Third slide label</h5>
                            <p>Some representative placeholder content for the third slide.</p>
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <h5 className="p-4">PRONAYON, a concern of Capco Group, is one of the most dynamic Architectural, Engineering, and Planning Consultants in Bangladesh with market leading position in Chittagong.</h5>
                        <img src={maskgroup}  alt=""/>

                    </div>
                    <div className="col-md-4">
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
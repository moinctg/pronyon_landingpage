import React from "react";
import Group1 from "../../Images/Group1.png";
import img1 from "../../Images/Slide/1.jpg";
import img2 from "../../Images/Slide/2.jpg";
import img3 from "../../Images/Slide/3.jpg";
import img4 from "../../Images/Slide/4.jpg";
import img5 from "../../Images/Slide/5.jpg";
import img6 from "../../Images/Slide/6.jpg";
import img7 from "../../Images/Slide/7.jpg";
import img8 from "../../Images/Slide/8.jpg";
import img9 from "../../Images/Slide/9.jpg";
import SectionHeaderOne from "./Shared/SectionHeaderOne";

// import arc3 from '../../Images/arc3.jpg';

// import React, { useState } from 'react';
//   import { Swiper, SwiperSlide } from 'swiper/react';
//   import { Thumbs } from 'swiper';

// Import Swiper styles
import "swiper/css";
import styles from "./Banner.module.css";

const Banner = () => {
  // const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className="container">
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

      <div
        id="carouselExampleDark"
        class="carousel carousel-dark slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="4"
            aria-label="Slide 5"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="5"
            aria-label="Slide 6"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="6"
            aria-label="Slide 7"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="7"
            aria-label="Slide 8"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="8"
            aria-label="Slide 9"
          ></button>
        </div>
        <div class="carousel-inner ">
          <div class="carousel-item active" data-bs-interval="10000">
            <img src={img1} class="d-block w-100" alt="..." />
            <div
              class="carousel-caption d-none d-md-block"
              data-aos="fade-up"
              data-aos-delay="50"
            >
              {/* <h3 className="text-ornage"> PRONAYON, a sister concern of Capco Group, is one of the most dynamic Architectural, Engineering, and Planning Consultants in Bangladesh with market leading position in Chittagong. As a stimulus platform of enthusiastic Architects and Engineers, it has anchored its proud journey in 1990</h3> */}
              <h1 className="text-white text-center">
                3 Storied Residential Building{" "}
              </h1>
              <p className="text-white  text-center">Client: Mr Shawkat Ali </p>
              <p className="text-white  text-center">
                Site Location:Kulshi,Chittagong
              </p>
            </div>
          </div>
          <div class="carousel-item" data-bs-interval="2000">
            <img src={img2} class="d-block w-100" alt="..." />
            <div
              class="carousel-caption d-none d-md-block"
              data-aos="fade-up"
              data-aos-delay="50"
            >
              <h1 className="text-white  text-center">
                3 Storied Residential Building{" "}
              </h1>
              <p className="text-white  text-center">Client: Mr Shawkat Ali </p>
              <p className="text-white  text-center">
                Site Location:Kulshi,Chittagong
              </p>
            </div>
          </div>
          <div class="carousel-item">
            <img src={img3} class="d-block w-100" alt="..." />
            <div
              class="carousel-caption d-none d-md-block "
              data-aos="fade-up"
              data-aos-delay="50"
            >
              <h1 className="text-white  text-center">Bellevue Hospital </h1>
              <p className="text-white  text-center">Client: Bellevue</p>
              <p className="text-white  text-center">
                Site Location: Panchlaish,Chittagong
              </p>
            </div>
          </div>
          <div class="carousel-item">
            <img src={img4} class="d-block w-100" alt="..." />
            <div
              class="carousel-caption d-none d-md-block"
              data-aos="fade-up"
              data-aos-delay="50"
            >
              <h1 className="text-center text-red">
                Project Name: Airport Road Bridge
              </h1>
              <p className="text-white text-center">
                Client: Chattogram City Corporation
              </p>
              <p className="text-white text-center">
                Site Location: Airport Road,Chittagong
              </p>
            </div>
          </div>
          <div class="carousel-item">
            <img
              src={img5}
              class="d-block w-100"
              alt="..."
              data-aos="fade-up"
              data-aos-delay="50"
            />
            <div class="carousel-caption d-none d-md-block">
              <h1 className="text-center text-white">
                Project Name: Birbikram Zaynul Abedin High School
              </h1>
              <p className="text-white text-center">
                Client: Birbikram Late Zaynul Abedin
              </p>
              <p className="text-white text-center">
                Site Location: Pantrisha Chunati,Lohagara,Chittagong
              </p>
            </div>
          </div>
          <div class="carousel-item">
            <img src={img6} class="d-block w-100" alt="..." />
            <div
              class="carousel-caption d-none d-md-block"
              data-aos="fade-up"
              data-aos-delay="50"
            >
              <h1 className="text-center text-white">
                Project Name: 3 Storied Mosque
              </h1>
              <p className="text-white text-center">Client: Mr.Abdullah</p>
              <p className="text-white text-center">
                Site Location: Chunati,Lohagara,Chittagong
              </p>
            </div>
          </div>
          <div class="carousel-item">
            <img src={img7} class="d-block w-100" alt="..." />
            <div
              class="carousel-caption d-none d-md-block"
              data-aos="fade-up"
              data-aos-delay="50"
            >
              <h1 className="text-center text-white">
                Project Name: Interior Design of Apartemnt{" "}
              </h1>
              <p className="text-white text-center">Client: Mr.Sabbir</p>
              <p className="text-white text-center">
                Site Location: Nasirabad Properties Ltd,Chittagong
              </p>
            </div>
          </div>
          <div class="carousel-item">
            <img src={img8} class="d-block w-100" alt="..." />
            <div
              class="carousel-caption d-none d-md-block"
              data-aos="fade-up"
              data-aos-delay="50"
            >
              <h1 className="text-center text-white">
                Project Name: Interior Design of Apartemnt{" "}
              </h1>
              <p className="text-white text-center">
                Client: Mr.Ashraf & Doloy
              </p>
              <p className="text-white text-center">
                Site Location:Gulshan 2,Dhaka
              </p>
            </div>
          </div>
          <div class="carousel-item">
            <img src={img9} class="d-block w-100" alt="..." />
            <div
              class="carousel-caption d-none d-md-block"
              data-aos="fade-up"
              data-aos-delay="50"
            >
              <h1 className="text-center text-white">
                Project Name: Interior Design of Apartemnt{" "}
              </h1>
              <p className="text-white text-center">
                Client: Mr.Ashraf & Doloy
              </p>
              <p className="text-white text-center">
                Site Location:Gulshan 2,Dhaka
              </p>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Banner;

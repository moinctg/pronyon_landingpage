import "./Project.css";


import inteiar1 from "../../../../Images/project/Interiar/1.jpg";
import inteiar2 from "../../../../Images/project/Interiar/2.jpg";
import inteiar3 from "../../../../Images/project/Interiar/3.jpg";
import inteiar4 from "../../../../Images/project/Interiar/4.jpg";
import inteiar5 from "../../../../Images/project/Interiar/5.jpg";
import inteiar6 from "../../../../Images/project/Interiar/6.jpg";

import comr1 from "../../../../Images/project/Commercial/1.jpg";
import comr2 from "../../../../Images/project/Commercial/2.jpg";

import insti1 from "../../../../Images/project/Institutional/1.jpg";
import insti2 from "../../../../Images/project/Institutional/2.jpg";

import fac1 from "../../../../Images/project/Factory/1.PNG";
import fac2 from "../../../../Images/project/Factory/2.png";

import res1 from "../../../../Images/project/Resedendial/1.jpg";
import res2 from "../../../../Images/project/Resedendial/2.jpg";


import other1 from "../../../../Images/project/Other/1.jpg";
import other2 from "../../../../Images/project/Other/2.jpg";


// import eng1 from '../../../../Images/project/Engineering/1.jpg';
// import eng2 from '../../../../Images/project/Engineering/2.jpg';
// // import eng3 from '../../../../Images/project/Engineering/3.jpg';
// // import eng4 from '../../../../Images/project/Engineering/4.jpg';

// import img6 from '../../../../Images/project/6.jpg'

import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

import React, { useState, useEffect } from "react";

const Project = () => {
  const [activeKey, setActiveKey] = useState("*");
  const imgList= [
    {
      img: inteiar1,
      class: "filter-interior",
      title: "Thermex Group ",
      Description:"Thermex Group Project",
      client:"Thermex Group",
      location:"Golshan,Dhaka",
      Consultant:"Pronayon"
    },
    
    {
      img: inteiar2,
      class: "filter-interior",
      title: "Interior",
      Description:"Thermex Group Project",
      client:"Thermex Group",
      location:"Golshan,Dhaka",
      Consultant:"Pronayon"
    },
    {
      img: insti1,
      class: "filter-insti",
      title: "institutional"
    },
    {
      img: insti2,
      class: "filter-insti",
      title: "Institutional"
    },
    {
      img: fac1,
      class: "filter-fact",
      title: "factory"
    },
    {
      img: fac2,
      class: "filter-fact",
      title: "factory"
    },
    
    
    {
      img: comr1,
      class: "filter-comr",
      title: "Test title"
    },
    {
      img: comr2,
      class: "filter-comr",
      title: "Test title"
    },
    {
      img: res1,
      class: "filter-resi",
      title: "Test title"
    },
    {
      img: res2,
      class: "filter-resi",
      title: "Test title"
    },
    {
      img: other1,
      class: "filter-other",
      title: "other"
    },
    {
      img: other2,
      class: "filter-other",
      title: "other"
    },
    
  ];
  const [portfolioIsotope, setPortfolioIsotope] = useState(null);

  // let portfolioIsotope = null;

  useEffect(() => {
    window.addEventListener("load", () => {
      console.log("homePageInit on load");

      let portfolioContainer = select(".portfolio-container");
      if (portfolioContainer) {
        const portfolioIsotopeTemp = new window.Isotope(portfolioContainer, {
          itemSelector: ".portfolio-item",
        });
        setPortfolioIsotope(portfolioIsotopeTemp)
      }

      window.GLightbox({
        selector: '.portfolio-lightbox'
      });
    });
  }, []);

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim();
    if (all) {
      return [...document.querySelectorAll(el)];
    } else {
      return document.querySelector(el);
    }
  };

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all);
    if (selectEl) {
      if (all) {
        selectEl.forEach((e) => e.addEventListener(type, listener));
      } else {
        selectEl.addEventListener(type, listener);
      }
    }
  };

  const handleSelect = (eventKey) => {
    setActiveKey(eventKey);
    portfolioIsotope.arrange({
      filter: eventKey,
    });
    portfolioIsotope.on("arrangeComplete", function () {
      window.AOS.refresh();
    });
  };

  return (
    <div>
      <section id="portfolio" class="portfolio section-bg">
        <div class="container">
          <div class="section-title">
            <h1>Work Experience </h1>
          </div>

          <Nav
            className="justify-content-center p-4"
            variant="pills"
            activeKey={activeKey}
            onSelect={handleSelect}
          >
            <Nav.Item>
              <Nav.Link
                eventKey="*"
                href="#/home"
              >
                All
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              
              <Nav.Link
                eventKey=".filter-interior"
                href="#/home"
         
              >
                Interior
              </Nav.Link>
            </Nav.Item>
            {/* <Nav.Item>
              <Nav.Link
                eventKey=".filter-arc"
              >
                Architecture
              </Nav.Link>
            </Nav.Item> */}
            <NavDropdown title="Consultancy" id="nav-dropdown">
              <NavDropdown.Item eventKey=".filter-comr">
                Commercial 
              </NavDropdown.Item>
              <NavDropdown.Item
                eventKey=".filter-resi"
              >
                Residential 
              </NavDropdown.Item>
              <NavDropdown.Item
                eventKey=".filter-resi"
              >
                Institutional 
              </NavDropdown.Item>
              <NavDropdown.Item
                eventKey=".filter-insti"
              >
                Factory 
              </NavDropdown.Item>
              <NavDropdown.Item
                eventKey=".filter-fact"
              >
                Other
              </NavDropdown.Item>
              <NavDropdown.Item
                eventKey=".filter-other"
            ></NavDropdown.Item>
              
            </NavDropdown>
          </Nav>

          <div
            class="row portfolio-container"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            {imgList.map((img, index) => {
              return (
                <div
                  key={index}
                  className={`col-lg-4 col-md-6 portfolio-item ${img.class}`}
                >
                  <div class="portfolio-wrap">
                    <img src={img.img} class="img-fluid" alt="" />
                  <h6 className="p-2 "> Project Name: {img.title}</h6>
                    <div class="portfolio-links">
                      <a
                        href={img.img}
                        data-gallery="portfolioGallery"
                        className="portfolio-lightbox"
                        title={img.title}
                        // Description={img.Description}
                      >
                        <i class="bx bx-plus"></i>
                      </a>
                      <a href="#" title="More Details">
                        <i class="bx bx-link"></i>
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Project;

import "./Project.css";
import img1 from "../../../../Images/project/1.jpg";
import img2 from "../../../../Images/project/2.jpg";
import img3 from "../../../../Images/project/3.jpg";
import img4 from "../../../../Images/project/4.jpg";
import img5 from "../../../../Images/project/5.jpg";

import inteiar1 from "../../../../Images/project/Interiar/1.jpg";
import inteiar2 from "../../../../Images/project/Interiar/2.jpg";
import inteiar3 from "../../../../Images/project/Interiar/3.jpg";
import inteiar4 from "../../../../Images/project/Interiar/4.jpg";
import inteiar5 from "../../../../Images/project/Interiar/5.jpg";
import inteiar6 from "../../../../Images/project/Interiar/6.jpg";

import arc1 from "../../../../Images/project/Architecture/1.jpg";
import arc2 from "../../../../Images/project/Architecture/2.jpg";
import arc3 from "../../../../Images/project/Architecture/3.jpg";
import arc4 from "../../../../Images/project/Architecture/4.jpg";

import consoltan1 from "../../../../Images/project/Consalting/1.jpg";
import consoltan2 from "../../../../Images/project/Consalting/6.jpg";
import consoltan3 from "../../../../Images/project/Consalting/7.jpg";
import consoltan4 from "../../../../Images/project/Consalting/8.jpg";

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
  const [imgList, setImgList] = useState([
    {
      img: inteiar1,
      class: "filter-interior",
    },
    {
      img: arc1,
      class: "filter-arc",
    },
    {
      img: inteiar2,
      class: "filter-interior",
    },
    {
      img: consoltan1,
      class: "filter-cons",
    },
    {
      img: arc3,
      class: "filter-arc",
    },
    {
      img: inteiar4,
      class: "filter-interior",
    },
    {
      img: consoltan2,
      class: "filter-cons",
    },
    {
      img: consoltan3,
      class: "filter-cons",
    },
    {
      img: arc4,
      class: "filter-arc",
    },
  ]);
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
            <h1>Project</h1>
          </div>

          {/* <div class="row" data-aos="fade-up">
            <div class="col-lg-12 d-flex justify-content-center">
              <ul id="portfolio-flters">
                <li data-filter="*" class="filter-active">
                  All Project
                </li>
                <li data-filter=".filter-app">Interiar</li>
                <li data-filter=".filter-card">Consaltant</li>
                <li data-filter=".filter-web">Architecture</li>
                <li data-filter=".filter-card">Engineering</li>
              </ul>
            </div>
          </div> */}

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
            <Nav.Item>
              <Nav.Link
                eventKey=".filter-arc"
              >
                Architecture
              </Nav.Link>
            </Nav.Item>
            <NavDropdown title="Dropdown" id="nav-dropdown">
              <NavDropdown.Item eventKey=".filter-eng">
                Engineering
              </NavDropdown.Item>
              <NavDropdown.Item
                eventKey=".filter-cons"
              >
                Consaltant
              </NavDropdown.Item>
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
                    <div class="portfolio-links">
                      <a
                        href={img.img}
                        data-gallery="portfolioGallery"
                        className="portfolio-lightbox"
                        title="App 1"
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

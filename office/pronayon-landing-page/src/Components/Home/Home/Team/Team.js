
import "./Team.css";

import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

import React, { useState, useEffect } from "react";
import team1 from "../../../../Images/Team1.png";
import team2 from "../../../../Images/Team2.png";
import team3 from "../../../../Images/Team3.png";
import team4 from "../../../../Images/Team4.png";

const Team = () => {
  const [activeKey, setActiveKey] = useState("*");
  const imgList= [
    {
      img: team1,
      class: "filter-interior",
      title: "Test title"
    },
    {
      img: team2,
      class: "filter-arc",
      title: "Test title"
    },
    {
      img: team3,
      class: "filter-interior",
      title: "Test title"
    },
    {
      img: team4,
      class: "filter-cons",
      title: "Test title"
    },
    {
      img: team2,
      class: "filter-arc",
      title: "Test title"
    },
    {
      img: team4,
      class: "filter-interior",
      title: "Test title"
    },
    {
      img: team2,
      class: "filter-cons",
      title: "Test title"
    },
    {
      img: team4,
      class: "filter-cons",
      title: "Test title"
    },
    {
      img: team4,
      class: "filter-arc",
      title: "Test title"
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
    <div className="team-back">
      <div className="container">
        <div className="row" data-aos="fade-up">
          <div className="col-lg-6 pt-4 portfolio-flters">
           <h6  className="text-white  filter-active " data-filter="*" >ALL</h6>
            <h6 data-filter="filter-app">ARCHITECTS</h6>
            <h6 data-filter="filter-card">ADMINISTRATION</h6>
            <h6 data-filter="filter-web">ENGINEERS</h6>
            <h6 li data-filter="filter-app">ELECTRICAL ENGINEERS</h6>
          
          </div>
          <div className="col-lg-6">
            <h3 className="p-3 text-white text-right">Our Team</h3>
          </div>
   
         
   
        
          <div className="row  p-3" data-aos="fade-up" data-aos-delay="100">
            <div className="col-md-3  portfolio-item filter-app ">
              <img className="img" src={team1} alt="" />
              <div className="style mt-4">
                <div className="team-title">
                  <p className="p-3 ">
                    {" "}
                    <span className="fs-4 text-white ">Marcus Owens</span>
                    <br /> Architects
                  </p>
                  <p className="p-3 text-white team-social ">
                    {" "}
                    Facebook <br /> Linkdin{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3  portfolio-item filter-web">
              <img className="img" src={team2} alt="" />
              <div className="style mt-4">
                <div className="team-title">
                  <p className="p-3 ">
                    {" "}
                    <span className="fs-4 text-white ">Marcus Owens</span>
                    <br /> Architects
                  </p>
                  <p className="p-3 text-white  team-social">
                    {" "}
                    Facebook <br /> Linkdin{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <img className="img" src={team3} alt="" />
              <div className="style mt-4">
                <div className="team-title">
                  <p className="p-3  ">
                    <span className="fs-4 text-white">Marcus Owens</span>
                    <br /> Architects
                  </p>
                  <p className="p-3 text-white team-social ">
                    {" "}
                    Facebook <br /> Linkdin{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <img className="img" src={team4} alt="" />
              <div className="style mt-4">
                <div className="team-title">
                  <p className="p-3 ">
                    {" "}
                    <span className="fs-4 text-white">
                      Marcus Owens
                    </span> <br /> Architects
                  </p>
                  <p className="p-3 text-white style team-social">
                    {" "}
                    Facebook <br /> Linkdin{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row  p-3">
            <div className="col-md-3  ">
              <img className="img" src={team1} alt="" />
              <div className="style mt-4">
                <div className="team-title">
                  <p className="p-3 ">
                    {" "}
                    <span className="fs-4 text-white ">Marcus Owens</span>
                    <br /> Architects
                  </p>
                  <p className="p-3 text-white team-social ">
                    {" "}
                    Facebook <br /> Linkdin{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3 ">
              <img className="img" src={team2} alt="" />
              <div className="style mt-4">
                <div className="team-title">
                  <p className="p-3 ">
                    {" "}
                    <span className="fs-4 text-white ">Marcus Owens</span>
                    <br /> Architects
                  </p>
                  <p className="p-3 text-white  team-social">
                    {" "}
                    Facebook <br /> Linkdin{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <img className="img" src={team3} alt="" />
              <div className="style mt-4">
                <div className="team-title">
                  <p className="p-3  ">
                    <span className="fs-4 text-white">Marcus Owens</span>
                    <br /> Architects
                  </p>
                  <p className="p-3 text-white team-social ">
                    {" "}
                    Facebook <br /> Linkdin{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <img className="img" src={team4} alt="" />
              <div className="style mt-4">
                <div className="team-title">
                  <p className="p-3 ">
                    {" "}
                    <span className="fs-4 text-white">
                      Marcus Owens
                    </span> <br /> Architects
                  </p>
                  <p className="p-3 text-white style team-social">
                    {" "}
                    Facebook <br /> Linkdin{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row  p-3">
            <div className="col-md-3  ">
              <img className="img" src={team1} alt="" />
              <div className="style mt-4">
                <div className="team-title">
                  <p className="p-3 ">
                    {" "}
                    <span className="fs-4 text-white ">Marcus Owens</span>
                    <br /> Architects
                  </p>
                  <p className="p-3 text-white team-social ">
                    {" "}
                    Facebook <br /> Linkdin{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3 ">
              <img className="img" src={team2} alt="" />
              <div className="style mt-4">
                <div className="team-title">
                  <p className="p-3 ">
                    {" "}
                    <span className="fs-4 text-white ">Marcus Owens</span>
                    <br /> Architects
                  </p>
                  <p className="p-3 text-white  team-social">
                    {" "}
                    Facebook <br /> Linkdin{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <img className="img" src={team3} alt="" />
              <div className="style mt-4">
                <div className="team-title">
                  <p className="p-3  ">
                    <span className="fs-4 text-white">Marcus Owens</span>
                    <br /> Architects
                  </p>
                  <p className="p-3 text-white team-social ">
                    {" "}
                    Facebook <br /> Linkdin{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <img className="img" src={team4} alt="" />
              <div className="style mt-4">
                <div className="team-title">
                  <p className="p-3 ">
                    {" "}
                    <span className="fs-4 text-white">
                      Marcus Owens
                    </span> <br /> Architects
                  </p>
                  <p className="p-3 text-white style team-social">
                    {" "}
                    Facebook <br /> Linkdin{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row  p-3">
            <div className="col-md-3  ">
              <img className="img" src={team1} alt="" />
              <div className="style mt-4">
                <div className="team-title">
                  <p className="p-3 ">
                    {" "}
                    <span className="fs-4 text-white ">Marcus Owens</span>
                    <br /> Architects
                  </p>
                  <p className="p-3 text-white team-social ">
                    {" "}
                    Facebook <br /> Linkdin{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3 ">
              <img className="img" src={team2} alt="" />
              <div className="style mt-4">
                <div className="team-title">
                  <p className="p-3 ">
                    {" "}
                    <span className="fs-4 text-white ">Marcus Owens</span>
                    <br /> Architects
                  </p>
                  <p className="p-3 text-white  team-social">
                    {" "}
                    Facebook <br /> Linkdin{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <img className="img" src={team3} alt="" />
              <div className="style mt-4">
                <div className="team-title">
                  <p className="p-3  ">
                    <span className="fs-4 text-white">Marcus Owens</span>
                    <br /> Architects
                  </p>
                  <p className="p-3 text-white team-social ">
                    {" "}
                    Facebook <br /> Linkdin{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <img className="img" src={team4} alt="" />
              <div className="style mt-4">
                <div className="team-title">
                  <p className="p-3 ">
                    {" "}
                    <span className="fs-4 text-white">
                      Marcus Owens
                    </span> <br /> Architects
                  </p>
                  <p className="p-3 text-white style team-social">
                    {" "}
                    Facebook <br /> Linkdin{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>




    </div>

  );
};

export default Team;

import styles from "./Service.module.css";
import interior from "../../Images/Service/interior.png";

const Service = () => {
  return (
    <div
      className={`container ${styles.service_container} pt-5`}
      data-aos="fade-up"
      data-aos-delay="50"
    >
      <div className="row">
        <div className="col-lg-12 col-md-3">
          <p
            className="service-txt h-50 ps-5 "
            data-aos="fade-up"
            data-aos-delay="50"
          >
            PRONAYON offers comprehensive services in a number of functional
            areas.The wide range of experienced professional allow us to form
            multi-disciinary teams that work with crativity and flexibility to
            meet the unique needs of each project. Our Project process is
            dedicated to advancing the way we work.seeking improved quality in
            accelerated and inegrated project solutions as well as delivery
            procedures.we using advaned technology and tools and improve
            communication, collaboration and workflow and to safeguared the very
            interest of the Clients.
          </p>
        </div>
      </div>
      <div className="row pt-4">
        <div className="col-md-4">
          <div>
            <div>
              <h4>Architecture</h4>
              <ol>
                <span className="m-3 ">01 </span> Architectural Design
              </ol>
              <ol>
                <span className="m-3">02 </span>Architectural Drawing
              </ol>
              <ol>
                <span className="m-3">03 </span> Construciton Drawing and
                Specifications
              </ol>
              <ol>
                <span className="m-3">04 </span> Cordination of Consultant
                Service
              </ol>
              <ol>
                <span className="m-3">05 </span> Design Development
              </ol>
              <ol>
                <span className="m-3">06 </span> Feasibility Studies
              </ol>
              <ol>
                <span className="m-3">07 </span> 3D Perspective View & Modeling
              </ol>
              <ol>
                <span className="m-3">03 </span> Landscape Design
              </ol>
              <ol>
                <span className="m-3">03 </span> Sustainable Architecture{" "}
              </ol>
              <ol>
                <span className="m-3">03 </span> Govt.Authority Approval Drawing{" "}
              </ol>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div>
            <h4>Engineering</h4>
            <div >
              <ol>
                <span className="m-3 ">04 </span>Site Servey
              </ol>
              <ol>
                <span className="m-3 ">05 </span>Sub-Soil Investigaion &
                Analysis
              </ol>
              <ol>
                <span className="m-3 ">06 </span>Seismic Analysis
              </ol>
              <ol>
                <span className="m-3 ">06 </span>Structural Design & Drawings
              </ol>
              <ol>
                <span className="m-3 ">06 </span>Electrical Systems Design
              </ol>
              <ol>
                <span className="m-3 ">06 </span>Water & Sanitary System.
              </ol>
              <ol>
                <span className="m-3 ">06 </span>Fire Protection And Life Safety
              </ol>
              <ol>
                <span className="m-3 ">06 </span>Electro-Mechanical And Plumbing
                Engineering{" "}
              </ol>
              <ol>
                <span className="m-3 ">06 </span>Project Management
              </ol>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div>
            <h4>Interior Design</h4>
            <div >
              <ol>
                <span className="m-3 ">07 </span>Interior Design Of boutiques{" "}
              </ol>
              <ol>
                <span className="m-3 ">08 </span>Interior Design Of Bars and
                Renders
              </ol>
              <ol>
                <span className="m-3 ">09 </span>Architecture Design of house
              </ol>
            </div>
          </div>
        </div>
      </div>
      <div className="row pt-4">
        <div className="col-md-4">
          <div>
            <div>
              <h4>Post Construction Services</h4>
              <ol>
                <span className="m-3 ">01 </span> Planing
              </ol>
              <ol>
                <span className="m-3">02 </span>Architecture
              </ol>
              <ol>
                <span className="m-3">03 </span> Engineering
              </ol>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div>
            <h4>Management Consultancy</h4>
            <div >
              <ol>
                <span className="m-3 ">04 </span>Interior Design
              </ol>
              <ol>
                <span className="m-3 ">05 </span>Program Manager
              </ol>
              <ol>
                <span className="m-3 ">06 </span>Post Construction Service
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;

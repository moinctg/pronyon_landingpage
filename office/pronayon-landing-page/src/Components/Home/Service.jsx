import { useState, useEffect } from "react";
import styles from "./Service.module.css";
import SectionHeaderOne from "./Shared/SectionHeaderOne";
import { getAll } from "../../Utils/api";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const Service = () => {
  const scrollServiceContainer = (direction) => {
    try {
      var div = document.getElementById("serviceContainer");
      const divWidth = div.scrollWidth - div.clientWidth;
      if (direction === "right")
        div.scrollLeft = div.scrollLeft + Math.floor(divWidth * 0.4);
      else div.scrollLeft = div.scrollLeft - Math.floor(divWidth * 0.4);
    } catch (error) {
      console.log(error);
    }
  };

  const [services, setServices] = useState({});
  useEffect(() => {
    setServices(getAll("services"));
  });
  return (
    <div
      className={`container ${styles.service_container} pt-5`}
      data-aos="fade-up"
      data-aos-delay="50"
    >
      <SectionHeaderOne title="SERVICES" />
      {/* Summary & Buttons */}
      <div className="row">
        <div className="col-md-9">
          <p
            className={`${styles.summary}`}
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
        <div className="col-md-3 text-center">
          <div className={[styles.services_btn]}>
            <button
              onClick={() => {
                scrollServiceContainer("left");
              }}
            >
              <FontAwesomeIcon icon={faArrowLeft} />
            </button>
            <button
              onClick={() => {
                scrollServiceContainer("right");
              }}
            >
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>
        </div>
      </div>
      {/* Summary & Buttons */}
      {/* Services */}
      <div id="serviceContainer" className={[styles.service_grp]}>
        {Object.keys(services).map((department, index) => (
          <div>
            <h5 className={[styles.service_heading]} key={index}>
              {department}
            </h5>
            {services[department].map((service, serviceIndex) => (
              <p key={serviceIndex}>
                {serviceIndex + 1} {service}
              </p>
            ))}
          </div>
        ))}
      </div>
      {/* Services */}
    </div>
  );
};

export default Service;

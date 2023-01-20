import styles from "./Service.module.css";
import SectionHeaderOne from "./Shared/SectionHeaderOne";

const Service = () => {
  return (
    <div
      className={`container ${styles.service_container} pt-5`}
      data-aos="fade-up"
      data-aos-delay="50"
    >
      <SectionHeaderOne title="SERVICES" />
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
        <div className="col-md-3">Button goes here</div>
      </div>
    </div>
  );
};

export default Service;

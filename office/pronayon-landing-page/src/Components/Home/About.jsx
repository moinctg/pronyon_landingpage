import styles from "./About.module.css";
import SectionHeaderOne from "./Shared/SectionHeaderOne";

import maskgroup1 from "../../Images/MaskGroup1.png";

export default () => {
  return (
    <div className="container">
      <SectionHeaderOne title="PRONAYON" />
      <div className="row">
        <div className="col-md-7">
          <h5 className={`${styles.about_txt}`}>
            PRONAYON, a sister concern of Capco Group, is one of the most
            dynamic Architectural, Engineering, and Planning Consultants in
            Bangladesh with market leading position in Chittagong. As a stimulus
            platform of enthusiastic Architects and Engineers, it has anchored
            its proud journey in 1990. Though initially started with a few young
            Architects and engineers, PRONAYON, is now a committed and competent
            group of multi-disci- plined professionals. It is a team of
            committed and versatile professionals, dedicated to idealize new
            thinking and creating bewitching designs and architecture.{" "}
          </h5>
          <img className={styles.about_img} src={maskgroup1} alt="" />
        </div>
        <div className={`col-md-5 ${styles.about_left}`}>
          <h1 className={`${styles.about_left_head}`}>33 </h1>
          <h6 className={`${styles.about_h6}`}>Years experience</h6>
          <h1 className={`${styles.about_left_head}`}>2000 </h1>
          <h6 className={`${styles.about_h6}`}>References of projects</h6>
          <h5 className={`${styles.about_h5}`}>
            A committed and competent group of multi-deciplined professionals.
          </h5>
          <p className={styles.about_p}>
            It is a team of committed and versatile professionals, dedicated to
            idealize new thinking and bewitching designs and architecture. We,
            the PRONAYON family, is promised to evaluate your imaginary concept
            and to incarnate your dream into the ultimate completion
          </p>
        </div>
      </div>
    </div>
  );
};

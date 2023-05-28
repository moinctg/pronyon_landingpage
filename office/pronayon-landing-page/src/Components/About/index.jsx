import React from "react";
import styles from  "./About.module.css";
import SectionHeaderOne from "../../Components/Home/Shared/SectionHeaderOne/index";


import img1 from "../../Images/about.jpg";
import img2 from "../../Images/vission.png";

export default () => {
  return (
    
    <div className="container pt-4" data-aos="fade-up" data-aos-delay="50">
       
      <div className="row">
        <div className="col-lg-12">
          <img src={img1} alt="" />
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12 p-4">
        <SectionHeaderOne title="PRONAYON" />
        <h5 className={`${styles.about_txt}`}>
          
            PRONAYON, a sister concern of Capco Group, is one of the most
            dynamic Architectural, Engineering, and Planning Consultants in
            Bangladesh with market leading position in Chittagong. As a stimulus
            platform of enthusiastic Architects and Engineers, it has anchored
            its proud journey in 1990. Though initially started with a few young
            Architects and engineers, PRONAYON, is now a committed and competent
            group of multi-disci- plined professionals. It is a team of
            committed and versatile professionals, dedicated to idealize new
            thinking and creating bewitching designs and architecture. We, the
            PRONAYON family, is promise bound to assess and evaluate your inner
            often unexpressed desires and dreams and incarnate them into ulti-
            mate pleasant reality. From the very beginning, PRONAYON has been
            carving its luminous footmark with innovative creation. Throughout
            the journey, we are keenly fo- cused to sharpen the advancement of
            technological edge and related soft skills and human capital to meet
            inclreasingly complex challenges of the time as well as the criteria
            of diverse clientele. Through this relentless pursuit of aesthetic
            quality and functional perfection, PRONAYON has been thrust to a
            highly acclaimed stature. We shall treat our success story as a
            continuous process in an unrelenting pursuit of the ideals we value.
            Our unwinking sight is vigilant on your forthcoming update demands.
            Our strength is your satisfaction. In quest of innovative and
            sustainable design solutions for a wide range of developments
            through multi-disciplinary expertise in architecture, en- gineering
            and interior design, the maestro - Architect Sohail M Shakoor
            envisioned in 1990 to build a dedicated platform to realise the goal
            of promoting the design profession as an ethically socially and
            environmentally conscious creative movement leading to the formation
            of PRONAY- ON. His prime focus is always designing built
            environments that enrich and transform people's lives
          </h5>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
        <h5 className={`${styles.about_h5}`}>
          Vision 
          </h5>
          <p className={styles.about_p}>
            To be the country's most sought after facilitator in
            creating,nurturing and maximizing value to architecture and
            Engineering Solutions to the clients ,environments as wel as
            society.
          </p>
        </div>
        <div className="col-md-6">
        <h5 className={`${styles.about_h5}`}>
          Mission 
          </h5>
          <p className={styles.about_p}>
            To lead by example through a committed team of nurtured resources
            fostering conviction that motives towards excelllence in knowledge
            ,systems,structure,processes and producers,thereby empowering the
            organization at every level to deliver the highest quality of
            services,client care value keeping environmental safety a priority.
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <img src={img2} alt=""></img>
        </div>
      </div>
      <div className="row pt-5">
        <div className="col-md-6 ">
        <h5 className={`${styles.about_h5}`}>

          Values 
          </h5>
          <p className={styles.about_p}>
           We value talents and creativity </p>
           <p className={styles.about_p}>We concern about satisfaction of employees and clients</p>
           <p className={styles.about_p}>We provide excellent level of quality service</p>
           <p className={styles.about_p}>
            We assure reliability in every steps of develop-ment of our actions
          </p>
          <p className={styles.about_p}>We ensure chronological improvement in our quality works</p>
          <p className={styles.about_p}>We promise to provide synergy support to cli-ents group</p>
          <p className={styles.about_p}>We believe to fulfill clients or users need & re-quirements</p>
          <p className={styles.about_p}>We deliver quality works of creation and creativ-ity</p>
          <p className={styles.about_p}>We deliver quality works of creation and creativity</p>
          <p className={styles.about_p}>We plan for the sustainable development of the city promenade</p>
        </div>
        <div className="col-md-6" data-aos="fade-up" data-aos-delay="50">
           <h5 className={`${styles.about_h5}`}>
            Strategy 
            </h5>
            <p className={styles.about_p}>To plan the organization to grow up at a rate of 15%</p>
            <p className={styles.about_p}>
            To nurture creative exercise and generate new ideas which will
            expand our service in the advance global market
          </p>
          <p className={styles.about_p}>
            To uphold the uniqueness in local market in order to take part in
            future development
          </p>
        </div>
      </div>
    </div>
  );
};


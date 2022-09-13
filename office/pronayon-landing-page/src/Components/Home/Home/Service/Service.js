import React from 'react';
import './Service.css';

const Service = () => {
  return (
    <div className='container pt-5'>
      <h1 className='  service-h1'>Service</h1>
      <div className='row'>
        <div className='col-lg-12 col-md-3'>
          <p className='service-txt h-50'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad mollitia repudiandae blanditiis a facilis sunt, commodi laborum sit ipsum inventore fugit, eaque cupiditate excepturi repellendus corporis labore magni? Illo, magni?</p>

        </div>

      </div>
      <div className='row'>
        <div className='col-md-4'>
          <div >
          <ol className='style'><span className="m-3 ">01 </span> Planing</ol>
          <ol className='style'><span className="m-3">02 </span>Architecture</ol>
          <ol className='style'><span className="m-3">03 </span> Engineering</ol>
          </div>
        </div>
        <div className='col-md-4'>
          <div className='hr.style1'>
          <ol className='style'><span className="m-3 ">04 </span>Interior Design</ol>
          <ol className='style'><span className="m-3 ">05 </span>Program Manager</ol>
          <ol className='style'><span className="m-3 ">06 </span>Post Construction Service</ol>
          </div>
        </div>
        <div className='col-md-4'>
          <div className='hr.style1'>
          <ol className='style'><span className="m-3 ">07 </span>Interior Design Of boutiques </ol>
          <ol className='style'><span className="m-3 ">08 </span>Interior Design Of Bars and Renders</ol>
          <ol className='style'><span className="m-3 ">09 </span>Architecture Design of house</ol>
          </div>
        </div>
        

      </div>

    </div>
  );
};

export default Service;
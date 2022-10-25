
import './Project.css';
import img1 from '../../../../Images/project/1.jpg'
import img2 from '../../../../Images/project/2.jpg'
import img3 from '../../../../Images/project/3.jpg'
import img4 from '../../../../Images/project/4.jpg'
import img5 from '../../../../Images/project/5.jpg'


import inteiar1 from '../../../../Images/project/Interiar/1.jpg';
import inteiar2 from '../../../../Images/project/Interiar/2.jpg';
import inteiar3 from '../../../../Images/project/Interiar/3.jpg';
import inteiar4 from '../../../../Images/project/Interiar/4.jpg';
import inteiar5 from '../../../../Images/project/Interiar/5.jpg';
import inteiar6 from '../../../../Images/project/Interiar/6.jpg';

import arc1 from '../../../../Images/project/Architecture/1.jpg';
import arc2 from '../../../../Images/project/Architecture/2.jpg';
import arc3 from '../../../../Images/project/Architecture/3.jpg';
import arc4 from '../../../../Images/project/Architecture/4.jpg';


import consoltan1 from '../../../../Images/project/Consalting/1.jpg';
import consoltan2 from '../../../../Images/project/Consalting/6.jpg';
import consoltan3 from '../../../../Images/project/Consalting/7.jpg';
import consoltan4 from '../../../../Images/project/Consalting/8.jpg';


// import eng1 from '../../../../Images/project/Engineering/1.jpg';
// import eng2 from '../../../../Images/project/Engineering/2.jpg';
// // import eng3 from '../../../../Images/project/Engineering/3.jpg';
// // import eng4 from '../../../../Images/project/Engineering/4.jpg';




// import img6 from '../../../../Images/project/6.jpg'

const Project = () => {
   
  return (



<div>

{/* <div className='row'>
  <div className='col-lg-12 col-md-3'>
  <h1 className=''>Project</h1>

  </div>

</div>
<div className='row'>
  <div className='col-md-2'>
   
    <div className="image-gallary">
      <a target="_blank"  alt='chunati mosque'  width="600" height="400">
      </a>
 
    <img src={img4} alt="Mountains" />
  
   <div className="desc">Add a description of the image here</div>
  </div>

</div>
  <div className='col-md-2'>
   
    <div className="image-gallary">
 
    <img src={img1} alt="Mountains" width="564" height="761"/>
  
   <div className="desc">Add a description of the image here</div>
  </div>

</div>
  <div className='col-md-2'>
   
    <div className="image-gallary">
 
    <img src={img2} alt="Mountains" width="564" height="761"/>
  
   <div className="desc">Add a description of the image here</div>
  </div>

</div>
  <div className='col-md-2'>
   
    <div className="image-gallary">
 
    <img src={img3} alt="Mountains" width="564" height="761"/>
  
   <div className="desc">Add a description of the image here</div>
  </div>

</div>
  <div className='col-md-2'>
   
    <div className="image-gallary">
 
    <img src={img4} alt="Mountains" width="564" height="761"/>
  
   <div className="desc">Add a description of the image here</div>
  </div>

</div>
  <div className='col-md-2'>
   
    <div className="image-gallary">
 
    <img src={img5} alt="Mountains" width="564" height="761"/>
  
   <div className="desc">Add a description of the image here</div>
  </div>

</div> */}


<section id="portfolio" class="portfolio section-bg">
      <div class="container">

        <div class="section-title">
         <h1>Project</h1>
        </div>

        <div class="row" data-aos="fade-up">
          <div class="col-lg-12 d-flex justify-content-center">
            <ul id="portfolio-flters">
              <li data-filter="*" class="filter-active">All Project</li>
              <li data-filter=".filter-app">Interiar</li>
              <li data-filter=".filter-card">Consaltant</li>
              <li data-filter=".filter-web">Architecture</li>
              <li data-filter=".filter-card">Engineering</li>
            </ul>
          </div>
        </div>

        <div class="row portfolio-container" data-aos="fade-up" data-aos-delay="100">

          <div class="col-lg-4 col-md-6 portfolio-item filter-app">
            <div class="portfolio-wrap">
              <img src={inteiar1} class="img-fluid" alt=""/>
              <div class="portfolio-links">
                <a href={inteiar1} data-gallery="portfolioGallery" class="portfolio-lightbox" title="App 1"><i class="bx bx-plus"></i></a>
                <a href="#" title="More Details"><i class="bx bx-link"></i></a>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-web">
            <div class="portfolio-wrap">
              <img src={arc1} class="img-fluid" alt=""/>
              <div class="portfolio-links">
                <a href={arc1} data-gallery="portfolioGallery" class="portfolio-lightbox" title="Web 3"><i class="bx bx-plus"></i></a>
                <a href="#" title="More Details"><i class="bx bx-link"></i></a>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-app">
            <div class="portfolio-wrap">
              <img src={inteiar2} class="img-fluid" alt=""/>
              <div class="portfolio-links">
                <a href={inteiar2} data-gallery="portfolioGallery" class="portfolio-lightbox" title="App 2"><i class="bx bx-plus"></i></a>
                <a href="#" title="More Details"><i class="bx bx-link"></i></a>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-card">
            <div class="portfolio-wrap">
              <img src={consoltan1} class="img-fluid" alt=""/>
              <div class="portfolio-links">
                <a href={consoltan1} data-gallery="portfolioGallery" class="portfolio-lightbox" title="Card 2"><i class="bx bx-plus"></i></a>
                <a href="portfolio-details.html" title="More Details"><i class="bx bx-link"></i></a>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-web">
            <div class="portfolio-wrap">
              <img src={arc3} class="img-fluid" alt=""/>
              <div class="portfolio-links">
                <a href={arc3} data-gallery="portfolioGallery" class="portfolio-lightbox" title="Web 2"><i class="bx bx-plus"></i></a>
                <a href="portfolio-details.html" title="More Details"><i class="bx bx-link"></i></a>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-app">
            <div class="portfolio-wrap">
              <img src={inteiar4} class="img-fluid" alt=""/>
              <div class="portfolio-links">
                <a href={inteiar4} data-gallery="portfolioGallery" class="portfolio-lightbox" title="App 3"><i class="bx bx-plus"></i></a>
                <a href="portfolio-details.html" title="More Details"><i class="bx bx-link"></i></a>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-card">
            <div class="portfolio-wrap">
              <img src={consoltan2} class="img-fluid" alt=""/>
              <div class="portfolio-links">
                <a href={consoltan2} data-gallery="portfolioGallery" class="portfolio-lightbox" title="Card 1"><i class="bx bx-plus"></i></a>
                <a href="portfolio-details.html" title="More Details"><i class="bx bx-link"></i></a>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-card">
            <div class="portfolio-wrap">
              <img src={consoltan3} class="img-fluid" alt=""/>
              <div class="portfolio-links">
                <a href={consoltan3} data-gallery="portfolioGallery" class="portfolio-lightbox" title="Card 3"><i class="bx bx-plus"></i></a>
                <a href="portfolio-details.html" title="More Details"><i class="bx bx-link"></i></a>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 portfolio-item filter-card">
            <div class="portfolio-wrap">
              <img src="" class="img-fluid" alt=""/>
              <div class="portfolio-links">
                <a href="" data-gallery="portfolioGallery" class="portfolio-lightbox" title="Card 3"><i class="bx bx-plus"></i></a>
                <a href="portfolio-details.html" title="More Details"><i class="bx bx-link"></i></a>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 portfolio-item filter-card">
            <div class="portfolio-wrap">
              <img src="" class="img-fluid" alt=""/>
              <div class="portfolio-links">
                <a href=""data-gallery="portfolioGallery" class="portfolio-lightbox" title="Card 3"><i class="bx bx-plus"></i></a>
                <a href="portfolio-details.html" title="More Details"><i class="bx bx-link"></i></a>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-web">
            <div class="portfolio-wrap">
              <img src={arc4} class="img-fluid" alt=""/>
              <div class="portfolio-links">
                <a href={arc4} data-gallery="portfolioGallery" class="portfolio-lightbox" title="Web 3"><i class="bx bx-plus"></i></a>
                <a href="portfolio-details.html" title="More Details"><i class="bx bx-link"></i></a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>



</div>
  );
};

export default Project;
import React from 'react';

const Contact = () => {
    return (
        <div className='cotainer pt-5'>
        
        <div className='row'>
           



         
            <div className='col-md-6'>
                <h3 className='text-center'>Quick Contact form </h3>
                <div class="row">
  <div class="col">
    <input type="text" class="form-control" placeholder="Your  Name *" aria-label="First name"/>
  </div>
  <div class="col">
    <input type="text" class="form-control" placeholder="Mobile* " aria-label="Last name"/>
  </div>
</div>
                <div class="row">
  <div class="col">
    <input type="text" class="form-control" placeholder="Your Email*" aria-label="First name"/>
  </div>
  <div class="col">
    <input type="text" class="form-control" placeholder=" Address*" aria-label="Last name"/>
  </div>
  <div className='row'>
  <div class="col-12">
    <label for="inputAddress" class="form-label"></label>
    <input type="text" class="form-control" id="inputAddress" placeholder="Message Me*"/>
  </div>

  </div>

</div>
<br/>

 <button type="submit" class="btn btn-primary   ">Submit Message </button>

            </div>
            <div className='col-md-6'>
                <h3 className='p-4'>Our Contacts </h3>
                <p className='p-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius atque numquam quis laboriosam voluptatem alias, dolore fugit esse eligendi commodi corrupti minus inventore ea repudiandae debitis dolorem tempora et iure.</p>
                <div className='p-4'>
                    <h4>Our Location </h4>
                    <i className="fas fa-map-marker-alt"></i>
                    <p>Comercial Court,95,Agrabad,C/A,Chattrogram </p>
                </div>
                <div className='p-4'>
                    <h4>Phone Number  </h4>
                    <i className="fas fa-phone-alt"></i>
                    <p>  017-000000000</p>
                </div>
                <div className='p-4'>
                    <h4>Email</h4>
                    <i class="fas fa-envelope"></i>
                    <p>info@pronayonbd.com</p>
                </div>
                <div className='p-4'>
                    <h4>Website </h4>
                    <i class="fas-duotone fa-browser"></i>
                    <p>www.pronayonbd.com</p>
                </div>


            </div>
            <div>
                <h1 className='text-center'>Please Find Our Location</h1>
               <div className='text-center'>  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d32199.236603353507!2d91.82364721852151!3d22.32136947757871!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30acd901d3fac9c3%3A0x3a07b355ba52e20f!2sCommercial%20Court!5e0!3m2!1sen!2sbd!4v1677137198640!5m2!1sen!2sbd" width={1200} height={800} style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" /> </div>
            
            </div>

            
            

        </div>
            
        </div>
    );
};

export default Contact;
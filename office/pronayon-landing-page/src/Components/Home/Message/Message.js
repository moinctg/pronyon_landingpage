import React from 'react';
import ceo from '../../../Images/Ceo.jpg';
import signiture from '../../../Images/About/signiture.png';

const Message = () => {
    return (
        <div className='row h-50' data-aos="fade-up" data-aos-delay="50">
            <div className='col-md-12 p-5'>
             <img src={ceo}  alt=""/>
                

                <h6 className='pt-4 m-3' data-aos="fade-up" data-aos-delay="50">Principle Architect & CEO</h6>
                <h2 className='pt-3 m-3' data-aos="fade-up" data-aos-delay="50">Sohail Mohammed Shakoor</h2>

                <p className='p-2  ' data-aos="fade-up" data-aos-delay="50">Warm welcome to the world of "PRONAYON" !</p>
<p> Architecture is a bespoke service where designers tailor buildings to the unique needs of a client. In the general scenario prevalent at the time, the design process was ad-hoc, improvised, archaic in methods and seldom led by an architect . Not at all the best of time to enter the profession primarily as archi¬tect and consultant . But that's what I had to do- experiencing the gruelling struggle to fight the anti architecture status quo and establish a breakaway trend towards architectural expression and space creation under the banner of PRONAYON since the year of 1990. Though initially started with a few young Architects and Engineers, Pronayon is now a Team of committed and competent group of multi- disciplinary professionals. Throughout its journey the team kept sharpening its creative and technological edge to meet the challenges of the diverse clientele. This profession asks for diversity, creativity and functionality. And as a team, we try to give our best to meet all of these criteria. We as a team, always stood by our words for delivering the promised work to our valuable clients

</p>
<p>
I always believed in the potentiality of this profession and an inevitable prospect of an industry which now seem to be unraveling. With an unwavering focus on quality and commitment to architectural excellence and value added space creation we have slowly developed a client base with a greater awareness heralding the embryonic appearance of professionalism in the design/ building scenario.
We look forward to a more rewarding journey in the future.
</p>
<img className=' ' src={signiture} alt=""/>


            </div>
          
        </div>

    );
};

export default Message;
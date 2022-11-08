import React from 'react';
import dentistCember from '../../../../assets/about/about1.webp'
import dentist from '../../../../assets/about/about2.webp'

const About = () => {
    return (
        <div className="hero max-w-5xl mx-auto py-20 ">
        <div className="hero-content flex-col lg:flex-row-reverse">

            {/* description part */}
          <div className='w-1/2'>
            <h1 className="text-5xl font-bold">Your great smile begins with a great dentist</h1>
            <p className="py-6">
                Compassionate and thorough senior associate dentist with 15+ years of dental exper ience, with experience ingeneral and cosmetic dentistry. Seeking a role as a senior associate dentist with Ranieu Famiy Dental to provide compassionate client care, perform a range of dentalservices, and expand
                prosthodontology skills.
            </p>
            <button className="btn btn-outline mr-5">More Info</button>
            <button className="btn bg-sky-900">Book Online</button>
          </div>

            {/* image part */}

          <div className='w-1/2 relative'>
            <img src={dentistCember} alt='' className="max-w-sm rounded-lg shadow-2xl " />
            <img src={dentist} alt='' className="w-1/3 border-8  top-1/2 rounded-lg shadow-2xl right-5 absolute" />
            </div>
        </div>
      </div>
    );
};

export default About;
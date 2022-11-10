

import React from 'react';


const ChooseUs = () => {
    return (
        <div className=' max-w-5xl mx-auto py-12 my-12'>
            <h1 className='text-5xl font-bold text-center py-12 '> Why Choose me!!!!!!</h1>
<div class="stats shadow grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
  <div class="stat place-items-center">
    <div class="stat-title">Addmitted Patents</div>
    <div class="stat-value">31K</div>
    <div class="stat-desc">From January 1st to February 1st</div>
  </div>
  
  <div class="stat place-items-center">
    <div class="stat-title">Happy Patents</div>
    <div class="stat-value text-secondary">4,200</div>
    <div class="stat-desc text-secondary">↗︎ 40 (2%)</div>
  </div>
  
  <div class="stat place-items-center">
    <div class="stat-title">Online Registers</div>
    <div class="stat-value">1,200</div>
    <div class="stat-desc">↘︎ 90 (14%)</div>
  </div>
  
</div>
        </div>
    );
};

export default ChooseUs;
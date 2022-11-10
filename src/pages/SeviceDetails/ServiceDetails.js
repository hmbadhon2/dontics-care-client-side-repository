import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

import ServiceDetailsCard from './ServiceDetailsCard';

const ServiceDetails = () => {

    const services = useLoaderData()
    
   
    
    return (

    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 py-20 max-w-5xl mx-auto'>
            {
                services.map(service => <ServiceDetailsCard
                key={service._id}
                service ={service}
                ></ServiceDetailsCard>)
            }
             
    </div>

       
        
    );
};

export default ServiceDetails;
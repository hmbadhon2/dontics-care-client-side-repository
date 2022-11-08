import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ServiceCard from './ServiceCard';

const Services = () => {
  const [services, setServices] = useState([])
 useEffect(()=>{
    fetch('http://localhost:5000/servicesThree')
    .then(res => res.json())
    .then(data=> setServices(data))
 },[])

    return (
        <div>
            <div className='text-center'>
                <p className="text-2xl font-bold text-orange-600"> Service</p>
                <h2 className='text-5xl font-bold'> Our Service Area</h2>
                <div className='py-5' >
                <p>the majority have suffered alteration in some form, by injected humour, or randomised </p>
                <p> words which don't look even slightly believable. 
                </p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-7 max-w-5xl mx-auto'>
                    {
                        services.map(service => <ServiceCard
                        key={service._id}
                        service ={service}
                        ></ServiceCard>)
                    }
                </div>
                
            
            <div className='my-6 text-center'>
            <button className="btn  bg-sky-600 border-none"> All Services</button>

            </div>
            </div>
        </div>
    );
};

export default Services;
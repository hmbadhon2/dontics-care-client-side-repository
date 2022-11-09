import React from 'react';
import { useLoaderData } from 'react-router-dom';

const PerServiceDetails = () => {
    
    const {title,price,description,img} =useLoaderData()

    return (
        <div className='max-w-5xl mx-auto py-24'>
            <div className="mockup-window border bg-base-300">
        <figure ><img className='w-full' src={img} alt="Shoes" /></figure>
         <div className="flex justify-center px-4 py-16 bg-base-200">
            <h2 className='text-5xl'>{title}</h2>
            <h2 className='text-5xl'>{price}</h2>
           <p> {description}</p>
         </div>
        </div>
        </div>

    );
};

export default PerServiceDetails;
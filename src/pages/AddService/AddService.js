import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AddServiceCard from './AddServiceCard';

const AddService = () => {

    const services = useLoaderData()
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:gird-cols-2 gap-6 max-w-5xl mx-auto py-24'>
            {
                services.map(service => <AddServiceCard
                key={service._id}
                service={service}
                ></AddServiceCard>)
            }
        </div>
    );
};

export default AddService;
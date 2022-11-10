import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ReviewServices from './ReviewServices';

const PerServiceDetails = () => {
    
    const {title,price,description,img} =useLoaderData()
    const [review, setReview] = useState([])

useEffect(()=>{
    fetch('https://y-opal-theta.vercel.app/review')
    .then(res => res.json())
    .then(data => {
        setReview(data)
        console.log(data)
    })
},[])

const handleDelete = id =>{
    const proceed = window.confirm('Are you sure you want to delete this review')
    if(proceed){
        fetch(`https://y-opal-theta.vercel.app/review/${id}`,{
            method:'DELETE'
        })
        .then(res => res.json())
        .then(data =>{
            if(data.deletedCount<0){
                alert(' Deleted Successfully')
                const remaining = review.filter(review => review._id !==id)
                setReview(remaining);
            }
            console.log(data)
        })
    }
}

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mx-auto max-w-5xl py-24'>
                    <div>
                    {
                             review.map(rev => <ReviewServices
                                key={rev._id}
                                rev={rev}
                                handleDelete={handleDelete}
                                ></ReviewServices> )
                    }        
                   
                    </div>
        <div className=''>
            <div className="mockup-window border bg-base-300">
        <figure ><img className='w-full' src={img} alt="Shoes" /></figure>
         <div className=" px-4 py-16 ">
            <h2 className='text-5xl'>{title}</h2>
            <h4 className='text-2xl'>{price}</h4>
           <p> {description}</p>
         </div>
        </div>
        </div>
        </div>
    );
};

export default PerServiceDetails;
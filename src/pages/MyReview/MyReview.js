import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import ReviewCard from './ReviewCard';
import useTitle from '../../hook/useTitle'
import { useLoaderData } from 'react-router-dom';

const MyReview = () => {

    useTitle('My Review')
    const {user} = useContext(AuthContext)
    const [review, setReview] = useState([])
    const reviews = useLoaderData()
    console.log(reviews)

    // useEffect(()=>{

    //     fetch(`https://y-opal-theta.vercel.app/review?email=${user?.email}`,{
    //         headers:{
    //             authorization:`Bearer${localStorage.getItem('donticsToken')}`
    //         }
    //     })
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log(data)})
    //     },[user?.email])

    // review added part
    const handleReview = e =>{
        e.preventDefault()
        const form = e.target;
        const serviceName= form.service.value;
        const reviewText = form.reviewText.value;
        const email = user?.email ||'unregister'

        const review ={
            serviceName,
            reviewText,
            email
         
        }

       fetch('https://y-opal-theta.vercel.app/review',{
        method:'POST',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(review)
       })
       .then(res => res.json())
       .then(data =>{
        if(data.acknowledged){
            alert('Review added successfully')
            form.reset()
        }
        console.log(data)
       })

    }

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
                    const remaining = reviews.filter(review => review._id !==id)
                    setReview(remaining);
                }
                console.log(data)
            })
        }
    }
 
    return (

        <div>

            <div className='max-w-5xl mx-auto grid gap-6 grid-cols-1  md:grid-cols-2 lg:grid-cols-3 my-12'>
             
               {
                
                reviews?.length <0 ?
                <h1 className='text center text-5xl'> No reviews were added </h1>
                :
                reviews.map(review => <ReviewCard
                key={review._id}
                review={review}
                handleDelete= {handleDelete}
                ></ReviewCard>)
               }
            </div>

            <div className='max-w-5xl mx-auto py-12'>
                <form onSubmit={handleReview}>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 mb-5'>
                    <input name="service" type="text" placeholder="Service Name" className="input input-bordered w-full" />
                    <textarea name="reviewText" className="textarea textarea-bordered w-full" placeholder="Review"></textarea>
                    </div>
                    
                    <input type="submit" value="Add Review" className='btn  outline bg-sky-900 w-full my-5' />
                </form>
            </div>
       

        </div>
    );

};

export default MyReview;
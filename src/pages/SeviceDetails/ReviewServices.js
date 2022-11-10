import React from 'react';

const ReviewServices = ({rev, handleDelete}) => {
    const {serviceName, reviewText, _id} = rev
    return (
        <div className="card  bg-base-100 shadow-xl">
        <img className='mask mask-circle' src="https://placeimg.com/400/225/arch" alt="Shoes" />
        <div className="divider"></div> 
        <div className="card-body">
        <h2 className="card-title">{serviceName}</h2>
        <p>{reviewText}</p>
        <div className="card-actions justify-end">
        <button onClick={()=>handleDelete(_id)} className="btn btn-primary">Delete</button>
        <button className="btn btn-primary">Edit</button>
    </div>
  </div>
</div>
    );
};

export default ReviewServices;
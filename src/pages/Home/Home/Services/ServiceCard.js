import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({service}) => {

    const {_id, title,img,price,description } =service;
    return (
        <div className="card  bg-base-100 shadow-xl">
  <figure><img src={img} alt='' /></figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
   {
    description.length>100 ?
    <>
    <p>{description.slice(0,100) + '...'} </p>
    <Link to=''> More</Link>
    </>
    
    :
    <p>{description}</p>
    }
    <p>{price}</p>
    <div className="card-actions justify-end">

     <Link to={`/service/${_id}`}><button className="btn btn-primary">Take Service</button></Link> 
    </div>
  </div>
</div>
    );
};

export default ServiceCard;
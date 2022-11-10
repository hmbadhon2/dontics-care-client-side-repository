import React from 'react';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const ServiceCard = ({service}) => {

    const {_id, title,img,price,description } =service;
    return (
        <div className="card  bg-base-100 shadow-xl">
          <PhotoProvider>
            <PhotoView src={img}>
              <img src={img} alt='' />
            </PhotoView>
          </PhotoProvider>
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

     <Link to={`/service/${_id}`}><button className="btn bg-sky-600">See Details </button></Link> 
    </div>
  </div>
</div>
    );
};

export default ServiceCard;
import React from 'react';
import { Link } from 'react-router-dom';

const ServiceDetailsCard = ({service}) => {


    const {title,img,description,price,_id} =service

    return (
        <div className="card card-side max-w-5xl  shadow-xl">
            <div className='w-full'>
            <figure><img src={img} alt= '' /></figure>
            </div>

        <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{price}</p>
                {
                description.length>100 ?
                <>
                <p>{description.slice(0,100) + '...'}</p>
                <Link to=''> More</Link>
                </>
                :
                <p>{description}</p>
                }

                <div className="card-actions justify-end">
              <Link to={`/service/${_id}`} > <button className="btn btn-primary">Details</button></Link>  
                </div>
        </div>

</div>
    );
};

export default ServiceDetailsCard;
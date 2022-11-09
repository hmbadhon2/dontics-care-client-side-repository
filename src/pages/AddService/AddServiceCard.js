import React from 'react';
import { Link } from 'react-router-dom';

const AddServiceCard = ({service}) => {
    const {img, _id, price, title} = service
    return (
        <div className="card   shadow-xl image-full">
  <figure><img src={img}alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p>{price}</p>
    <div className="card-actions justify-end">
      {/* <Link to={`/service/${_id}`}><button className="btn btn-primary">Take Service</button></Link> */}
    </div>
  </div>
</div>
    );
};

export default AddServiceCard;
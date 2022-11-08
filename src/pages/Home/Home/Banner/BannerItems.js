import React from 'react';
import './BannerItem.css'

const BannerItems = ({slider}) => {

    const {id,image,pre,next} = slider;

    return (
        <div id={`slide${id}`} className="carousel-item relative  w-full">
    <div className='carousel-img'>
    <img src={image} alt='' className="w-full" />
    </div>
  
    <div className="absolute flex justify-end transform -translate-y-1/2  left-24 top-1/4 text-white">
        <h1 className='text-6xl font-bold '>Your Smile <br/> is My<br/> First Priority</h1>
      
    </div>
    <div className="absolute flex justify-end transform -translate-y-1/2  w-2/5 left-24 top-1/2 text-white">
        <p className='text-xl'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
      
    </div>
    <div className="absolute flex justify-end transform -translate-y-1/2   left-24 top-3/4 text-white">
       
    <button className="btn btn-outline btn-warning">Discover More</button>
    <button className="btn btn-outline btn-warning ml-5">Latest Project</button>
    </div>
    <div className="absolute flex justify-end transform -translate-y-1/2  right-5 bottom-0">
      <a href={`#slide${pre}`} className="btn btn-circle">❮</a> 
      <a href={`#slide${next}`} className="btn btn-circle ml-5">❯</a>
    </div>
  </div>
    );
};

export default BannerItems;
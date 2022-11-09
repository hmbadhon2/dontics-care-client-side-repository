import React from 'react';

import slide1 from '../../../../assets/slider/slider1-min.webp'
import slide2 from  '../../../../assets/slider/slide2-min.webp'
import slide3 from '../../../../assets/slider/slider3-min.webp'
import BannerItems from './BannerItems';



const bannerData = [
    {
        image:slide1,
        pre:3,
        id:1,
        next:2
      },
      {
        image:slide2,
        pre:1,
        id:2,
        next:3
      },
      {
        image:slide3,
        pre:2,
        id:3,
        next:1
      }
]

const Banner = () => {

  
    return (
        <div className="carousel mx-auto   w-full mb-18">
            {
                bannerData.map(slider => <BannerItems
                    key={slider.id}
                    slider = {slider}
                ></BannerItems>
               
               )
            }
        </div>
    );
};

export default Banner;
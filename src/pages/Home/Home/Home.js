import React from 'react';
import useTitle from '../../../hook/useTitle';
import About from './About/About';
import Banner from './Banner/Banner';
import Services from './Services/Services';
import ChooseUs from './ChooseUs'

const Home = () => {
    useTitle('Home')
    return (
        <div>
            <Banner></Banner>
            <About></About>
           <Services></Services>
           <ChooseUs></ChooseUs>
           
          
        </div>
    );
};

export default Home;
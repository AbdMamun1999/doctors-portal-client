import React from 'react';
import Info from './Info';
import Service from './Service';
import Banner from './Banner';
import Treatment from './Treatment';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Info>s</Info>
           <Service></Service>
           <Treatment></Treatment>
        </div>
    );
};

export default Home;
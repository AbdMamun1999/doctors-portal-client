import React from 'react';
import ServiceCard from './ServiceCard';
import fluoride from '../../assets/images/fluoride.png'
import cavity from '../../assets/images/cavity.png'
import whitening from '../../assets/images/whitening.png'

const Service = () => {
    return (
        <div className='grid grid- lg:grid-cols-3 gap-5 p-12'>
            <ServiceCard img={fluoride} serviceCardTitle={'Fluoride Treatment'}></ServiceCard>
            <ServiceCard img={cavity} serviceCardTitle={'Cavity Filling'}></ServiceCard>
            <ServiceCard img={whitening} serviceCardTitle={'Teeth Whitening'}></ServiceCard>
        </div>
    );
};

export default Service;
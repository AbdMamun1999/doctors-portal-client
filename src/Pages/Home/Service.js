import React from 'react';
import ServiceCard from './ServiceCard';
import fluoride from '../../assets/images/fluoride.png'
import cavity from '../../assets/images/cavity.png'
import whitening from '../../assets/images/whitening.png'

const Service = () => {
    const services = [
        {
            id: 1,
            title: 'Fluoride Treatment',
            description: '',
            img: fluoride
        },
        {
            id: 2,
            title: 'Fluoride Treatment',
            description: '',
            img: cavity
        },
        {
            id: 3,
            title: 'Fluoride Treatment',
            description: '',
            img: whitening
        }
    ]
    return (
        <div className='lg:mb-20'>
            <div className='text-center '>
                <h1 className='text-secondary font-bold text-xl'>OUR SERVICES</h1>
                <p className='text-4xl'>Services We Provide</p>
            </div>
            <div className='grid grid- lg:grid-cols-3 gap-5 p-12'>
{
    services.map(service => <ServiceCard
        key={service.id}
        img={service.img}
        title={service.title}
        description={service.description}
    ></ServiceCard>)
}
            </div>
        </div>
    );
};

export default Service;
import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
import clock from '../../assets/icons/clock.svg'
import marker from '../../assets/icons/marker.svg'
import phone from '../../assets/icons/phone.svg'

const Info = () => {
    return (
        <div className='grid grid- lg:grid-cols-3 gap-5 p-12'>
            <InfoCard img={clock} cardTitle={'Opening Hour'} bgColor={'bg-gradient-to-r from-secondary to-primary'} ></InfoCard>
            <InfoCard img={marker} cardTitle={'Visit Our Location'} bgColor={'bg-accent'}></InfoCard>
            <InfoCard img={phone} cardTitle={'Contact Us Now'} bgColor={'bg-gradient-to-r from-secondary to-primary'} ></InfoCard>
        </div>
    );
};

export default Info;
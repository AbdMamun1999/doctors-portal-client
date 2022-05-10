import React from 'react';

const InfoCard = ({img,bgColor,cardTitle}) => {
    return (
        <div class={`card lg:card-side ${bgColor}  shadow-xl`}>
            <figure className='pl-6 py-6 '><img src={img} alt="Album"/></figure>
            <div class="card-body">
                <h2 class="card-title text-white">{cardTitle}</h2>
                <p className='text-white'>Click the button to listen on Spotiwhy app.</p>
            </div>
        </div>
    );
};

export default InfoCard;
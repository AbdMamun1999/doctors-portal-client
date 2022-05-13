import React from 'react';
import appointmet from '../../assets/images/appointment.png'
import PrimaryButton from '../Shared/PrimaryButton';

const ContactUs = () => {
    return (
        <section
            style={{
                background: `url(${appointmet})`
            }}
            className='bg-primary px-10 py-14'
        >
            <div className='text-center text-white pb-14'>
                <p className='text-xl font-bold  text-transparent bg-clip-text bg-gradient-to-br from-accent to-secondary'>Contact Us</p>
                <h1 className='text-4xl '>Stay connected with us</h1>
            </div>
            <div className='grid grid-cols-1 justify-items-center gap-5'>
                <input type="text" placeholder="Email Address" className="input w-full max-w-xs" />
                <input type="text" placeholder="Subject" className="input w-full max-w-xs" />
                <textarea className="textarea w-full max-w-xs" rows={6} placeholder="Your message"></textarea>
                <PrimaryButton>GET STARTED</PrimaryButton>
            </div>
        </section>
    );
};

export default ContactUs;
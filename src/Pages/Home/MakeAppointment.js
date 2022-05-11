import React from 'react';
import doctor from '../../assets/images/doctor.png'
import appointment from '../../assets/images/appointment.png'
import PrimaryButton from '../Shared/Navbar/PrimaryButton';

const MakeAppointment = () => {
    return (
        <section
        style={{
            backgroundImage:`url(${appointment})`
        }}        
        className='flex justify-center items-center'>
            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-150px]' src={doctor} alt="" />
            </div>
            <div className='flex-1 p-6 lg:py-0'>
                <h3 className='text-xl font-bold text-secondary'>Appoinment</h3>
                <h2 className='font-semibold text-4xl text-white my-5'>Make an Appoinment Today</h2>
                <p className='text-white mb-5'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente earum ab cupiditate autem accusantium expedita sequi, temporibus, aut illo doloribus quaerat explicabo, assumenda consectetur est vel ad sed maiores doloremque consequatur. Amet consequuntur quibusdam autem, quod maxime qui itaque quaerat.
                </p>
                <PrimaryButton>GET STARTED</PrimaryButton>
            </div>
        </section>
    );
};

export default MakeAppointment;
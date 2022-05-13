import React from 'react';

const AppointmentService = ({ service, setTreatment }) => {
    const { name, slots } = service;

    return (
        <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title text-secondary">{name}</h2>
                <p>
                    {
                        slots.length > 0 ?
                            <span> {slots[0]}</span>
                            :
                            <span className='text-red-600'>Try another date</span>
                    }
                </p>
                <p>{slots?.length} {slots.length ? 'spaces' : 'space'} available </p>
                <div className="card-actions justify-center">
                    <label
                        disabled={slots.length === 0}
                        htmlFor="booking-modal"
                        onClick={() => setTreatment(service)}
                        className="btn btn-secondary text-white uppercase">Book appointment</label>
                </div>
            </div>
        </div>
    );
};

export default AppointmentService;
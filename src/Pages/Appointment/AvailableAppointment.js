import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import AppointmentService from './AppointmentService';
import BookingModal from './BookingModal';

const AvailableAppointment = ({ date }) => {
    const [services, setServices] = useState([])
    const [treatment,setTreatment] = useState(null)

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div >
            <p className='uppercase text-center text-secondary font-semibold text-[22px]'>Available Appointments on {format(date, 'PP')}</p>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5  mt-10'>
                {
                    services.map(service => <AppointmentService
                        key={service._id}
                        service={service}
                        setTreatment={setTreatment}
                        date={date}
                    ></AppointmentService>)
                }
            </div>
            <div>
                {
                    treatment && <BookingModal
                        date={date}
                        treatment={treatment}
                        setTreatment={setTreatment}
                    ></BookingModal>
                }
            </div>
        </div>
    );
};

export default AvailableAppointment;
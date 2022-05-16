import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import AppointmentService from './AppointmentService';
import BookingModal from './BookingModal';

const AvailableAppointment = ({ date }) => {
    // const [services, setServices] = useState([])
    const [treatment, setTreatment] = useState(null)

    const formattedDate = format(date, 'PP')
    const { data: services, isLoading,refetch } = useQuery(['available',formattedDate], () => fetch(`http://localhost:5000/available?date=${formattedDate}`)
        .then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }
    /*  useEffect(() => {
         fetch(`http://localhost:5000/available?date=${formattedDate}`)
             .then(res => res.json())
             .then(data => setServices(data))
     }, [formattedDate]) */
    return (
        <div >
            <p className='uppercase text-center text-secondary font-semibold text-[22px]'>Available Appointments on {format(date, 'PP')}</p>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5  mt-10'>
                {
                    services?.map(service => <AppointmentService
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
                        refetch={refetch}
                    ></BookingModal>
                }
            </div>
        </div>
    );
};

export default AvailableAppointment;
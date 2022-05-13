import React, { useState } from 'react';
import AppointmentBanner from './AppointmentBanner';
import AvailableAppointment from './AvailableAppointment';
import Footer from '../Shared/Footer';

const Appointment = () => {
    const [date, setDate] = useState(new Date())
    return (
        <div>
            <AppointmentBanner
                date={date}
                setDate={setDate}
            ></AppointmentBanner>
            <AvailableAppointment
                date={date}
            ></AvailableAppointment>
            <Footer></Footer>
        </div>
    );
};

export default Appointment;
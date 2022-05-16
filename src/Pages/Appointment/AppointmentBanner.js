import { format } from 'date-fns';
import { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import chair from '../../assets/images/chair.png'

const AppointmentBanner = ({date,setDate}) => {
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} className="max-w-sm rounded-lg shadow-2xl" alt='' />
                <div>
                    <DayPicker
                        mode="single"
                        selected={date}
                        // onSelect={setDate} avabe duble click korle error dye
                        onDayClick={setDate}
                        // onDayClick kore duble click korle error dey na
                    />
                    <p>You picked </p>
                </div>

            </div>

        </div>
    );
};

export default AppointmentBanner;
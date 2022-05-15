import { format } from 'date-fns';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.inti';

const BookingModal = ({ treatment, setTreatment, date }) => {
    const [user, loading, error] = useAuthState(auth)
    const {name, slots } = treatment

    const handleSubmit = event => {
        event.preventDefault()
        const slot = event.target.slot.value;
        console.log(slot)

        setTreatment(null)
    }
    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="booking-modal" className="btn btn-sm bg-accent btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg mb-5 text-secondary">{name}</h3>
                    <form onSubmit={handleSubmit} className='grid grid-cols-1 gap-4 justify-items-center'>
                        <input type="text" disabled value={format(date, 'PP')} className="input w-full max-w-xs" readOnly />
                        <select name='slot' className="select select-bordered w-full max-w-xs">
                            {
                                slots.map((slot, index) => <option
                                    key={index}
                                    value={slot}
                                >{slot}</option>)
                            }
                        </select>
                        <input type="text" name='name' value={user?.displayName || ' '} disabled className="input input-bordered w-full max-w-xs" required />
                        <input type="email" name='email' value={user?.email || ' '} disabled className="input input-bordered w-full max-w-xs" required />
                        <input type="text" name='phone' placeholder="Phone Number" className="input input-bordered w-full max-w-xs" required />
                        <input type="submit" placeholder="Submit" className="btn btn-secondary w-full max-w-xs" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;
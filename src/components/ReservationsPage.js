import React, { useState, useEffect, useRef } from 'react';
import ConfirmedBooking from './ConfirmedBooking';

function ReservationsPage() {
    const [reservationValues, setReservationValues] = useState({
        date: '',
        time: '',
        guests: 1,
        occasion: '',
    });
    const [isConfirmed, setIsConfirmed] = useState(false); // State to track confirmation
    const availableTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
    const timeoutId = useRef(null); // Using a ref for the timeout ID

    const error = !reservationValues.date || !reservationValues.time || !reservationValues.guests || !reservationValues.occasion;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (error) {
            return;
        }
        setIsConfirmed(true); // Set confirmation state to true

        // Reset confirmation state after 2 seconds
        timeoutId.current = setTimeout(() => {
            setIsConfirmed(false);
            setReservationValues({
                date: '',
                time: '',
                guests: 1,
                occasion: '',
            });
        }, 2000);
    };

    // Clear timeout if the component unmounts or if the confirmation state changes
    useEffect(() => {
        return () => clearTimeout(timeoutId.current); // Cleanup
    }, []);

    // Render confirmation or reservation form
    return (
        <div>
            <h1 className='title'>Reservations</h1>
            {isConfirmed ? (
                <ConfirmedBooking reservationValues={reservationValues} />
            ) : (
                <form className='Reservation_form' onSubmit={handleSubmit}>
                    <label htmlFor="res-date">Choose date</label>
                    <input
                        type="date"
                        id="res-date"
                        value={reservationValues.date}
                        onChange={(e) => { setReservationValues({ ...reservationValues, date: e.target.value }) }}
                    />
                    
                    <label htmlFor="res-time">Choose time</label>
                    <select
                        id="res-time"
                        value={reservationValues.time}
                        onChange={(e) => { setReservationValues({ ...reservationValues, time: e.target.value }) }}
                    >
                        <option value="">Select a time</option>
                        {availableTimes.map(time => {
                            return <option key={time}>{time}</option>;
                        })}
                    </select>

                    <label htmlFor="guests">Number of guests</label>
                    <input
                        type="number"
                        placeholder="1"
                        min="1"
                        max="10"
                        id="guests"
                        value={reservationValues.guests}
                        onChange={(e) => { setReservationValues({ ...reservationValues, guests: e.target.value }) }}
                    />

                    <label htmlFor="occasion">Occasion</label>
                    <select
                        id="occasion"
                        value={reservationValues.occasion}
                        onChange={(e) => { setReservationValues({ ...reservationValues, occasion: e.target.value }) }}
                    >
                        <option value="">Select an occasion</option>
                        <option value="Birthday">Birthday</option>
                        <option value="Anniversary">Anniversary</option>
                    </select>

                    <button className='primary_btn' disabled={error} type='submit'>Make Your Reservation</button>
                </form>
            )}
        </div>
    );
}

export default ReservationsPage;

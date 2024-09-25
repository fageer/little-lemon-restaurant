import React from 'react';

function ConfirmedBooking() {
    return (
        <div className="modal">
            <div className="modal-content">
                <span className="close">&times;</span>
                <h1>Thanks!</h1>
                <p>Your booking has been confirmed.<br/> ✔</p>
            </div>
        </div>
    );
}

export default ConfirmedBooking;

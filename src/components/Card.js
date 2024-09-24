import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMotorcycle } from '@fortawesome/free-solid-svg-icons';

function Card({ image }) {
    return (
        <div className='card'>
            <img src={image} alt="Hero 1" />
            <div>
                <div>
                    <h3>Greek Salad</h3>
                    <span>$12.99</span>
                </div>
                <p>A delicious Greek salad made with fresh lettuce, tomatoes, cucumbers, olives, and feta cheese.</p>
                <button>Order Delivery <FontAwesomeIcon icon={faMotorcycle} /></button>
            </div>
        </div>
    );
}

export default Card;

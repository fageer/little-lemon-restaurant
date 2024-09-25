import React from 'react';
import { Link } from 'react-router-dom';
import hero1 from "../assets/images/hero1.jpg"

function Hero() {
    return (
        <section id='hero_section'>
            <div className='hero_content'>
                <h1>Little Lemon</h1>
                <h3>Riyadh</h3>
                <p>Little Lemon is a cozy, family-friendly restaurant offering delicious, freshly made dishes. Enjoy a variety of meals made from locally sourced ingredients. Reserve your table online today!</p>
                <Link to="/reservations"><button className='primary_btn'>Reserve a table</button></Link>
            </div>
            <img className='hero' src={hero1} alt="hero" />
        </section>
    );
}

export default Hero;

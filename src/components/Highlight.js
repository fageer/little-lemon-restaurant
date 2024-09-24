import React from 'react';
import Card from './Card';
import highlight1 from "../assets/images/greek salad.jpg"
import highlight2 from "../assets/images/1_ji5jV-KoRbEFScZQUPYyGg.png"
import highlight3 from "../assets/images/lemon dessert.jpg"

function Highlight() {
    return (
        <section id='highlight_section'>
            <div className='highlight_header'>
                <h1>This Week Specials!</h1>
                <button className='primary_btn'>Online Menu</button>
            </div>
            <div className='highlights'>
                <Card image={highlight1} />
                <Card image={highlight2} />
                <Card image={highlight3} />
            </div>
        </section>
    );
}

export default Highlight;

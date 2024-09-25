import React from 'react';
import Card from './Card';
import highlight1 from "../assets/images/greek salad.jpg"
import highlight2 from "../assets/images/food3.jpg"
import highlight3 from "../assets/images/lemon dessert.jpg"

function Highlight() {
    return (
        <section id='highlight_section'>
            <div className='highlight_header'>
                <h1>This Week Specials!</h1>
                <button className='primary_btn'>Online Menu</button>
            </div>
            <div className='highlights'>
                <Card image={highlight1} title="Greek Salad" />
                <Card image={highlight2} title="Greek Salad" />
                <Card image={highlight3} title="Lemon Dessert" />
            </div>
        </section>
    );
}

export default Highlight;

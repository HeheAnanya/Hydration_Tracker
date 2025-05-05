import React from 'react'
import './Products.css'
import water from '../assets/water.png'
import Material from './Material'
import bottle1 from '../assets/bottle1.png'
import bottle2 from '../assets/bottle2.png'
import bottle3 from '../assets/bottle3.png'
import waterDispensor from '../assets/waterDispensor.png'
import tds from '../assets/tds.png'
import fit from '../assets/fit.png'
import dress from '../assets/dress.png'


const Products = () => {
    return (
        <div style={{ backgroundImage: "url('https://img.freepik.com/premium-photo/contemporary-white-gray-background-versatile-presentations-posters-templates_1086261-592.jpg?semt=ais_hybrid&w=740')", backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>

            <div className='main2'>
                <div className='text'>
                    Your health begins with a glass of water.
                </div>
                <div className='photoDiv'><img className='photo' src={water} alt="Glass of Water" /></div>
            </div>
            <div className='materials'>
                <Material image={bottle1} description="Stylish lavender Milton bottle with a matte finish, perfect for daily hydration.
Leak-proof, easy to carry with a strap – ideal for work, gym, or travel" price="Rs 308.00" name="Milton Insulated Water Bottle – Lavender Edition" />
                <Material image={bottle2} description="Compact and sporty design with a firm grip, ideal for cycling and workouts.
Leak-resistant with an easy-sip cap, perfect for on-the-go hydration." price="Rs 129.00" name="BTWIN Sports Sipper Bottle" />
                <Material image={bottle3} description="Motivational time markers remind you to drink water throughout the day.
Stylish gradient design with leakproof lid—perfect for daily hydration goals." price="Rs 239.00" name=" Gradient Time-Marker Water Bottle" />
                <Material image={waterDispensor} description="Traditional copper container that naturally purifies and cools water.
Health-friendly and ideal for home use with a vintage, elegant design." price="Rs. 2799.00" name="Copper Water Dispenser" />
                <Material image={tds} description="This handheld TDS (Total Dissolved Solids) meter is used to measure the purity of water by indicating the concentration of dissolved substances. Ideal for checking drinking water, aquariums, and RO/DI systems." price="Rs 151.00" name="Digital TDS Meter" />
                <Material image={fit} description="This smart fitness band tracks heart rate, steps, and activity levels with a sleek design. Perfect for health-conscious users who want real-time fitness insights on their wrist.

" price="Rs. 1399.00" name="Smart Fitness Band" />
                <Material image={dress} description="A bold and quirky black T-shirt featuring a humorous `Save Water Drink Beer `print. Great for casual wear and making a fun style statement.

" price="Rs. 755" name="Graphic T-Shirt" />

            </div>

        </div>
    )
}

export default Products
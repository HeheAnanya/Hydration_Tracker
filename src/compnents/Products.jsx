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
    const list = [
        {
            image: bottle1,
            price: "Rs 340.00",
            name: "Milton Insulated Water Bottle – Lavender Edition",
            link:"https://www.milton.in/products/handy-stainless-steel-bottle?variant=43048913272932&country=IN&currency=INR&utm_medium=product_sync&utm_source=google&utm_content=sag_organic&utm_campaign=sag_organic&srsltid=AfmBOoqqsqezs-Smj1TdKTwhT07BP_kdJeOtGucnHLxy0p42cRlox_OYg14"
        },
        {
            image: bottle2,
            price: "Rs 129.00",
            name: "BTWIN Sports Sipper Bottle",
            link:"https://www.zeptonow.com/pn/btwin-by-decathlon-cycling-water-bottle-750ml-green/pvid/ffbf4ee3-41df-4c42-8f59-27f5a0c54698?srsltid=AfmBOor8kCXwW-APz-HkTovc9y4BcWrT54Unan3PH4F80CoiVPynMdTeFjQ"
        },
        {
            image: bottle3,
            price: "Rs 239.00",
            name: "Gradient Time-Marker Water Bottle",
            link:"https://www.flipkart.com/finaro-motivational-water-bottle-time-marker-no-leakage-bpa-free-1000-ml-sipper/p/itm53415d4d3d410?pid=BOTH8AY5PGKEMPHG&lid=LSTBOTH8AY5PGKEMPHG4PNM1V&marketplace=FLIPKART&cmpid=content_bottle_8965229628_gmc"
        },
        {
            image: waterDispensor,
            price: "Rs 2799.00",
            name: "Copper Water Dispenser",
            link:"https://www.crockerywala.com/products/pure-copper-water-dispenser-cooler-by-crockery-wala-company-yellow?variant=48576321093915&country=IN&currency=INR&utm_medium=product_sync&utm_source=google&utm_content=sag_organic&utm_campaign=sag_organic&srsltid=AfmBOoqOrfk4ZOhxGKpBW7ChwuUeknuZ3y0LCPaTSlslY5WXW2HPbPuw45g"
        },
        {
            image: tds,
            price: "Rs 151.00",
            name: "Digital TDS Meter",
            link:"https://www.amazon.in/Themisto-TH-TDS10-Digital-TDS-Meter/dp/B09BQVHQMP?source=ps-sl-shoppingads-lpcontext&ref_=fplfs&psc=1&smid=AJ6SIZC8YQDZX"
        },

        {
            image: dress,
            price: "Rs 755.00",
            name: "Graphic T-Shirt",
            link:"https://hankhawk.com/products/save-water-drink-beer-sarcastic-t-shirt?variant=50557356572982&country=IN&currency=INR&utm_medium=product_sync&utm_source=google&utm_content=sag_organic&utm_campaign=sag_organic&srsltid=AfmBOopsN7Cq_QeQbkY-D3M5DbXDwyrUNHN_Ji6KCAhEiS3KTqQZ7GPVIMw"
        },
        {
            image: fit,
            price: "Rs 1399.00",
            name: "Smart Fitness Band",
            link:"https://vlebazaar.in/Fastrack-reflex-20-Uni-sex-activity-tracker-Calorie-counter-Call-and-message-not_1?srsltid=AfmBOoqVRB-v7e1qGWrzDNQuhiL9MOotxJ25nJdu2OPorNHEY1V6T2v8cOI"
        },

    ]

    return (
        <div style={{ backgroundImage: "url('https://img.freepik.com/premium-photo/contemporary-white-gray-background-versatile-presentations-posters-templates_1086261-592.jpg?semt=ais_hybrid&w=740')", backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>

            <div className='main2'>
                <div className='text'>
                    Your health begins with a glass of water.
                </div>
                <div className='photoDiv'><img className='photo' src={water} alt="Glass of Water" /></div>
            </div>
            <div className='materials'>
                {list.map((e) => {
                    return (
                        <Material image={e.image} name={e.name} price={e.price} link={e.link}/>

                    )
                })}



            </div>

        </div>
    )
}

export default Products
import React from 'react'
import './Material.css'

const Material = (prop) => {
  return (
    <div className='item'>
      <div className='image-container'>
        <img src={prop.image}></img>
        </div>
      <div className='image-info'>
        <p className='product-price'>{prop.price}</p>
        <p>{prop.name}</p>
        {/* <p>{prop.description}</p> */}
        </div>
    </div>
  )
}

export default Material
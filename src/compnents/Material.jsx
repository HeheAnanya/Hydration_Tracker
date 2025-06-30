import React from 'react'
import './Material.css'

const Material = (prop) => {
  return (
    <div className='item'>
      <div className='image-container'>
        <a href={prop.link}><img src={prop.image}></img></a>
        </div>
      <div className='image-info' id={prop.id}>
        <p className='product-price'>{prop.price}</p>
        <p className='product-name'>{prop.name}</p>
        {/* <p>{prop.description}</p> */}
        </div>
    </div>
  )
}

export default Material
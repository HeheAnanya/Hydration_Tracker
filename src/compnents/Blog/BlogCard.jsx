import React from 'react'
import './BlogCard.css'

const BlogCard = (prop) => {
  return (
    <div className='blog_card'>
        <img src= {prop.src}/>
        <div className='content'>
                  <h2>{prop.head}</h2>
        <h4>{prop.date}</h4>
        <p>{prop.mess}</p>
        </div>


    </div>
  )
}

export default BlogCard
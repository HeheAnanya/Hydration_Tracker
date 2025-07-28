import React from 'react';
import './Card.css';

const Card = (props) => {
  return (
    <>
    <a href={props.link}><div className='cards'>
      <div className='CardContent'>
        <img src={props.source} alt={props.alt} />
        <div className='overlay'>
          <h2>{props.alt}</h2>
          <p>{props.par}</p>
        </div>
      </div>
    </div></a>
  </>
  );
};

export default Card;
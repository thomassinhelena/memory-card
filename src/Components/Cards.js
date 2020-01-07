import React from 'react';
import './Cards.css';

const Card = props => {
  const {frontImg, backImg, flipped, onClick} = props
  const img = flipped ? frontImg : backImg
  return (
    <div className="Card" onClick={onClick}>
      <img src={process.env.PUBLIC_URL + '/img/agnodice.png'} />
      <img src={process.env.PUBLIC_URL + '/img/AnnetteKellerman.png'} />
      <img src={process.env.PUBLIC_URL + '/img/NellyBly.png'} />
      <img src={process.env.PUBLIC_URL + '/img/wuzetian.png'} />
      <img src={process.env.PUBLIC_URL + '/img/backImg.png'} />
      <img src={img} alt=""/>
    </div>
  )
};

export default Card;
      
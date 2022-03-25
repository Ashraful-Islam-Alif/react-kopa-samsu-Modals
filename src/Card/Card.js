import React from "react";
import "./Card.css";
import { BsFillCartFill } from 'react-icons/bs';
const Card = ({ gunData, handleAddToCart }) => {
  const { name, bullet, capacity, action, price, img } = gunData;


  return (
    <div className="card">
      <div className="image-container">
        <img src={img} alt="" />
      </div>
      <div className="gun-info">
        <h1>{name}</h1>
        <p>Bullet Type: {bullet}</p>
        <p>Capacity: {capacity}</p>
        <p>Action: {action}</p>
      </div>
      <div className="add-to-cart">
        <button onClick={() => handleAddToCart(gunData)}>
          <BsFillCartFill className="icon"></BsFillCartFill>
        </button>
        <h1>$ {price}</h1>
      </div>
    </div>
  );
};

export default Card;

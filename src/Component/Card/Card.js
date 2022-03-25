import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import "./Card.css";

const Card = (props) => {
    const {name, img, price, category}= props.camera;
    return (
        <div>
            <div class="card" className="cardwidth" >
  <img src={img} class="card-img-top" alt="camera"></img>
  <div class="card-body">
  <h5 class="card-title text-dark font-weight-bold">{name}</h5>
    <p class="card-text text-danger  font-weight-bold">${price}</p>
    <p class="card-text text-danger  font-weight-bold">{category}</p>
    <button  class="btn btn-danger " > Add to Cart
    <FontAwesomeIcon icon={faShoppingCart} className="product-btn"></FontAwesomeIcon>
     
    </button>
  </div>
</div>
        </div>
    );
};

export default Card;
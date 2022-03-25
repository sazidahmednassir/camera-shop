import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import "./Card.css";

const Card = () => {
    return (
        <div>
            <div class="card" className="cardwidth" >
  <img src="https://m.media-amazon.com/images/I/61J18Xn9bfS._AC_SX569_.jpg" class="card-img-top" alt="camera"></img>
  <div class="card-body">
  <h5 class="card-title text-dark font-weight-bold">Canon</h5>
    <p class="card-text text-danger  font-weight-bold">$1249</p>
    <p class="card-text text-danger  font-weight-bold">camera</p>
    <button  class="btn btn-danger " > Add to Cart
    <FontAwesomeIcon icon={faShoppingCart} className="product-btn"></FontAwesomeIcon>
     
    </button>
  </div>
</div>
        </div>
    );
};

export default Card;
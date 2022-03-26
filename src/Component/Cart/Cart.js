import React from 'react';
import "./Cart.css";

const Cart = () => {
    return (
        <div>
<div class="card text-white bg-primary mb-3" className="cart-width">
 
  <div class="card-body d-flex">
  <img src="https://m.media-amazon.com/images/I/61J18Xn9bfS._AC_SX569_.jpg" class="card-img-top" className="box"   alt="..."></img>
    <h5 class="card-title">Name: Canon</h5>
    
  </div>
  <div>
    <h5>Picked Camera: </h5>
  </div>
  <div class="d-flex flex-column ">
  <button  class="btn btn-danger  mt-2" > Pick Camera For me
     
     </button>
     <button  class="btn btn-danger mt-2" > Delete
      
     </button>
  </div>
 
</div>
        </div>
    );
};

export default Cart;
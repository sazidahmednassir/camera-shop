import React from 'react';
import "./Cart.css";

const Cart = (props) => {
  const { cart } = props;
    return (
        <div>
<div class="card text-white bg-primary mb-3" className="cart-width">
 
{
cart.map((ca)=>(
  <div class="card-body d-flex">
  <img src={ca.img} class="card-img-top" className="box"   alt="camera"></img>
    <h5 class="card-title">Name: {ca.name}</h5>
    </div>
))}
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
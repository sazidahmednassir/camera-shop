import React from 'react';
import "./Cart.css";

const Cart = (props) => {
  const { cart , random} = props;
  // console.log(zerocart.length)


    return (
    
        <div>
          <div>
            <h1>Selected Camera: {cart.length}</h1>
          </div>
<div class="card text-white bg-primary mb-3" className="cart-width">
 
{
cart.map((ca)=>(
  <div class="card-body d-flex">
  <img src={ca.img} class="card-img-top" className="box"   alt="camera"></img>
    <h5 class="card-title">Name: {ca.name}</h5>
    </div>
))}
  <div>
   
    <h5>Picked Camera: {random.name} </h5>
    
    <img src={random.img ? random.img: " "} className="box" alt="" ></img>
  </div>
  <div class="d-flex flex-column p-2 ">
  <button onClick={() => props.randomCamera(props.cart)}  class="btn btn-danger  mt-2" > Pick Camera For me
     
     </button>
     <button onClick={() => props.deleteAllCart()} class="btn btn-danger mt-2" > Delete
     deleteAllCart
     </button>
  </div>
 
</div>
        </div>
    );
};

export default Cart;
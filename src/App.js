import { useEffect, useState } from 'react';
import './App.css';
import Card from './Component/Card/Card';
import Cart from './Component/Cart/Cart';
import Navbar from './Component/Navbar/Navbar';

function App() {
  const [cameras, setCamera] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(()=>{
    fetch("data.json")
    .then(res=>res.json())
    .then(data=>setCamera(data))
  },[])

  const handleAddToCart = (camera) => {
    const newCart = [...cart, camera];
    setCart(newCart);
    console.log(newCart)
  };
  return (
    <div className="App">
      <Navbar></Navbar>
      <div class="container-fluid">
  <div class="row ">
  <div class="col-md-2 bg-secondary text-white order-md-2 sticky-top">
     <Cart cart={cart}></Cart>
    </div>
    <div class="col-md-10 mt-2 ">
     <div class="container d-flex flex-wrap justify-content-between align-items-end mt-3 order-md-1">{cameras.map((camera) => (
          <Card camera={camera} key={camera.id} handleAddToCart={handleAddToCart} ></Card> 
        ))}</div>
    </div>
   
  </div>
</div>
    </div>
  );
}

export default App;

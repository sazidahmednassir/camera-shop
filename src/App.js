import './App.css';
import Card from './Component/Card/Card';
import Navbar from './Component/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <div class="container">
  <div class="row ">
    <div class="col-md-10 mt-2">
    <Card></Card>
    </div>
    <div class="col-md-2">
      Second in DOM, unordered
    </div>
   
  </div>
</div>
    </div>
  );
}

export default App;

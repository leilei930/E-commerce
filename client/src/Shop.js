import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Navbar from './NavBar'
import Main from './Main'
import Data from './Data'

// The App component is wrapped in CountProvider to provide the context
const Shop = () => {

  const [email, setEmail] = useState('');
  const [shoppingList, setShoppingList] = useState([]);
  useEffect(() => {
    const storedShoppingList = sessionStorage.getItem('shoppingList');
    if (storedShoppingList) {
      setShoppingList(JSON.parse(storedShoppingList));
    }
  }, []);
  const totalAmount = shoppingList.reduce((total, item) => total + parseInt(item.price), 0);

  const handleOrder = async () => {
    try {
      const orderData = shoppingList.map(item => ({
        product: item.product_name,
        price: item.price
      }));
      orderData.push({ user: localStorage.key(0) });

      const response = await fetch('http://50.17.48.231:3001/order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(orderData)
      });

      if (response.ok) {
        window.alert("Successful order!")
        // Order successful, do something (e.g., show a success message)
      } else {
        // Handle error response (e.g., show an error message)
      }
    } catch (error) {
      // Handle error (e.g., show an error message)
      console.error('Error placing order:', error);
    }
  };
  return (
<>
<div class="top d-flex">
  <div class="col-1"></div>
  <div class="col-3">
    <img className="img1 img-fluid rounded" src="./logo1.jpg" alt="Logo" />
  </div>
  <div class="col-5">
    <form>
      <div class="input-group">
        <input type="text" class="form-control" placeholder="Search..." />
        <div class="input-group-append">
          <button class="btn btn-primary" type="submit">Search</button>
        </div>
      </div>
    </form>
  </div>
  <div class="col-2">
    <div class="Shopping">
    <button class="btn btn-secondary">
    <Link to="/shop" style={{ color: 'white', textDecoration: 'none' }}>
        Shopping List
    </Link>
    </button>
    </div>
  </div>
  <div class="col-1"></div>
</div>

<Navbar email={email}/>
<div className="row">
        <div className="col-5"></div>
<div class='align-items-center'><h2>Shopping List</h2></div>
</div>

{shoppingList.map((item, index) => (
<div className="row">
        <div className="col-3"></div>

          <div className="col-6" key={index}>
           <div className="d-flex align-items-center mb-3">
           
             <img src={item.image} alt="Product" className="img-fluid mr-2" style={{ width: '100px', height: '100px' }} />
             <div className="col-6">
               <h3>{item.product_name}</h3>
              </div>
              <div className="col-2">
               <h5>${item.price}</h5>
             </div>
           </div>
         </div>

        <div className="col-1"></div>
      </div>
  ))}
<div className="row">
      <div className="col-3"></div>
      <div className="col-6">
        <div className="d-flex align-items-center mb-3">
          <div className="col-6">
            <h4>Total Amount:</h4>
          </div>
          <div className="col-2">
            <h4>${totalAmount}</h4>
          </div>
        </div>
      </div>
      <div className="col-1"></div>
    </div>

    <div className="row">
      <div className="col-3"></div>
      <div className="col-6">
        <div className="text-center">
          <button className="btn btn-primary" onClick={handleOrder}>Order Now</button>
        </div>
      </div>
      <div className="col-1"></div>
    </div>
</>
  );
};

export default Shop;
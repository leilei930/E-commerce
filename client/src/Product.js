import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Navbar from './NavBar'
import Main from './Main'
import Data from './Data'
import { useParams } from 'react-router-dom';
function Product() {

    const {productname} = useParams();
    const [shoppingList, setShoppingList] = useState([]);
    const [data, setData] = useState([]);

    useEffect(() => {
      fetchData();

    const savedShoppingList = sessionStorage.getItem('shoppingList');
    if (savedShoppingList) {
      setShoppingList(JSON.parse(savedShoppingList));
    }
    }, []);

    useEffect(() => {
        // Save the shopping list to session storage whenever it changes
        sessionStorage.setItem('shoppingList', JSON.stringify(shoppingList));
      }, [shoppingList]);
  
    const fetchData = async () => {
      try {
        const response = await fetch('http://50.17.48.231:3001/data');
        const data = await response.json();
        const dataArray = Object.values(data); 
        setData(dataArray);
      } catch (error) {
        console.error('Error retrieving data:', error);
      }
    };
    const filteredData = data.filter((item) => item.product_name === productname);

    const addToCart = (item) => {
        setShoppingList([...shoppingList, item]);
        // You can perform any additional actions here, such as displaying a success message
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
<Navbar/>

{filteredData.map((item, index) => (
  <div className="col-10 mx-auto my-4" key={index}>
    <div className="row">
      <div className="col-2 col-md-5 d-flex justify-content-center">
        <img src={item.image} alt="Logo" className="img-fluid" />
      </div>
      <div className="col-8 col-md-7 d-flex flex-column">
        <h2 className="mb-4">Product Name: {item.product_name}</h2>
        <h4 className="text-primary mb-3">Price: {item.price}</h4>
        <p className="mb-3">Inventory: {item.inventory}</p>
        <p className="mb-3">Description: {item.description}</p>
        <button className="btn btn-primary " onClick={() => addToCart(item)}>Add to Cart</button>
      </div>
    </div>
  </div>
))}

          </>
    );
}

export default Product;
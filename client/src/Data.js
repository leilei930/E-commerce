import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom';

function Data() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

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

  return (
    <div className="container">
      <div className="row">
        {data.map((item, index) => (
          <div className="col-12 col-md-6 col-lg-4 my-4" key={index}>
            <div className="border p-3">
              <div className="d-flex justify-content-center">
                <Link to={`/${item.product_name}`}>
                  <img src={item.image} alt="Logo" width="200px" height="200px" />
                </Link>
              </div>
              <div>
                <p>Inventory: {item.inventory}</p>
                <p>Price: {item.price}</p>
                <p>Product Name: {item.product_name}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Data;
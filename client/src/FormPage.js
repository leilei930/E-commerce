import React, { useState, useEffect } from 'react';

function FormPage() {
  const [productName, setProductName] = useState('');
  const [price, setPrice] = useState('');
  const [inventory, setInventory] = useState('');
  const [description, setDescription] = useState('');
  const [photo, setPhoto] = useState(null);
  const [data, setData] = useState([]);

  useEffect(() => {
    const firstKey = localStorage.key(0);
    if (firstKey !== 'admin@gmail.com') {
      // Redirect to the login page
      window.open('/error', '_self');
    }
  });


  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === 'productName') {
      setProductName(value);
    } else if (name === 'price') {
      setPrice(value);
    } else if (name === 'inventory') {
      setInventory(value);
    } else if (name === 'description') {
      setDescription(value);
    }
  };

  const handlePhotoUpload = (event) => {
    const file = event.target.files[0];
    setPhoto(file);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform the upload to your server here, including the photo and other form data
    const formData = new FormData();
    formData.append('productName', productName);
    formData.append('price', price);
    formData.append('inventory', inventory);
    formData.append('description', description);
    formData.append('photo', photo);

    // Send the formData to your server using fetch or any other HTTP library
    fetch('http://50.17.48.231:3001/upload', {
      method: 'POST',
      body: formData
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Data and photo uploaded:', data);
        // Reset form fields and show success message if needed
        setProductName('');
        setPrice('');
        setInventory('');
        setDescription('');
        setPhoto(null);
        window.alert("Successful upload");
      })
      .catch((error) => {
        console.error('Error uploading data and photo:', error);
        alert("Upload failed")
        // Show error message if needed
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://50.17.48.231:3001/order');
      const data = await response.json();
      const dataArray = Object.values(data); 
      setData(dataArray);
    } catch (error) {
      console.error('Error retrieving data:', error);
    }
  };

  return (
    <>
    <div className="d-flex justify-content-center vh-100 my-5">
      <div className="card p-4 ">
        <h2>Add Product</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="productName" className="form-label">
              Product Name:
            </label>
            <input
              type="text"
              id="productName"
              name="productName"
              className="form-control"
              value={productName}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="price" className="form-label">
              Price:
            </label>
            <input
              type="text"
              id="price"
              name="price"
              className="form-control"
              value={price}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="inventory" className="form-label">
              Inventory:
            </label>
            <input
              type="text"
              id="inventory"
              name="inventory"
              className="form-control"
              value={inventory}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Product Description:
            </label>
            <textarea
              id="description"
              name="description"
              className="form-control"
              value={description}
              onChange={handleInputChange}
            ></textarea>
          </div>
          <div className="mb-3">
            <label htmlFor="photo" className="form-label">
              Upload Photo:
            </label>
            <input
              type="file"
              id="photo"
              name="photo"
              className="form-control"
              onChange={handlePhotoUpload}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
        </div>
        <div className="card p-4">
        <h2>Update Product</h2>
        <form>
          <div className="mb-3">
            <label htmlFor="productName" className="form-label">
              Exist Product Name:
            </label>
            <input
              type="text"
              id="newproductName"
              name="newproductName"
              className="form-control"
              
              
            />
          </div>
          <div className="mb-3">
            <label htmlFor="price" className="form-label">
              New Price:
            </label>
            <input
              type="text"
              id="newprice"
              name="newprice"
              className="form-control"
              
              
            />
          </div>
          <div className="mb-3">
            <label htmlFor="inventory" className="form-label">
              New Inventory:
            </label>
            <input
              type="text"
              id="newinventory"
              name="newinventory"
              className="form-control"
              
              
            />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              New Product Description:
            </label>
            <textarea
              id="newdescription"
              name="newdescription"
              className="form-control"
              
              
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
        </div>
        <div className="card p-4">
     <h2>Delete Product</h2>
     <form >
       <div className="mb-3">
         <label htmlFor="deleteProductName" className="form-label">
           Product Name:
         </label>
         <input
           type="text"
           id="deleteProductName"
           name="deleteProductName"
           className="form-control"
          
           
         />
       </div>
       <button type="submit" className="btn btn-danger">
         Delete Product
       </button>
     </form>
     </div>
      </div>
      <div className="container">
      <h2>User order</h2>

        {data.map((item, index) => (
          <div className="col-12 col-md-6 col-lg-4 my-4" key={index}>
              <div>
                <p>User {item.user} have order: Product {item.product} at Price: {item.price}</p>
          </div>
          </div>
        ))}

    </div>
    </>
  );
}

export default FormPage;

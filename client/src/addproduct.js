import { useState } from 'react';
function Addproduct() {
    const [formData, setFormData] = useState({});

    const handleInputChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const handleSubmit = async (e) => {
      e.preventDefault();
      const response = await fetch('http://10.14.0.2:3001/addproduct', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      const data = await response.json();
      console.log(data);
    };

    return (
        <div class="registration-form">
    
        <form onSubmit={handleSubmit}>
          <div class="form-icon">
              <span><i class="icon icon-user"></i></span>                    
          </div>
              <div class="form-group">
              <input type="email" class="form-control item" id="email" name="email" placeholder="Email" onChange={handleInputChange} />
          </div>
            <div class="form-group">
              <input type="password" id="password" class="form-control item" name="password" placeholder="Password" onChange={handleInputChange} />
            </div>
            <button type="submit" class="btn btn-block create-account">Login</button>
          
          <div>
             <h6>Don't have account? Sign up here</h6>
          </div>
          </form>
          </div>
)

}

export default Addproduct;

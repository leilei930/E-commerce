import { useState } from 'react';
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import { NavigateFunction } from 'react-router-dom';
function RegisterForm() {
    const [formData, setFormData] = useState({});
  
    const handleInputChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      const response = await fetch('http://50.17.48.231:3001/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      const data = await response.json();
      console.log(data);

      if (data.success) {
        window.alert("Success") // Redirect to the success page
      }
    };
  
    return (
      <>
        <div className="registration-form">
          <form onSubmit={handleSubmit}>
            <div className="form-icon">
              <span>
                <i className="icon icon-user"></i>
              </span>
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control item"
                id="username"
                name="username" // Add the name attribute
                placeholder="Username"
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control item"
                id="email"
                name="email" // Add the name attribute
                placeholder="Email"
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control item"
                id="password"
                name="password" // Add the name attribute
                placeholder="Password"
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <button type="submit" className="btn btn-block create-account">
                Create Account
              </button>
            </div>
          </form>
          <div className="social-media">
            <h5>Sign up with social media</h5>
            <div className="social-icons">
              <a href="#">
                <i className="icon-social-facebook" title="Facebook"></i>
              </a>
              <a href="#">
                <i className="icon-social-google" title="Google"></i>
              </a>
            </div>
          </div>
        </div>
      </>
    );
  }
  
  export default RegisterForm;
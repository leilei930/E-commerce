import { useState } from 'react';
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import React, { createContext } from "react";
import Navbar from './NavBar';
const Name = createContext();

function LoginForm({ onEmailChange }) {
  const [formData, setFormData] = useState({});

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const body = JSON.stringify(formData);
    // Parse the JSON string back to an object
    const parsedBody = JSON.parse(body);
    const email = parsedBody.email;
    const password = parsedBody.password    
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;

        window.alert("Success Login")
        user.getIdToken().then((token) => {
          // Store the token in local storage
          localStorage.setItem(email, token);
          onEmailChange(email);
          window.open('/', '_self');
        });

      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        
      });
    
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
         <h6><Link to="/register">Don't have account? Sign up here</Link></h6>
      </div>
      </form>
      </div>
  );
}

export default LoginForm;
export { Name };
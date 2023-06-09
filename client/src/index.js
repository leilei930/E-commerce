import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import RegisterForm from './Register';
import App from './app'
import No from './No'
import Product from './Product'
import FormPage from "./FormPage"
import LoginForm from "./Login"
import Shop from "./Shop"
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyCZ9WCQUcDF5D2o5tUyjn0QcS3zipc5C8Y",

  authDomain: "ecommerce-39f63.firebaseapp.com",

  databaseURL: "https://ecommerce-39f63-default-rtdb.firebaseio.com",

  projectId: "ecommerce-39f63",

  storageBucket: "ecommerce-39f63.appspot.com",

  messagingSenderId: "218001361973",

  appId: "1:218001361973:web:7bb1c3dd6e358c3887757c",

  measurementId: "G-YF5SRW9J8V"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);



function Root() {
  const [email, setEmail] = useState('');
  const handleEmailChange = (newEmail) => {
    setEmail(newEmail);
  };
 return(
<BrowserRouter>
  <div>
    <Routes>
    <Route path="/" element={<App email={email} />} />
    <Route path="/login" element={<LoginForm onEmailChange={handleEmailChange} />} />
      <Route path="/register" element={<RegisterForm />} />
      <Route path="/upload" element={<FormPage />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/:productname" element={<Product/>} />
      <Route path="/error" element={<No />} />
    </Routes>
  </div>
</BrowserRouter>
 );
};
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<Root/>

);



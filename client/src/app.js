import React, { createContext, useContext, useState } from 'react';
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Navbar from './NavBar'
import Main from './Main'
import Data from './Data'

// The App component is wrapped in CountProvider to provide the context
const App = () => {

  const [email, setEmail] = useState('');
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
<Main/>
<Data/>

</>
  );
};

export default App;
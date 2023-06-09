import { BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import { Name } from "./Login";
import { useLocation } from 'react-router-dom';
const Navbar = () => {
  const location = useLocation();
  const key = localStorage.key(0);
  console.log(key)
  const token = localStorage.getItem(key);

  function handleLogout() {
    localStorage.removeItem(key)
    window.location.reload(false);
  };
    return (
        <>
<div class="container1">
  <div class="row">
    <div class="col-1"></div> 
    <div class="col-10">
      <nav class="navbar navbar-expand navbar-light bg-light">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link"><Link to="/">Home</Link></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Services</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Contact</a>
          </li>
          {key === 'admin@gmail.com' && (
                  <li className="nav-item">
                    <Link className="nav-link text-danger" to="/upload">Admin</Link>
                  </li>
                )}
        </ul>
        
        {token ? (
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <a className="nav-link">Welcome { key }</a>
                </li>
                <li className="nav-item">
                  <button className="btn btn-link nav-link" onClick={handleLogout}>
                    Logout
                  </button>
                </li>
              </ul>
            ) : (
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <a className="nav-link">
                    <Link to="/login">Login</Link>
                  </a>
                </li>
              </ul>
            )}
          </nav>
        </div>
        <div className="col-1"></div>
      </div>
    </div>
  </>
    );
};

export default Navbar;

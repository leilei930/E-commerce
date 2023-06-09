import { BrowserRouter, Routes, Route, Link} from 'react-router-dom';
const Main = () => {

  return(
    <>
<div class="container1">
  <div class="row">
    <div class="col-1"></div> 
    <div class="col-3">
      
      <nav class="nav flex-column navbar-custom">
        <a class="nav-link border-bottom border-right border-left" href="/Shoes">Shoes</a>
        <a class="nav-link border-bottom border-right border-left" href="#">Clothes</a>
        <a class="nav-link border-bottom border-right border-left" href="#">Pants</a>
        <a class="nav-link border-bottom border-right border-left" href="#">Hats</a>
      </nav>
    </div>
    <div class="col-7">
    <div class="NewProduct">             
        <div class="title">
        <h3>New Product is avaliable now!!</h3>
        </div>
        <div class="title">
        <img src="./newshoesbig.jpg" />
        </div>
        </div>
    </div>
    
    <div class="col-1"></div>
  </div>
</div>
<div class="container1">
<div class="row">
<div class="col-1"></div> 
<div class="col-10">
    <div class="Txt">
        <h2 class="text-center">Feature Product </h2>
    </div>
    <hr/>
    </div>
    <div class="col-1"></div> 
    </div>
</div>
</>
  );

};

export default Main;
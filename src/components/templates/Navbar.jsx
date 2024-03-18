import React from 'react';
import Offcanvas from './Offcanvas';
import '../../styles/main.css'

import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function Navbar() {
  return (
    <div>
    <nav className="navbar navbar-expand-lg navbar-dark" style={{backgroundColor:"rgba(0, 0, 73, 0.84)"}}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Navbar</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarNavDropdown">
          <ul className="navbar-nav d-flex ">
            <li className="nav-item">
              <a className="nav-link active main-text-color" aria-current="page" href="#" >Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link main-text-color" href="#" >Features</a>
            </li>
            <li className="nav-item">
              <a className="nav-link main-text-color" href="#" >Pricing</a>
            </li>
            </ul>
            <div className='ms-auto'>
          
            <ul className='navbar-nav '>
            <li>
            <a className="navbar-brand" href="#">
                <AccountCircleIcon fontSize='large'/>
              </a>
            </li>
            <li className="nav-item dropdown d-flex pe-5">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{color:"#d4dade"}}>
                Username
              </a>
              <ul className="dropdown-menu main-bg" >
                <li><a className="dropdown-item main-text-color" href="#">Profile</a></li>
                <li><a className="dropdown-item main-text-color" href="#">Another action</a></li>
                <li><a className="dropdown-item main-text-color" href="#">Logout</a></li>
              </ul>
            </li>
            </ul>
            </div>
            
            

          
        </div>
      </div>
    </nav>
    <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5>
        <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
        <Offcanvas />
      </div>
    </div>
    </div>
  );
}

export default Navbar;

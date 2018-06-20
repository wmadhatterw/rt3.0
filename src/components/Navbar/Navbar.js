import React from 'react';
import './navbar.css';
import logo from '../../logo.svg';
const Navbar = (props) => {
    return(
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <a className="navbar-brand" href="/"><img className="logo" src={logo} alt="logo" /></a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
            aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
      
          <div className="collapse navbar-collapse navbar-color" id="navbarSupportedContent">
            <ul className="navbar-nav navbarLinks mx-auto">
              <li className="nav-item">
                <a className="nav-link" href="/">Receipt Itemizer
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/add">Add Receipts</a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="/receipts">Receipts</a>
              </li>
             
              
              <li className="nav-item">
                <a className="nav-link" href="/weekly">Weekly Report</a>
              </li>
              
            </ul>
          </div>
        </nav>
    );
}

export default Navbar;
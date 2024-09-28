import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light" style={styles.navbar}>
        <div className="container-fluid">
          {/* Logo and Brand */}
          <a className="navbar-brand custom-font" href="#">
            <img
              src="newlogo.jpg"
              alt="Logo"
              width="40"
              height="40"
              className="d-inline-block align-text-top"
            />
            QuickServ
          </a>
          
          {/* Toggler for Mobile */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          
          {/* Navigation Links */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/home">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/viewElectrician">
                  Electrician
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/viewPlumber">
                  Plumber
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

const styles = {
  navbar: {
    background: 'linear-gradient(to right, #FF69B4, #8A2BE2)', // Linear gradient background
    color: '#fff', // White text color for contrast
  },
};

export default Navbar;

// src/Components/Header.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaUserCircle, FaSearch } from 'react-icons/fa';
import { MdOutlineUnsubscribe } from "react-icons/md";
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container-fluid">
        {/* Brand Logo */}
        <NavLink to="/" className="navbar-brand">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/1/11/Amazon_Prime_Video_logo.svg"
            alt="Prime Video"
            style={{ height: '30px' }}
          />
        </NavLink>
    
        {/* Navbar Toggle for Mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
    
        {/* Collapsible Navbar Content */}
        <div className="collapse navbar-collapse" id="navbarContent">
          {/* Centered Nav Links */}
          <ul className="navbar-nav me-auto ms-3">
            <li className="nav-item">
              <NavLink to="/dashboard" className="nav-link text-light"  style={{ marginRight: '20px' }}>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
             <NavLink className="nav-link text-light" style={{ marginRight: '20px' }}>
                Movies
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/tv-shows" className="nav-link text-light" style={{ marginRight: '20px' }}>
                TV Shows
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/live-tv" className="nav-link text-light" style={{ marginRight: '20px' }}>
                Live TV
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/live-tv" className="nav-link text-grey" style={{ marginRight: '20px' }}>
                  |
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/live-tv" className="nav-link text-light" style={{ marginRight: '20px' }}>
              <MdOutlineUnsubscribe /> Subscription
              </NavLink>
            </li>
          </ul>
    
          {/* Right-aligned Search Bar and Profile Icon */}
          <div className="d-flex align-items-center ms-auto">
            <div className="input-group me-3 d-none d-lg-flex">
              <input
                type="text"
                className="form-control"
                placeholder="Search..."
                aria-label="Search"
              />
              <span className="input-group-text bg-primary text-white">
                <FaSearch />
              </span>
            </div>
            <NavLink to="/profile" className="text-light fs-4">
              <FaUserCircle />
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;

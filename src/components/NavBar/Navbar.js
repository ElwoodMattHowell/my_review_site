import React, { useState } from 'react';
import './Navbar.css'; // You can create a CSS file for styling

function Navbar() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">Offline Learning</div>
        <ul className="navbar-menu">
          <li className="navbar-item">
            <a href="/" className="navbar-link">Home</a>
          </li>
          <li className="navbar-item">
            <a href="/gear-reviews" className="navbar-link">Gear Reviews</a>
          </li>
          <li className="navbar-item">
            <a href="/outdoor-guides" className="navbar-link">Outdoor Guides</a>
          </li>
          <li className="navbar-item">
            <a href="/deals" className="navbar-link">Deals</a>
          </li>
          <li className={`navbar-link navbar-item dropdown ${isDropdownOpen ? 'open' : ''}`}>
            <span className="navbar-link" onClick={toggleDropdown}>Categories</span>
            <ul className="dropdown-menu">
              <li className="dropdown-item"><a href="/category/hiking">Hiking</a></li>
              <li className="dropdown-item"><a href="/category/camping">Camping</a></li>
              <li className="dropdown-item"><a href="/category/climbing">Climbing</a></li>
              <li className="dropdown-item"><a href="/category/skiing">Skiing</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

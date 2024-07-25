import React from 'react'

function Header() {
  return (
    <header>
      <img
        className="logo"
        src="../assets/img/logo.png"
        alt="Little Lemon Resturant Logo"
      />
      <nav>
        <ul className="navbar">
          <li className="nav-item">
            <a href="#">Home</a>
          </li>
          <li className="nav-item">
            <a href="#">About</a>
          </li>
          <li className="nav-item">
            <a href="#">Menu</a>
          </li>
          <li className="nav-item">
            <a href="#">Reservation</a>
          </li>
          <li className="nav-item">
            <a href="#">Order</a>
          </li>
          <li className="nav-item">
            <a href="#">Login</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header
import React from 'react'

function Footer() {
  return (
    <footer>
      <div className="footer-logo">
        <img src="/assets/img/logo.png" alt="" />
      </div>
      <div className="footer-navigation">
        <h6>Navigation</h6>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Reservation</a>
          </li>
          <li>
            <a href="#">Order</a>
          </li>
        </ul>
      </div>
      <div className='footer-contact'>
        <h6> Contact </h6>
        <p>
          2395 Maldove Way, Chicago Illinois (629)-243-6827 info@littlelemon.com
        </p>
      </div>
      <div className='footer-connect'>
        <h6> Connect </h6>
        <p>Facebook</p>
        <p>instegram</p>
      </div>
    </footer>
  );
}

export default Footer
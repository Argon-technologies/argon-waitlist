import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from './assets/argon.png';
import './App.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <img src={logo} />
        </div>
        <div className="gpt3__navbar-links_container">
          <p><a href="/coming-soon">Product</a></p>
          <p><a href="/coming-soon">About Us</a></p>
          <p><a href="/coming-soon">FAQs</a></p>
        </div>
      </div>
      <div className="gpt3__navbar-sign">
        <a href="#join"><button type="button">Join Waitlist</button></a>
      </div>
      <div className="gpt3__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="gpt3__navbar-menu_container scale-up-center">
          <div className="gpt3__navbar-menu_container-links">
            <p><a href="/coming-soon">Product</a></p>
            <p><a href="/coming-soon">About Us</a></p>
            <p><a href="/coming-soon">FAQs</a></p>
          </div>
          <div className="gpt3__navbar-menu_container-links-sign">
            <button type="button">Join Waitlist</button>
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
import './navbar.scss';
import { useState } from 'react';
import { MdTravelExplore } from "react-icons/md";
import { IoMdCloseCircle } from "react-icons/io";
import { TbGridDots } from "react-icons/tb";

export default function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <section className='navBarSection'>
      <header className="header flex">
        <div className="logoDiv">
          <a href="#" className="logo flex">
            <MdTravelExplore className="icon" />
            <h1 id='title'>Travel.</h1>
          </a>
        </div>

        <div className={`navBar ${isNavOpen ? 'open' : ''}`}>
          <ul className="navList flex">
            <li className="navItem">
              <a href="#" className="navLink">Home</a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">Packages</a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">Shop</a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">About</a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">Pages</a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">News</a>
            </li>
            <li className="navItem buttonItem">
              <button className='btn'>
                <a href="#">Book Now</a>
              </button>
            </li>
          </ul>

          <div className="closeNavbar" onClick={toggleNav}>
            <IoMdCloseCircle className='icon' />
          </div>
        </div>

        <div className="toggleNavBar" onClick={toggleNav}>
          <TbGridDots className='icon' />
        </div>
      </header>
    </section>
  );
}

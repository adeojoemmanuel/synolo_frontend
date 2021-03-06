import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Custom Hooks
 */
// import useToggle from "../../customHooks/useToggle";

/**
 * Images
 */
import logo from "../../assets/images/logo.svg";

/**
 * Custom Component
 */
import HeaderDropdown from "../DropDowns/headerDropdown.jsx";

const Navigation = () => {

  return (
    <>
      <header className="header-nav">
        <Link to="/">
          <div className="header-logo">

            <img src={logo} alt="synolo logo" className="logo" />
            {/* <h2 className="header-logo--text">Synolo</h2> */}

          </div>
        </Link>

        <nav className="header-navbar">
          <HeaderDropdown />
          <Link to="/about">
            <button className="header-navbar__btn btn btn--small btn--uppercase header-navbar__aboutus">
              About us
            </button>
          </Link>

          <Link to="/register" >
            <button className="header-navbar__btn btn btn--small btn--uppercase btn--round btn--orange btn--focus">
              Sign Up
            </button>
          </Link>
          <Link to="/login">
            <button className="header-navbar__btn btn btn--small btn--uppercase btn--round btn--border btn--hover btn--focus">
              Login
					</button>
          </Link>

        </nav>
      </header>
    </>
  )
}

export default Navigation;
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


const ProfileNavigation = () => {

  return (
    <>
      <header className="header-nav profile-nav">
        <Link to="/">
          <div className="header-logo">

            <img src={logo} alt="synolo logo" className="logo" />
            {/* <h2 className="header-logo--text">Synolo</h2> */}

          </div>
        </Link>


      </header>
    </>
  )
}

export default ProfileNavigation;
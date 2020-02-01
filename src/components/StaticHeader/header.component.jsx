import React from 'react';

import { Link } from 'react-router-dom';

/*
	Components
*/
import Navigation from "../../components/Navigation/navigation.component";

const Header = ({ headerImg, desc, heading }) => {

  const headerClass = `header ${headerImg} section`;
  const headerBtnClass = "btn btn--big btn--uppercase btn--round btn--orange btn--shadow btn--focus";

  return (
    <>
      <header className={headerClass}>
        <div className="wrap">
          <div className="section-wrap">
            <Navigation />
            <div className="header__content-box u-center-text">
              <div className="header__content">
                <h1 className="heading-primary">
                  <div className="heading-primary--main">
                    {heading}
                  </div>
                  <div className="heading-primary--sub">
                    {desc}
                  </div>
                </h1>
                <Link to="/register">
                  <button className={`${headerBtnClass} btn--hide`}>
                    Get started
                  </button>
                </Link>
                
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header;

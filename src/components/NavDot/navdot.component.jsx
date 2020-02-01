import React from 'react'

const NavDot = ({ current, page }) => (
  <div>
    {page === "register" ?

      <div className="nav-dot">
        <div className="nav-dot-box nav-active">
          <div className="dot"></div>
        </div>
        <div className={current < 1 ? "nav-dot-box" : "nav-dot-box nav-active"}>
          <div className="dot-line"></div>
          <div className="dot"></div>
        </div>


        <div className={current < 2 ? "nav-dot-box" : "nav-dot-box nav-active"}>
          <div className="dot-line"></div>
          <div className="dot"></div>
        </div>
        <div className={current < 3 ? "nav-dot-box" : "nav-dot-box nav-active"}>
          <div className="dot-line"></div>
          <div className="dot"></div>
        </div>
      </div> :

      <div className="nav-dot">
        <div className="nav-dot-box nav-active">
          <div className="dot"></div>
        </div>
        <div className={current < 1 ? "nav-dot-box" : "nav-dot-box nav-active"}>
          <div className="dot-line"></div>
          <div className="dot"></div>
        </div>
      </div>
    }


  </div>
)




export default NavDot

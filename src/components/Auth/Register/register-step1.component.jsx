import React from 'react'

/**
 * Images
 */
import invest from "../../../assets/images/Register/invest.svg";
import asset from "../../../assets/images/Register/asset.svg";
import developer from "../../../assets/images/Register/developer.svg";
import distressed from "../../../assets/images/Register/distressed.svg";

const Registerstep1 = ({profile, handleRadioChange}) => {
  return (
    <>
      <div className="register-form register-form--1">
        <h1 className="heading-primary register-heading">Choose the investment profile that applies to you</h1>
        <p>Select a profile from below based on what you want to do</p>

        <div className="col register-form__reset">
          <div className="col-1-of-2 register-generic">
            <input type="radio" value="investor" name="profile" id="investor-selected" checked={profile === "investor"} onChange={handleRadioChange} />

            <label htmlFor="investor-selected" >
              <div className={profile.profile === "investor" ? "register-card active" : "register-card"}>
                <img src={invest} alt="investor icon" />
                <div className="register-card-box">
                  <div className="register-card-box--header">
                    Investor
                      </div>
                  <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et.</p>
                </div>
              </div>
            </label>
          </div>

          <div className="col-1-of-2 register-generic">
            <input type="radio" value="asset owner" name="profile" id="asset-selected" onChange={handleRadioChange} checked={profile.profile === "asset owner"} disabled/>

            <label htmlFor="asset-selected" >
              <div className={profile === "asset owner" ? "register-card active" : "register-card"}>
                <img src={asset} alt="asset icon" />
                <div className="register-card-box">
                  <div className="register-card-box--header">
                    Asset Owner
                      </div>
                  <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et.</p>
                </div>
              </div>
            </label>
          </div>
        </div>


        <div className="col">
          <div className="col-1-of-2 register-generic">
            <input type="radio" value="developer" name="profile" id="developer-selected" checked={profile === "developer"} onChange={handleRadioChange} disabled/>

            <label htmlFor="developer-selected" >
              <div className={profile.profile === "developer" ? "register-card active" : "register-card"}>
                <img src={developer} alt="developer icon" />
                <div className="register-card-box">
                  <div className="register-card-box--header">
                    Developer
                      </div>
                  <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et.</p>
                </div>
              </div>
            </label>
          </div>

          <div className="col-1-of-2 register-generic">
            <input type="radio" value="distressed sales" name="profile" id="distress-selected" onChange={handleRadioChange} checked={profile.profile === "distressed sales"} disabled/>

            <label htmlFor="distress-selected" >
              <div className={profile.profile === "distressed sales" ? "register-card active" : "register-card"}>
                <img src={distressed} alt="distressed icon" />
                <div className="register-card-box">
                  <div className="register-card-box--header">
                    Distressed Sales
                  </div>
                  <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et.</p>
                </div>
              </div>
            </label>
          </div>
        </div>
      </div>
    </>
  )
}

export default Registerstep1;



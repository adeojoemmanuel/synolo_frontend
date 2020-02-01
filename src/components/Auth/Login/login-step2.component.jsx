import React from 'react'

/**
* Helpers
*/
import jsonData from '../../../helpers/country.json';

/**
 * Components
 */
import { LoaderTiny } from '../../../components/Loader/loader.component';

const Loginstep2 = ({ auth, handleAuthChange, onSubmit, submission, error }) => {
  return (
    <div className="login-form">
      <div className="login-step--1">
        <h1 className="heading-primary login-heading">Sign In to your Synolo</h1>
        <p>Please enter your registered <strong>Phone Number</strong> and the <strong>OTP</strong> sent to your registered Phone Number</p>
      </div>

      <form onSubmit={onSubmit}>
        <div className="col login-grid">
          <div className="col-1-of-4 login-form__code">
            {/* <label htmlFor="register-invest-amount" className = "register-investment-label">What amount are you prepared to invest per deal?</label> */}
            <select className="register-investment-amount" id="register-invest-amount"
              name="investmentAmount"
              onChange={handleAuthChange}
              value={auth.code}
              >
              <option defaultValue disabled>Please Select</option>
              {
                jsonData.map((opt, i) => (
                  <option value={opt.value} key={i}>{opt.dial_code}</option>
                ))
              }
            </select>
            <label htmlFor="phone" className="register-form__label login-form__label">Country Code</label>
            {/* <img src={dropdownIcon} alt="drop down icon" className="register-investment-amount--icon"/> */}
          </div>

          <div className="login-form-box">
            <input
              type="number"
              name="phoneNumber"
              id="number"
              className="register-form__input login-form__input"
              placeholder="phone number"
              required
              autoComplete="new-password"
              onChange={handleAuthChange}
              value={auth.phoneNumber}
            />
            <label htmlFor="number" className="register-form__label login-form__label">phone number</label>
          </div>
        </div>


        <div className="register-form-box">
          <input
            type="password"
            name="otp"
            id="otp"
            className="register-form__input login-form__input"
            placeholder="otp"
            required
            autoComplete="new-password"
            onChange={handleAuthChange}
            value={auth.otp}
          />
          <label htmlFor="otp" className="register-form__label login-form__label">OTP</label>
        </div>

        <button type="submit" className="btn btn--big btn--round btn--orange btn--shadow login-form__btn" disabled={submission}>
          {submission ? <LoaderTiny /> : "sign in"}
        </button>
      </form>


    </div>
  )
}

export default Loginstep2;

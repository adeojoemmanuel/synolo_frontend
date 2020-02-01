import React from 'react'

/**
 * Helpers
 */

/**
* Helpers
*/
import jsonData from '../../../helpers/country.json';

/**
 * Icons
 */
import dropdownIcon from '../../../assets/icons/dropdown.svg';

const Registerstep2 = ({ profile, handleChange }) => {


  return (
    <>
      <form className="register-form register-form--2">
        <h1 className="heading-primary register-heading">Contact Details</h1>
        <p>Fill in the form below with your contact details for verification purposes</p>

        <div className="col register-form__reset">
          <div className="col-1-of-2 register-form-box">
            <input
              type="text"
              name="surname"
              id="surname"
              className="register-form__input"
              placeholder="surname"
              required
              autoComplete="new-password"
              onChange={handleChange}
              value={profile.surname} />
            <label htmlFor="surname" className="register-form__label">surname</label>
          </div>

          <div className="col-1-of-2  register-form-box">
            <input
              type="text"
              name="otherName"
              id="other-names"
              className="register-form__input"
              placeholder="other names"
              required
              onChange={handleChange}
              value={profile.otherName} />
            <label htmlFor="other-names" className="register-form__label">other names</label>
          </div>
        </div>

        <div className="col register-form__reset">
          <div className="col-2-of-3 register-form-box">
            <input
              type="email"
              name="email"
              id="email"
              className="register-form__input"
              placeholder="email"
              required
              autoComplete="new-password"
              onChange={handleChange}
              value={profile.email} />
            <label htmlFor="email" className="register-form__label">email</label>
          </div>

          <div className="col-1-of-3  register-form-box">
            <input
              type="password"
              name="password"
              id="password"
              className="register-form__input"
              placeholder="password"
              required
              onChange={handleChange}
              value={profile.password} />
            <label htmlFor="password" className="register-form__label">password</label>
          </div>
        </div>


        <div className="col register-form__reset">
          <div className="col-1-of-3 register-form-box">
            <input
              type="date"
              name="dob"
              id="dob"
              className="register-form__input"
              placeholder="Date of Birth"
              required
              onChange={handleChange}
              value={profile.dob} />
            <label htmlFor="dob" className="register-form__label">Date of Birth</label>
          </div>

          <div className="col-1-of-4 register-form__code">
            <select className="register-investment-amount" id="register-invest-amount"
              name="code"
              onChange={handleChange}
              value={profile.code}>
              <option defaultValue disabled>Please Select</option>
              {
                jsonData.map((opt, i) => (
                  <option value={opt.value} key={i}>{opt.dial_code}</option>
                ))
              }
            </select>
            <label htmlFor="phone" className="register-form__label">Country Code</label>
            <img src={dropdownIcon} alt="drop down icon" className="register-investment-amount--icon"/>
          </div>

          <div className="col-1-of-3  register-form-box">
            <div className="register-form-phone">

              <div className="register-form-phone--input">
                <input
                  type="number"
                  name="phoneNumber"
                  id="phone"
                  className="register-form__input"
                  placeholder="phone number"
                  required
                  autoComplete="new-password"
                  onChange={handleChange}
                  value={profile.phoneNumber} />
                <label htmlFor="phone" className="register-form__label">phone number</label>
              </div>
            </div>

          </div>
        </div>


        <div className="col register-form__reset">
          <div className=" register-form-box">
            <input
              type="text"
              name="address"
              id="address"
              className="register-form__input register-form__input--address"
              placeholder="Home Address"
              required
              onChange={handleChange}
              value={profile.address} />
            <label htmlFor="address" className="register-form__label">Home Address</label>
          </div>
        </div>
      </form>
    </>
  )
}

export default Registerstep2;



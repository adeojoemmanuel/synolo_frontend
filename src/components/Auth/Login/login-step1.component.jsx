import React from 'react'

import { LoaderTiny } from '../../../components/Loader/loader.component';

const Loginstep1 = ({ auth, handleAuthChange, onSubmit, submission }) => {
  return (
    <div className="login-form">
      <div className="login-step--1">
        <h1 className="heading-primary login-heading">Sign In to your Synolo</h1>
        <p>Login to your Synolo account to get the get the best in Real Estate Investment options</p>
      </div>

      <form onSubmit={onSubmit}>
        <div className="register-form-box">
          <input
            type="email"
            name="email"
            id="email"
            className="register-form__input login-form__input"
            placeholder="Email Address"
            required
            autoComplete="new-password"
            onChange={handleAuthChange}
            value={auth.email}
          />
          <label htmlFor="email" className="register-form__label login-form__label">Email Address</label>
        </div>

        <div className="register-form-box">
          <input
            type="password"
            name="password"
            id="password"
            className="register-form__input login-form__input"
            placeholder="password"
            required
            autoComplete="new-password"
            onChange={handleAuthChange}
            value={auth.password}
          />
          <label htmlFor="email" className="register-form__label login-form__label">password</label>
        </div>

        <button type="submit" className="btn btn--big btn--round btn--orange btn--shadow login-form__btn" disabled={submission}>
          {submission ? <LoaderTiny /> : "sign in"}
        </button>
      </form>

      <button className="btn--word login-password-reset">
        Reset Password
      </button>
    </div>
  )
}

export default Loginstep1;

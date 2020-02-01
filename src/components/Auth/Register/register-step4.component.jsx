import React from 'react'
import {Link} from 'react-router-dom'

/**
 * Images
 */


const Registerstep4 = () => {
  return (
    <>
      <div className="register-form register-form--4">
        <h1 className="heading-primary register-heading">Your request has been sent successfully</h1>
        <p>A verification email will be sent to you once your request goes through</p>

        <Link to="/">
          <button className="btn btn--big btn--round btn--orange register-form-4--btn btn--shadow btn--uppercase">Back to Home</button>
        </Link>
        
      </div>
    </>
  )
}

export default Registerstep4;



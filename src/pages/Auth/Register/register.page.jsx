import React, { useState, useEffect } from 'react'

/**
 * External package
 */

 /**
 * Helpers
 */
import { API } from "../../../helpers/api.helpers";


/**
 * error alert
 */
import {errorHandler} from "../../../components/Errors/errors.component";

/**
 * Components
 */
import Navigation2 from '../../../components/Navigation/navigation-2.component';
import NavDot from "../../../components/NavDot/navdot.component";


import Registerstep1 from "../../../components/Auth/Register/register-step1.component";
import Registerstep2 from "../../../components/Auth/Register/register-step2.component";
import Registerstep3 from "../../../components/Auth/Register/register-step3.component";
import Registerstep4 from "../../../components/Auth/Register/register-step4.component";

import { LoaderTiny } from '../../../components/Loader/loader.component';

const initialState = {
	profile: "investor",
	surname: "",
	otherName: "",
	email: "",
	password: "",
  dob: "",
  code: "234",
	phoneNumber: "",
	address: "",
	investmentAmount: "100,000 >",
	investmentObjective: "",
	capitalStructure: "",
	riskTolerance: "",
	investmentHorizon: "",
	investmentType: ""
};


const RegisterPage = () => {
  const [current, setCurrent] = useState(0)
  const [profile, setProfile] = useState(initialState)
  const [validate, setValidate] = useState(false)
  const [submission, setSubmission] = useState(false)
  // const [responses, setResponses] = useState("")
  const [error, setError] = useState("");

  const validateInput = () => {
    if (current === 0 && profile.profile === "") {
      setValidate(true)
   
    } else if (current === 1 &&( profile.surname === "" || profile.otherName === "" || profile.email === "" || profile.password === "" || profile.dob === "" || profile.phoneNumber === "" || profile.address === "") ) {
      setValidate(true)
   
    }else if (current === 2 &&( profile.investmentAmount === "" || profile.investmentHorizon === "" || profile.investmentObjective === "" || profile.investmentType === "" || profile.riskTolerance === "") ) {
      setValidate(true)
      return;
    } else {
      setValidate(false)
    }
  }


  useEffect(() => {
    validateInput()
  });

  const onSubmit = () => {
    profileRegister();
  };

  const profileRegister = async () => {
    setSubmission(true);
    setError("")

    profile.phoneNumber = profile.code + profile.phoneNumber;

    try {
        const response = await API.post("/profile/v1/", JSON.stringify(profile) );


      if (response) {
        setCurrent(3);
        // setResponses(response.data)
        setError("");
      }
    } catch (err) {
      errorHandler(err.response.data.error, setError);
    }

    setSubmission(false);
  };

    /**
   * Handle form input changes
   */
  const handleChange = event => {
    setProfile({
      ...profile,
      [event.target.name]: event.target.value
    });

    validateInput();
  };


  const handleCurrentChange = (handler) => {
    setError("")
    if (handler === "back" && current !== 0) {
      setCurrent(current - 1);

      return
    }

    if (current !== 3) {
      setCurrent(current + 1)
    }
   
  };

  return (
    <>
      <div className="register">
        <header className="section register-header">
          <Navigation2 />
        </header>

        {/* {responses !== "" ? (
              <div className="alert slider alert-success">{responses}</div>
            ) : (
              false
            )} */}

        <div className="register-section section-wrap">
          <NavDot current={current} page="register"/>

          { current === 0 ? 
            <Registerstep1 profile={profile} handleRadioChange={handleChange} submission={submission}/>

            : current === 1 ? 
            <Registerstep2 profile={profile} handleChange={handleChange}/>

            : current === 2 ?
            <Registerstep3 profile={profile} handleChange={handleChange}/> 
            : current === 3 ? <Registerstep4 /> :
            false
          }
          
          {error !== "" ? (
              <div className="alert slider alert-success">{error}</div>
            ) : (
              false
            )}

          <div className="register-footer">
              { current !== 3 ? 
                <button className={current === 0 ? "btn register-footer-btn btn--big btn--round btn--gray register-footer-btn--back" : "btn register-footer-btn btn--big btn--round btn--gray"} onClick={() => handleCurrentChange("back")}>Back</button> :

                false

              }

            
            { current === 2 ?
            
              <button className="btn btn--big btn--round btn--orange register-footer-btn--proceed btn--shadow" onClick={() => onSubmit()} disabled={validate}>
              {submission ? <LoaderTiny /> : "Submit"}
              </button> : 
              
              current === 3 ? false :
              
              <button className="btn btn--big btn--round btn--orange register-footer-btn--proceed btn--shadow" onClick={() => handleCurrentChange("forward")} disabled={validate}>
              Proceed
              </button>
              
            }
            
          </div>

        </div>
      </div>
    </>
  )
}

export default RegisterPage;

import React, {useState} from 'react';

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
import Loginstep1 from '../../../components/Auth/Login/login-step1.component';
import Loginstep2 from '../../../components/Auth/Login/login-step2.component';
import { useHistory } from 'react-router-dom';

const initialState = {
	email: "",
	password: ""
};

const initialOTP = {
  phoneNumber: "",
  code: "234",
  otp: ""
}

const LoginPage = () => {
  const [auth, setAuth] = useState(initialState)
  const [otp, setOTP] = useState(initialOTP)
  const [current, setCurrent] = useState(0)
  const [submission, setSubmission] = useState(false)
  const [error, setError] = useState("");

  const history = useHistory();

  const handleAuthChange = (event) => {
    if (current === 0) {
      setAuth({
        ...auth,
        [event.target.name]: event.target.value
      });

      return;
    }
    
    setOTP({
      ...otp,
      [event.target.name]: event.target.value
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (current === 0) {
      profileLogin();
      return
    }
    
    otpSubmit()
  };

  const profileLogin = async () => {
    setSubmission(true);
    setError("")

    try {
        const response = await API.post("/profile/v1/login-email", JSON.stringify(auth) );

      if (response) {
        setCurrent(1);
        setError("");
      }
    } catch (err) {
      errorHandler(err.response.data.error, setError);
    }

    setSubmission(false);
  };

  const otpSubmit = async () => {
    setSubmission(true);
    setError("")

    otp.phoneNumber = otp.code + otp.phoneNumber;

    otp.otp = parseInt(otp.otp)

    try {
        const response = await API.post("/profile/v1/login-phone", JSON.stringify(otp) );


      if (response) {
        localStorage.setItem("user_acess_passcode", response.data.token);
        history.push("/dashboard/investor");
        setError("");
      }
    } catch (err) {
      errorHandler(err.response.data.error, setError);
    }

    setSubmission(false);
  };



  return (
    <div className="login">
       <header className="section register-header">
          <Navigation2 />
        </header>

          { current === 0 ?

            <Loginstep1 auth={auth} handleAuthChange={handleAuthChange} onSubmit={onSubmit} submission ={submission} /> :

            <Loginstep2 auth={otp} handleAuthChange={handleAuthChange} onSubmit={onSubmit} submission ={submission} />

          }
          
          {error !== "" ? (
        <div className="alert slider alert-success">{error}</div>
      ) : (
          false
        )}
    </div>
  )
}

export default LoginPage

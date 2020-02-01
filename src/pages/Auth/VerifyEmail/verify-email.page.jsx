import React, { useState, useEffect } from "react";
import { useParams} from "react-router";

/**
 * Helpers
 */
import { API } from "../../../helpers/api.helpers";
import Loader from "../../../components/Loader/loader.component";
import Navigation2 from "../../../components/Navigation/navigation-2.component";

const VerifyEmail = (props) => {
  const [error, setError] = useState(false);
  
  let { id, email } = useParams();

  useEffect(() => {
    confirmMail();
  });

  const confirmMail = async () => {
    try {
      await API.put(`/profile/v1/verify/${id}/${email}`);
      props.history.push("/login");
    } catch (err) {
      setError(err.response.data.error);
    }
  };

  return (
    <>
      <Navigation2 />
      {error ? (
        <div className="alert slider alert-success">{error}</div>
      ) : (
          <Loader />
        )}


    </>
  );
};

export default VerifyEmail;

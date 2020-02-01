import axios from "axios";

export const setAuthToken = token => {
  if (token) {
    // Apply to every request
    axios.defaults.headers.common["Cf-Access-token-Assertion"] = token;
  } else {
    // Delete the auth header
    delete axios.defaults.headers.common["Cf-Access-token-Assertion"];
  }
};

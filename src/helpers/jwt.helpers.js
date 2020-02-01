export const getJwt = () => {
  return localStorage.getItem("user_acess_passcode");
};

export const removeJwt = () => {
  return localStorage.removeItem("user_acess_passcode");
};

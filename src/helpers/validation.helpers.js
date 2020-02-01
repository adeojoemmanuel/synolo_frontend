const validateForm = async data => {
  try {
    if (data.password.length !== 7) {
      throw new Error("password must be 7 characters");
    }
  } catch (error) {}
};

const validateCredentials = credentials => {
  if (!credentials.email && credentials.password) {
    return "Email is required";
  } else if (credentials.email && !credentials.password) {
    return "Password is required";
  } else if (!credentials.email && !credentials.password) {
    return "Email and Password are required";
  } else if (!/\S+@\S+\.\S+/i.test(credentials.email)) {
    return "Invalid Email";
  } else return true;
};

export default validateCredentials;


// LOGIN
export const validateLogin = (email, password, test) => {
    if (!email) {
      return "E-mail is required";
    } else if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email)) {
      return "Invalid e-mail format";
    }
    if (!password) {
      return "Password is required";
    }
    if (test) {
      return "You have not passed the spam filter. Please refresh the page and try again";
    }
    return null;
  };

  // REGISTER
  export const validateRegister = (name, email, password, test) => {
    if (!name) {
      return "Name is required";
    } else if (name.length < 2) {
      return "Too short name";
    }
    if (!email) {
      return "E-mail is required";
    } else if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email)) {
      return "Invalid e-mail format";
    }
    if (!password) {
      return "Password is required";
    } else if (password.length < 6) {
      return "The password must consist of 6 characters";
    }
    if (test) {
      return "You have not passed the spam filter. Please refresh the page and try again";
    }
  };
  
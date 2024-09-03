import { useContext, useState } from "react";
import { v4 as generateID } from "uuid";
import { useNavigate } from "react-router-dom";
import bcrypt from 'bcryptjs';

import UsersContext, { UsersContextTypes } from "../../contexts/UsersContext";
import Heading from "../UI/atoms/Heading";
import InputField from "../UI/molecules/InputField";
import Input from "../UI/atoms/Input";

type FormValues = {
  username: string;
  password: string;
  passwordRepeat: string;
};

type ErrorMessages = {
  username: string;
  password: string;
  passwordRepeat: string;
};

const Register = () => {
  const { addNewUser, logInUser } = useContext(UsersContext) as UsersContextTypes;
  const [inputValues, setInputValues] = useState<FormValues>({
    username: "",
    password: "",
    passwordRepeat: "",
  });
  const [errorMessages, setErrorMessages] = useState<ErrorMessages>({
    username: "",
    password: "",
    passwordRepeat: "",
  });
  const navigate = useNavigate();

  // Define the type for the error checking object
  const registerErrorChecking: {
    username: (value: string) => string;
    password: (value: string) => string;
    passwordRepeat: (value: string, password: string) => string;
  } = {
    username: (value: string) => {
      if (!value) {
        return "Username is required";
      } else if (value.length < 5) {
        return "Username must be longer than 5 characters";
      } else if (value.length >= 20) {
        return "Username must be shorter than 20 characters";
      }
      return "";
    },
    password: (value: string) => {
      if (!value) {
        return "Password is required";
      } else if (value.length < 5) {
        return "Password must be longer than 5 characters";
      } else if (value.length >= 20) {
        return "Password must be shorter than 20 characters";
      }
      return "";
    },
    passwordRepeat: (value: string, password: string) => {
      if (!value) {
        return "Password confirmation is required";
      } else if (value !== password) {
        return "Passwords do not match";
      }
      return "";
    },
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValues({
      ...inputValues,
      [event.target.name]: event.target.value,
    });
  };

  const blurHandle = (event: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    // Use `name` as a key for the known fields
    if (name === "passwordRepeat") {
      setErrorMessages({
        ...errorMessages,
        passwordRepeat: registerErrorChecking.passwordRepeat(value, inputValues.password),
      });
    } else if (name === "username" || name === "password") {
      setErrorMessages({
        ...errorMessages,
        [name]: registerErrorChecking[name as "username" | "password"](value),
      });
    }
  };

  const formSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Perform final validation before submitting
    const usernameError = registerErrorChecking.username(inputValues.username);
    const passwordError = registerErrorChecking.password(inputValues.password);
    const passwordRepeatError = registerErrorChecking.passwordRepeat(
      inputValues.passwordRepeat,
      inputValues.password
    );

    if (usernameError || passwordError || passwordRepeatError) {
      setErrorMessages({
        username: usernameError,
        password: passwordError,
        passwordRepeat: passwordRepeatError,
      });
      return;
    }

    // Proceed with registration
    const newUser = {
      id: generateID(),
      username: inputValues.username,
      password: bcrypt.hashSync(inputValues.password, 10),
    };

    addNewUser(newUser);
    logInUser(newUser);
    navigate("/home");
  };

  return (
    <section>
      <Heading text="Register" />
      <form onSubmit={formSubmit}>
        <InputField
          text="Username:"
          type="text"
          name="username"
          id="username"
          placeholderText="Enter your username..."
          value={inputValues.username}
          onChangeF={handleInputChange}
          onBlur={blurHandle}
        />
        {errorMessages.username && <p className="error">{errorMessages.username}</p>}

        <InputField
          text="Password:"
          type="password"
          name="password"
          id="password"
          placeholderText="Enter your password..."
          value={inputValues.password}
          onChangeF={handleInputChange}
          onBlur={blurHandle}
        />
        {errorMessages.password && <p className="error">{errorMessages.password}</p>}

        <InputField
          text="Repeat Password:"
          type="password"
          name="passwordRepeat"
          id="passwordRepeat"
          placeholderText="Repeat your password..."
          value={inputValues.passwordRepeat}
          onChangeF={handleInputChange}
          onBlur={blurHandle}
        />
        {errorMessages.passwordRepeat && <p className="error">{errorMessages.passwordRepeat}</p>}

        <Input type="submit" value="Register" />
      </form>
    </section>
  );
};

export default Register;

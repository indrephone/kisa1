import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";

import UsersContext, { UsersContextTypes } from "../../contexts/UsersContext";
import Heading from "../UI/atoms/Heading";
import InputField from "../UI/molecules/InputField";
import Input from "../UI/atoms/Input";

const Login = () => {
  const navigate = useNavigate();

  const { users, logInUser } = useContext(UsersContext) as UsersContextTypes;
  const [inputValues, setInputValues] = useState({
    username: '',
    password: '',
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValues({
      ...inputValues,
      [event.target.name]: event.target.value,
    });
  };

  const handleInputBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    console.log(`Input lost focus: ${event.target.name}`);
    // Add any onBlur handling logic here
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const foundUser = users.find(
      (user) =>
        user.username === inputValues.username && user.password === inputValues.password
    );
    if (foundUser) {
      logInUser(foundUser);
      navigate('/');
    } else {
      console.log('Failed to log in');
    }
  };

  return (
    <section>
      <Heading text="Login" size={1} />
      <form onSubmit={handleFormSubmit}>
        <InputField
          text="Username:"
          type="text"
          name="username"
          id="username"
          placeholderText="Enter your username..."
          value={inputValues.username}
          onChangeF={handleInputChange}
          onBlur={handleInputBlur} // Pass the onBlur function
        />
        <InputField
          text="Password:"
          type="password"
          name="password"
          id="password"
          placeholderText="Enter your password..."
          value={inputValues.password}
          onChangeF={handleInputChange}
          onBlur={handleInputBlur} // Pass the onBlur function
        />

        {/* Submit button */}
        <Input
          type="submit"
          value="Login"
          name="login"
          id="login"
          placeholderText=""
          onBlur={handleInputBlur} // Not typically needed on submit buttons, but included if necessary
        />
      </form>
      <p>
        Go <Link to="/register">Register</Link>
      </p>
    </section>
  );
};

export default Login;

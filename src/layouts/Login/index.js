import React, { useState } from "react";
import { connect } from "react-redux";
import { login } from "../../store/thunk/auth";
import * as PropTypes from "prop-types";

const Login = ({ login }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleInputChange = ({ target: { name, value } }) => {
    if (name === "email") {
      setEmail(value);
    } else {
      setPassword(value);
    }
  };

  const onSubmit = e => {
    e.preventDefault();
    login({ email, password });
  };

  return (
    <form onSubmit={onSubmit}>
      <h1>Login Below!</h1>
      <input
        type="email"
        name="email"
        placeholder="Enter email"
        value={email}
        onChange={handleInputChange}
        required
      />
      <input
        type="password"
        name="password"
        placeholder="Enter password"
        value={password}
        onChange={handleInputChange}
        required
      />
      <input type="submit" value="Submit" />
    </form>
  );
};

const mapDispatchToProps = {
  login
};

Login.propTypes = {
  login: PropTypes.func.isRequired
};

export default connect(null, mapDispatchToProps)(Login);

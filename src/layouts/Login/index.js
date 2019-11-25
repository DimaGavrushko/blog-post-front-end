import React, { useState } from "react";
import { connect } from "react-redux";
import { login } from "../../store/thunk/auth";
import style from "./style";
import * as PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core";
import DashedContainer from "../../components/DashedContainer";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(style);

const Login = ({ auth: { latestAuthError, isLoading }, login }) => {
  const classes = useStyles();
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
    <div className={classes.container}>
      <div className={classes.loginContainer}>
        <DashedContainer label={"Log in"}>
          <form className={classes.formContainer} onSubmit={onSubmit}>
            {!!latestAuthError && !isLoading && (
              <div className={classes.error}>
                <Typography
                  variant="body1"
                  align="center"
                  color="error"
                  className={classes.sizeLetter}
                >
                  {latestAuthError}
                </Typography>
              </div>
            )}
            <TextField
              classes={{
                root: classes.input
              }}
              name="email"
              label="Email"
              variant="outlined"
              margin="normal"
              onChange={handleInputChange}
            />
            <TextField
              classes={{
                root: classes.input
              }}
              name="password"
              label="Password"
              type="password"
              variant="outlined"
              margin="normal"
              onChange={handleInputChange}
            />
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              onClick={onSubmit}
            >
              Log in
            </Button>
          </form>
        </DashedContainer>
      </div>
    </div>
  );
};

const mapStateToProps = ({ auth }) => ({
  auth
});

const mapDispatchToProps = {
  login
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);

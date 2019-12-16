import React, { useState } from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import style from "./style";
import * as PropTypes from "prop-types";
import Backdrop from "@material-ui/core/Backdrop/Backdrop";
import Modal from "@material-ui/core/Modal/Modal";
import Typography from "@material-ui/core/Typography/Typography";
import TextField from "@material-ui/core/TextField/TextField";
import Button from "@material-ui/core/Button/Button";

const useStyles = makeStyles(style);

const ChangePasswordModal = ({
  open,
  onClose,
  latestError,
  onChangePassword
}) => {
  const classes = useStyles();
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newPasswordRepeat, setNewPasswordRepeat] = useState("");

  const handleInputChange = ({ target: { name, value } }) => {
    switch (name) {
      case "password":
        setPassword(value);
        break;
      case "new-password":
        setNewPassword(value);
        break;
      case "new-password-repeat":
        setNewPasswordRepeat(value);
        break;
      default:
        break;
    }
  };

  const onSubmit = e => {
    e.preventDefault();
    onChangePassword(password, newPassword);
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      className={classes.modalContainer}
    >
      <form className={classes.modal} onSubmit={onSubmit}>
        {!!latestError && (
          <div className={classes.error}>
            <Typography
              variant="body1"
              align="center"
              color="error"
              className={classes.sizeLetter}
            >
              {latestError}
            </Typography>
          </div>
        )}
        <TextField
          classes={{
            root: classes.input
          }}
          name="password"
          label="Current password"
          type="password"
          variant="outlined"
          margin="normal"
          onChange={handleInputChange}
        />
        <TextField
          classes={{
            root: classes.input
          }}
          name="new-password"
          label="New password"
          type="password"
          variant="outlined"
          margin="normal"
          onChange={handleInputChange}
        />
        <TextField
          classes={{
            root: classes.input
          }}
          name="new-password-repeat"
          label="Repeat new password"
          type="password"
          variant="outlined"
          margin="normal"
          onChange={handleInputChange}
        />
        <Button
          variant="contained"
          color="primary"
          classes={{
            root: classes.button,
            disabled: classes.disabledButton
          }}
          onClick={onSubmit}
          disabled={
            !(
              newPassword === newPasswordRepeat &&
              newPassword !== "" &&
              password !== ""
            )
          }
        >
          Submit
        </Button>
      </form>
    </Modal>
  );
};

ChangePasswordModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onChangePassword: PropTypes.func.isRequired
};

export default ChangePasswordModal;

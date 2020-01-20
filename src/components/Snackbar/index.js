import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Snack from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import Close from "@material-ui/icons/Close";

import { snackbarContentStyle, snackbarContentMobileStyle } from "./style";

function Snackbar({ ...props }) {
  const {
    message,
    color,
    close,
    icon,
    place,
    open,
    timer,
    closeSnackbar,
    isMobile
  } = props;
  const useStyles = makeStyles(
    isMobile ? snackbarContentMobileStyle : snackbarContentStyle
  );
  const classes = useStyles();
  let action = [];
  const messageClasses = classNames({
    [classes.iconMessage]: icon !== undefined
  });
  if (close !== undefined) {
    action = [
      <IconButton
        className={classes.iconButton}
        key="close"
        aria-label="Close"
        color="inherit"
        onClick={() => closeSnackbar()}
      >
        <Close className={classes.close} />
      </IconButton>
    ];
  }
  const centerRight = place.indexOf("c") !== -1 ? "center" : "right";
  const vertical = place.indexOf("t") === -1 ? "bottom" : "top";
  const horizontal = place.indexOf("l") !== -1 ? "left" : centerRight;
  return (
    <Snack
      className={classes.container}
      anchorOrigin={{
        vertical,
        horizontal
      }}
      autoHideDuration={timer}
      open={open}
      onClose={(e, reason) => {
        if (reason === "clickaway") {
          return;
        }
        closeSnackbar();
      }}
      message={
        <div>
          <span
            className={messageClasses}
            dangerouslySetInnerHTML={{ __html: message }}
          />
        </div>
      }
      action={action}
      ContentProps={{
        classes: {
          root: `${classes.root} ${classes[color]}`,
          message: classes.message
        }
      }}
    />
  );
}

Snackbar.propTypes = {
  message: PropTypes.node.isRequired,
  color: PropTypes.oneOf(["info", "success", "warning", "danger", "primary"])
    .isRequired,
  close: PropTypes.bool.isRequired,
  icon: PropTypes.instanceOf(Object).isRequired,
  place: PropTypes.oneOf(["tl", "tr", "tc", "br", "bl", "bc"]).isRequired,
  open: PropTypes.bool.isRequired,
  closeSnackbar: PropTypes.func.isRequired,
  timer: PropTypes.number.isRequired,
  index: PropTypes.number,
  isMobile: PropTypes.bool
};

Snackbar.defaultProps = {
  index: 0
};

export default Snackbar;

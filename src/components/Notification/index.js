import React from "react";
import PropTypes from "prop-types";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import ErrorIcon from "@material-ui/icons/Error";
import InfoIcon from "@material-ui/icons/Info";
import NotificationIcon from "@material-ui/icons/NotificationImportant";
import WarningIcon from "@material-ui/icons/Warning";

import {
  TIMER,
  DEFAULT_POSITION,
  POSITIONS,
  TYPES
} from "../../constants/notifications";

import Snackbar from "../Snackbar";

const variantIcon = {
  success: CheckCircleIcon,
  warning: WarningIcon,
  danger: ErrorIcon,
  info: InfoIcon,
  primary: NotificationIcon
};

const Notification = ({
  isOpen,
  isMobile,
  message,
  notificationType,
  removeNotification,
  place,
  timer,
  queueIndex
}) => {
  const icon = variantIcon[notificationType];
  return (
    <Snackbar
      index={queueIndex}
      message={message}
      color={notificationType}
      icon={icon}
      open={isOpen}
      close
      place={place}
      timer={timer}
      closeSnackbar={removeNotification}
      isMobile={isMobile}
    />
  );
};

Notification.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  isMobile: PropTypes.bool,
  message: PropTypes.node.isRequired,
  notificationType: PropTypes.oneOf(TYPES).isRequired,
  place: PropTypes.oneOf(POSITIONS),
  timer: PropTypes.number,
  removeNotification: PropTypes.func.isRequired,
  queueIndex: PropTypes.number.isRequired
};

Notification.defaultProps = {
  timer: TIMER,
  place: DEFAULT_POSITION
};

export default Notification;

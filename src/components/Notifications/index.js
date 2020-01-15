import React from "react";
import { connect } from "react-redux";
import makeStyles from "@material-ui/core/styles/makeStyles";

import Notification from "../Notification";
import notificationsStyles from "./style";
import { removeNotification } from "../../store/actions/notifications";
import useMediaQuery from "@material-ui/core/useMediaQuery/useMediaQuery";
import * as PropTypes from "prop-types";

const useStyles = makeStyles(notificationsStyles);

const Notifications = props => {
  const { notifications, removeNotification, ...otherProps } = props;
  const isMobile = useMediaQuery("(max-width:990px)");

  const classes = useStyles();
  return (
    <div className={isMobile ? classes.mobileContainer : classes.container}>
      {notifications.map((notification, index) => {
        const { id } = notification;
        return (
          <Notification
            key={id}
            queueIndex={index}
            removeNotification={() => removeNotification(id)}
            {...notification}
            {...otherProps}
          />
        );
      })}
    </div>
  );
};

Notifications.propTypes = {
  notifications: PropTypes.array.isRequired,
  removeNotification: PropTypes.func.isRequired
};

const mapStateToProps = ({ notifications }) => ({
  notifications
});

const mapDispatchToProps = {
  removeNotification
};

export default connect(mapStateToProps, mapDispatchToProps)(Notifications);

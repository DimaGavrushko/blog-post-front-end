import React from "react";
import { connect } from "react-redux";
import makeStyles from "@material-ui/core/styles/makeStyles";

import Notification from "../Notification";
import notificationsStyles from "./style";
import { removeNotification } from "../../store/actions/notifications";

const useStyles = makeStyles(notificationsStyles);

const Notifications = props => {
  const { notifications, removeNotification, ...otherProps } = props;

  const classes = useStyles();
  return (
    <div className={classes.container}>
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

const mapStateToProps = ({ notifications }) => ({
  notifications
});

const mapDispatchToProps = {
  removeNotification
};

export default connect(mapStateToProps, mapDispatchToProps)(Notifications);

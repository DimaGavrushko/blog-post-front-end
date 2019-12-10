import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import style from "./style";
import * as PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import * as classnames from "classnames";
import { NavLink } from "react-router-dom";
import { PROFILE_PATH } from "../../constants/routes";
import defaultAvatar from "../../assets/images/default-avatar.png";

const useStyles = makeStyles(style);

const UserHeaderCard = ({ user, logout }) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.userInfoContainer}>
        <div className={classes.userTextInfoContainer}>
          <NavLink
            to={PROFILE_PATH.replace(":id", user._id)}
            className={classes.link}
          >
            <Typography variant="h6" className={classes.name}>
              {user.firstName + " " + user.lastName}
            </Typography>
          </NavLink>
          <div className={classes.roleContainer}>
            <div
              className={classnames({
                [classes.dot]: true,
                [classes[user.role]]: true
              })}
            />
            <Typography variant="h6" className={classes.role}>
              {user.role}
            </Typography>
          </div>
          <Typography
            variant="button"
            className={classes.button}
            onClick={logout}
          >
            Log out
          </Typography>
        </div>
        <img alt="" className={classes.image} src={user.url || defaultAvatar} />
      </div>
    </div>
  );
};

UserHeaderCard.propTypes = {
  user: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired
};

export default UserHeaderCard;

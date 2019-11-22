import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import style from "./style";
import * as PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import * as classnames from "classnames";

const useStyles = makeStyles(style);

const UserHeaderCard = ({ user, logout }) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Typography variant="h6" className={classes.name}>
        {user.first}
      </Typography>
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
      <Typography variant="button" className={classes.button} onClick={logout}>
        Log out
      </Typography>
    </div>
  );
};

UserHeaderCard.propTypes = {
  user: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired
};

export default UserHeaderCard;

import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import style from "./style";
import { NavLink } from "react-router-dom";
import { NEWS_PATH } from "../../../constants/routes";

const useStyles = makeStyles(style);

const Logo = () => {
  const classes = useStyles();

  return (
    <NavLink to={NEWS_PATH} className={classes.logoContainer}>
      <div>blog</div>
      <div className={classes.bold}>post</div>
    </NavLink>
  );
};

export default Logo;

import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import style from "./style";
import { NavLink } from "react-router-dom";
import { NEWS_PATH } from "../../../constants/routes";
import PropTypes from "prop-types";

const useStyles = makeStyles(style);

const Logo = ({ isMobile }) => {
  const classes = useStyles();

  return (
    <NavLink
      to={NEWS_PATH}
      className={isMobile ? classes.logoContainerMobile : classes.logoContainer}
    >
      <div>blog</div>
      <div className={classes.bold}>post</div>
    </NavLink>
  );
};

Logo.propTypes = {
  isMobile: PropTypes.bool
};

export default Logo;

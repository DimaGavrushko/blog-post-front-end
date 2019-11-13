import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import style from "./style";
import * as PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles(style);

const HeaderLink = ({ name, path, toggleCategories = () => {} }) => {
  const classes = useStyles();

  return name !== "Categories" ? (
    <NavLink to={path} className={classes.headerLinkContainer}>
      {name}
    </NavLink>
  ) : (
    <div onClick={toggleCategories} className={classes.headerLinkContainer}>
      {name}
    </div>
  );
};

HeaderLink.propTypes = {
  name: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  toggleCategories: PropTypes.func
};

export default HeaderLink;

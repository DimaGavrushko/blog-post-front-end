import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import style from "./style";
import * as PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import ChevronBottom from "../shared/Icons/ChevronBottom";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";

const useStyles = makeStyles(style);

const HeaderLink = ({ name, path, onClickAway, onCategoriesClick }) => {
  const classes = useStyles();

  return name !== "Categories" ? (
    <NavLink to={path} className={classes.headerLinkContainer}>
      {name}
    </NavLink>
  ) : (
    <ClickAwayListener onClickAway={onClickAway}>
      <div onClick={onCategoriesClick} className={classes.headerLinkContainer}>
        {name}
        <ChevronBottom />
      </div>
    </ClickAwayListener>
  );
};

HeaderLink.propTypes = {
  name: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  onCategoriesClick: PropTypes.func,
  onClickAway: PropTypes.func
};

export default HeaderLink;

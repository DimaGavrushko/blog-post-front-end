import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import style from "./style";
import * as PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { CATEGORY_PATH } from "../../../constants/routes";

const useStyles = makeStyles(style);

const CategoryLabel = ({ name }) => {
  const classes = useStyles();

  return (
    <div className={classes.labelContainer}>
      <NavLink className={classes.link} to={CATEGORY_PATH}>
        {name}
      </NavLink>
    </div>
  );
};

CategoryLabel.propTypes = {
  name: PropTypes.string.isRequired
};

export default CategoryLabel;

import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import style from "./style";
import * as PropTypes from "prop-types";

const useStyles = makeStyles(style);

const DashedContainer = ({ children, label }) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <h4 className={classes.label}>{label}</h4>
      {children}
    </div>
  );
};

DashedContainer.propTypes = {
  children: PropTypes.object,
  label: PropTypes.string.isRequired
};

export default DashedContainer;

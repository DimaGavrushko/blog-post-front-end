import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import style from "./style";
import * as PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(style);

const DashedContainer = ({ children, label }) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Typography className={classes.label} variant="h4">
        {label}
      </Typography>
      {children}
    </div>
  );
};

DashedContainer.propTypes = {
  children: PropTypes.object,
  label: PropTypes.string.isRequired
};

export default DashedContainer;

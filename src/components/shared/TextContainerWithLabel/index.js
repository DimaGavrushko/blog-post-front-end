import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import style from "./style";
import * as PropTypes from "prop-types";

const useStyles = makeStyles(style);

const TextContainerWithLabel = ({ text, label }) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.label}>{label}</div>
      <div className={classes.text}>{text}</div>
    </div>
  );
};

TextContainerWithLabel.propTypes = {
  label: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

export default TextContainerWithLabel;

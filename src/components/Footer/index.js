import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import style from "./style";

const useStyles = makeStyles(style);

const Footer = () => {
  const classes = useStyles();

  return (
    <div className={classes.footerContainer}>
    </div>
  );
};

Footer.propTypes = {};

export default Footer;

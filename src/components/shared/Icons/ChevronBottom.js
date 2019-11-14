import React from "react";
import SvgIcon from "@material-ui/core/SvgIcon/SvgIcon";
import makeStyles from "@material-ui/core/styles/makeStyles";

const style = {
  chevron: {
    position: "relative",
    top: 2
  }
};

const useStyles = makeStyles(style);

const ChevronBottom = function() {
  const classes = useStyles();

  return (
    <SvgIcon viewBox="0 0 42 42" className={classes.chevron}>
      <path d="M16.003 18.626l7.081-7.081L25 13.46l-8.997 8.998-9.003-9 1.917-1.916z" />
    </SvgIcon>
  );
};

export default ChevronBottom;

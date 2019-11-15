import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import style from "./style";

const useStyles = makeStyles(style);

const CategoriesTabsInfo = () => {
  const classes = useStyles();

  return <div className={classes.categoriesTabsInfoContainer}></div>;
};

CategoriesTabsInfo.propTypes = {};

export default CategoriesTabsInfo;

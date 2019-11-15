import React, { useState } from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import style from "./style";
import CategoriesTabs from "../CategoriesTabs";
import CategoriesTabsInfo from "../CategoriesTabsInfo";
import { categories } from "../../constants";
import Fade from "@material-ui/core/Fade";

const useStyles = makeStyles(style);

const CategoriesDropDown = () => {
  const classes = useStyles();
  const [selectedCategory, selectCategory] = useState(0);

  const onCategoryClick = (e, category) => {
    e.preventDefault();
    selectCategory(category);
  };

  return (
    <Fade in={true} timeout={400}>
      <div className={classes.categoriesDropDownContainer}>
        <CategoriesTabs
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryClick={onCategoryClick}
        />
        <CategoriesTabsInfo />
      </div>
    </Fade>
  );
};

CategoriesDropDown.propTypes = {};

export default CategoriesDropDown;

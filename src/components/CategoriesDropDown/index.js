import React, { useState } from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import style from "./style";
import CategoriesTabs from "../CategoriesTabs";
import CategoriesTabsInfo from "../CategoriesTabsInfo";
import { categories } from "../../constants";

const useStyles = makeStyles(style);

const CategoriesDropDown = () => {
  const classes = useStyles();
  const [selectedCategory, selectCategory] = useState(0);

  const onCategoryClick = (e, category) => {
    e.preventDefault();
    selectCategory(category);
  };

  return (
    <div className={classes.categoriesDropDownContainer}>
      <CategoriesTabs
        categories={categories}
        selectedCategory={selectedCategory}
        onCategoryClick={onCategoryClick}
      />
      <CategoriesTabsInfo />
    </div>
  );
};

CategoriesDropDown.propTypes = {};

export default CategoriesDropDown;

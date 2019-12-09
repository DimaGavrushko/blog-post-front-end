import React, { useState } from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import style from "./style";
import CategoriesTabs from "../CategoriesTabs";
import CategoriesTabsInfo from "../CategoriesTabsInfo";
import { categories } from "../../constants";
import Fade from "@material-ui/core/Fade";
import * as PropTypes from "prop-types";

const useStyles = makeStyles(style);

const CategoriesDropDown = ({ categories }) => {
  const classes = useStyles();
  const [selectedCategory, selectCategory] = useState(categories[0]);

  const onCategoryClick = (e, categoryId) => {
    e.preventDefault();
    selectCategory(categories.find(el => el._id === categoryId) || categories[0]);
  };

  return (
    <Fade in={true} timeout={500}>
      <div className={classes.categoriesDropDownContainer}>
        <CategoriesTabs
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryClick={onCategoryClick}
        />
        <CategoriesTabsInfo selectedCategory={selectedCategory} />
      </div>
    </Fade>
  );
};

CategoriesDropDown.propTypes = {
  categories: PropTypes.array.isRequired
};

export default CategoriesDropDown;

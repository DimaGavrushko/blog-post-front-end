import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import style from "./style";
import * as PropTypes from "prop-types";
import CategoryTab from "../CategoryTab";

const useStyles = makeStyles(style);

const CategoriesTabs = ({ categories, selectedCategory, onCategoryClick }) => {
  const classes = useStyles();

  return (
    <div className={classes.categoriesTabsContainer}>
      {categories.map(category => (
        <CategoryTab
          key={category._id}
          selectedCategory={selectedCategory}
          currentCategory={category}
          onCategoryClick={onCategoryClick}
        />
      ))}
    </div>
  );
};

CategoriesTabs.propTypes = {
  categories: PropTypes.array.isRequired,
  selectedCategory: PropTypes.object.isRequired,
  onCategoryClick: PropTypes.func.isRequired
};

export default CategoriesTabs;

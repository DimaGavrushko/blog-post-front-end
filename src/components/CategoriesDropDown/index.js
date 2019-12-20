import React, { useState } from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import style from "./style";
import CategoriesTabs from "../CategoriesTabs";
import CategoriesTabsInfo from "../CategoriesTabsInfo";
import Fade from "@material-ui/core/Fade";
import * as PropTypes from "prop-types";
import { getRecentPosts } from "../../utils/posts";

const useStyles = makeStyles(style);

const CategoriesDropDown = ({ categories, posts }) => {
  const classes = useStyles();
  const [selectedCategory, selectCategory] = useState(categories[0]);
  const [selectedPosts, setPosts] = useState(
    getRecentPosts(
      posts.filter(post => post.categoryId === selectedCategory._id),
      4
    )
  );

  const onCategoryClick = (e, categoryId) => {
    e.preventDefault();
    selectCategory(
      categories.find(el => el._id === categoryId) || categories[0]
    );
    setPosts(
      getRecentPosts(
        posts.filter(post => post.categoryId === categoryId),
        4
      )
    );
  };

  return (
    <Fade in={true} timeout={500}>
      <div className={classes.categoriesDropDownContainer}>
        <CategoriesTabs
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryClick={onCategoryClick}
        />
        <CategoriesTabsInfo posts={selectedPosts} />
      </div>
    </Fade>
  );
};

CategoriesDropDown.propTypes = {
  categories: PropTypes.array.isRequired,
  posts: PropTypes.array.isRequired
};

export default CategoriesDropDown;

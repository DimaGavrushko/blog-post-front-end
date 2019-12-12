import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import style from "./style";
import PostInHeader from "../PostInHeader";
import * as PropTypes from "prop-types";
const useStyles = makeStyles(style);

const CategoriesTabsInfo = ({ posts }) => {
  const classes = useStyles();

  return (
    <div className={classes.categoriesTabsInfoContainer}>
      {posts.map(post => (
        <PostInHeader key={post._id} post={post} />
      ))}
    </div>
  );
};

CategoriesTabsInfo.propTypes = {
  posts: PropTypes.array.isRequired
};

export default CategoriesTabsInfo;

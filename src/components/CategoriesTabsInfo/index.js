import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import style from "./style";
import PostInHeader from "../PostInHeader";
import { posts } from "../../constants";
const useStyles = makeStyles(style);

const CategoriesTabsInfo = () => {
  const classes = useStyles();

  return (
    <div className={classes.categoriesTabsInfoContainer}>
      {posts.slice(0, 4).map(post => (
        <PostInHeader key={post.id} post={post} />
      ))}
    </div>
  );
};

CategoriesTabsInfo.propTypes = {};

export default CategoriesTabsInfo;

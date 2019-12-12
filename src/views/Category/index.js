import React, { useRef, useState } from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import style from "./style";
import Typography from "@material-ui/core/Typography/Typography";
import { connect } from "react-redux";
import * as PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import PostInCategory from "../../components/PostInCategory";
import Pagination from "../../components/Pagination";
import { getRecentPosts } from "../../utils/posts";

const useStyles = makeStyles(style);

const Category = ({
  categories,
  posts,
  match: {
    params: { id }
  }
}) => {
  const classes = useStyles();
  const [currentPage, setCurrentPage] = useState(0);
  const [postsPerPage] = useState(10);
  const [selectedPosts, setPosts] = useState(
    posts.slice(currentPage * postsPerPage, (currentPage + 1) * postsPerPage)
  );
  const postsStartRef = useRef(null);

  const onPaginationClick = page => {
    setCurrentPage(page);
    setPosts(posts.slice(page * postsPerPage, (page + 1) * postsPerPage));
    postsStartRef.current.scrollIntoView(false);
  };

  return (
    <>
      <div className={classes.categoryHeader}>
        <span className={classes.categoryCycle} />
        <Typography className={classes.categoryTitle} variant="h6">
          {(categories.find(el => el._id === id) || {}).name || "Default"}
        </Typography>
      </div>
      <div ref={postsStartRef} />
      <Grid container className={classes.categoriesContainer}>
        <Grid item xs={2} sm={2} md={2} lg={2} />
        <Grid item xs={10} sm={10} md={10} lg={10}>
          <Grid container>
            {selectedPosts.map(post => (
              <Grid
                key={post._id}
                className={classes.postContainer}
                item
                xs={12}
                sm={12}
                md={6}
                lg={6}
              >
                <PostInCategory post={post} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
      {posts.length > postsPerPage && (
        <div className={classes.paginationContainer}>
          <Pagination
            current={currentPage}
            count={postsPerPage}
            total={posts.length}
            onPaginationClick={onPaginationClick}
          />
        </div>
      )}
    </>
  );
};

const mapStateToProps = (
  { posts: { categories, posts } },
  {
    match: {
      params: { id }
    }
  }
) => ({
  posts: getRecentPosts(posts, posts.length).filter(
    post => post.categoryId === id
  ),
  categories
});

Category.propTypes = {
  categories: PropTypes.array.isRequired,
  posts: PropTypes.array.isRequired,
  match: PropTypes.object.isRequired
};

export default connect(mapStateToProps, null)(Category);

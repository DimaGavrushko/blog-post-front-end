import React, { useRef, useState } from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import style from "./style";
import Grid from "@material-ui/core/Grid/Grid";
import { RECENT_NEWS } from "../../constants";
import Typography from "@material-ui/core/Typography";
import RecentNews from "../RecentNews";
import Pagination from "../Pagination";
import * as PropTypes from "prop-types";

const useStyles = makeStyles(style);

const RecentNewsContainer = ({ posts = [] }) => {
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
      <div className={classes.blogTopContainer}>
        <Typography className={classes.blogTop} variant="h4">
          {RECENT_NEWS}
        </Typography>
      </div>
      <Grid container>
        <div ref={postsStartRef} />
        {selectedPosts.map(post => (
          <Grid key={post._id} item xs={12} sm={12} md={12} lg={8}>
            <RecentNews post={post} />
          </Grid>
        ))}
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

RecentNewsContainer.propTypes = {
  posts: PropTypes.array.isRequired
};

export default RecentNewsContainer;

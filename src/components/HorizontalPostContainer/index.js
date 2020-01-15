import React, { useEffect, useRef, useState } from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import style from "./style";
import Typography from "@material-ui/core/Typography";
import HorizontalPost from "../HorizontalPost";
import Pagination from "../Pagination";
import * as PropTypes from "prop-types";

const useStyles = makeStyles(style);

const HorizontalPostContainer = ({
  posts = [],
  label,
  isApprovePage = false,
  isProfilePage = false,
  isOwnPage,
  onApprove,
  onDelete
}) => {
  const classes = useStyles();
  const [currentPage, setCurrentPage] = useState(0);
  const [postsPerPage] = useState(10);
  const [selectedPosts, setPosts] = useState(
    posts.slice(currentPage * postsPerPage, (currentPage + 1) * postsPerPage)
  );
  const postsStartRef = useRef(null);

  useEffect(() => {
    setCurrentPage(0);
    setPosts(posts.slice(0, postsPerPage));
  }, [posts, postsPerPage]);

  const onPaginationClick = page => {
    setCurrentPage(page);
    setPosts(posts.slice(page * postsPerPage, (page + 1) * postsPerPage));
    postsStartRef.current.scrollIntoView(false);
  };

  return (
    <>
      <div className={classes.blogTopContainer}>
        {!!label && (
          <>
            <div className={classes.square} />
            <Typography className={classes.blogTop} variant="h4">
              {label}
            </Typography>
          </>
        )}
      </div>
      <div ref={postsStartRef} />
      {selectedPosts.map(post => (
        <HorizontalPost
          key={post._id}
          post={post}
          isApprovePage={isApprovePage}
          isProfilePage={isProfilePage}
          isOwnPage={isOwnPage}
          onApprove={onApprove}
          onDelete={onDelete}
        />
      ))}
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

HorizontalPostContainer.propTypes = {
  posts: PropTypes.array.isRequired,
  label: PropTypes.string,
  isApprovePage: PropTypes.bool,
  isProfilePage: PropTypes.bool,
  isOwnPage: PropTypes.bool,
  onApprove: PropTypes.func,
  onDelete: PropTypes.func
};

export default HorizontalPostContainer;

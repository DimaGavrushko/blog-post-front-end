import React, { useEffect } from "react";
import HorizontalPostContainer from "../../components/HorizontalPostContainer";
import Grid from "@material-ui/core/Grid/Grid";
import style from "./style";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { connect } from "react-redux";
import * as PropTypes from "prop-types";
import { getRecentPosts } from "../../utils/posts";
import Typography from "@material-ui/core/Typography/Typography";
import { NO_CONFIRMATION_POSTS } from "../../constants";
import { approvePost, deletePost } from "../../store/thunk/posts";
import { useLocation } from "react-router";

const useStyles = makeStyles(style);

const PostsApproval = ({ notApprovedPosts, approvePost, deletePost }) => {
  const classes = useStyles();
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  if (!notApprovedPosts.length) {
    return (
      <Typography className={classes.messageContainer} variant="h5">
        {NO_CONFIRMATION_POSTS}
      </Typography>
    );
  }

  const onApprove = postId => {
    approvePost(postId);
  };

  const onDelete = postId => {
    deletePost(postId);
  };

  return (
    <>
      <Grid container>
        <Grid item xs={12} sm={12} md={12} lg={8}>
          <HorizontalPostContainer
            posts={notApprovedPosts}
            isApprovePage={true}
            onApprove={onApprove}
            onDelete={onDelete}
          />
        </Grid>
      </Grid>
    </>
  );
};

const mapStateToProps = ({ posts: { notApprovedPosts } }) => ({
  notApprovedPosts: getRecentPosts(notApprovedPosts, notApprovedPosts.length)
});

const mapDispatchToProps = {
  approvePost,
  deletePost
};

PostsApproval.propTypes = {
  notApprovedPosts: PropTypes.array.isRequired,
  deletePost: PropTypes.func.isRequired,
  approvePost: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(PostsApproval);

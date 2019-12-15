import React from "react";
import HorizontalPostContainer from "../../components/HorizontalPostContainer";
import Grid from "@material-ui/core/Grid/Grid";
import style from "./style";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { connect } from "react-redux";
import * as PropTypes from "prop-types";
import { getRecentPosts } from "../../utils/posts";
import Typography from "@material-ui/core/Typography/Typography";
import { NO_CONFIRMATION_POSTS } from "../../constants";
import { approvePost, deleteNotApprovedPost } from "../../store/thunk/posts";

const useStyles = makeStyles(style);

const PostsApproval = ({
  notApprovedPosts,
  approvePost,
  deleteNotApprovedPost
}) => {
  const classes = useStyles();

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

  const onNotApprovedDelete = postId => {
    deleteNotApprovedPost(postId);
  };

  return (
    <>
      <Grid container>
        <Grid item xs={12} sm={12} md={12} lg={8}>
          <HorizontalPostContainer
            posts={notApprovedPosts}
            isApprovePage={true}
            onApprove={onApprove}
            onNotApprovedDelete={onNotApprovedDelete}
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
  deleteNotApprovedPost
};

PostsApproval.propTypes = {
  notApprovedPosts: PropTypes.array.isRequired,
  deleteNotApprovedPost: PropTypes.func.isRequired,
  approvePost: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(PostsApproval);

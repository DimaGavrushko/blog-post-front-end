import React from "react";
import HorizontalPostContainer from "../../components/HorizontalPostContainer";
import Grid from "@material-ui/core/Grid/Grid";
import style from "./style";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { connect } from "react-redux";
import * as PropTypes from "prop-types";
import { getRecentPosts } from "../../utils/posts";

const useStyles = makeStyles(style);

const PostsApproval = ({ notApprovedPosts }) => {
  const classes = useStyles();

  return (
    <>
      <Grid container>
        <Grid item xs={12} sm={12} md={12} lg={8}>
          <HorizontalPostContainer posts={notApprovedPosts} />
        </Grid>
      </Grid>
    </>
  );
};

const mapStateToProps = ({ posts: { notApprovedPosts } }) => ({
  notApprovedPosts: getRecentPosts(notApprovedPosts, notApprovedPosts.length)
});

PostsApproval.propTypes = {
  notApprovedPosts: PropTypes.array.isRequired
};

export default connect(mapStateToProps)(PostsApproval);

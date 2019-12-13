import React, { useEffect, useState } from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import style from "./style";
import Grid from "@material-ui/core/Grid";
import PostComponent from "../../components/PostComponent";
import * as PropTypes from "prop-types";
import { connect } from "react-redux";

const useStyles = makeStyles(style);

const Post = ({
  posts,
  notApprovedPosts,
  user,
  match: {
    params: { id }
  }
}) => {
  // eslint-disable-next-line no-unused-vars
  const classes = useStyles();
  const [post, setPost] = useState(null);

  const isCanEdit = id => {
    return (
      user.role === "admin" || (user.role === "journalist" && user._id === id)
    );
  };

  useEffect(() => {
    if (user.role === "admin" || user.role === "journalist") {
      setPost([...posts, ...notApprovedPosts].find(el => el._id === id));
    } else {
      setPost(
        posts.find(el => {
          return el._id === id;
        })
      );
    }
  }, [id, posts]);

  return post &&
    (post.isApproved || (!post.isApproved && isCanEdit(post.authorId))) ? (
    <Grid container>
      <Grid item xs={1} sm={1} md={1} lg={1} />
      <Grid item xs={10} sm={8} md={7} lg={7}>
        <PostComponent post={post} isOwnPost={isCanEdit(post.authorId)} />
      </Grid>
      <Grid item xs={1} sm={3} md={4} lg={4} />
    </Grid>
  ) : (
    <></>
  );
};

const mapStateToProps = ({
  posts: { posts, notApprovedPosts },
  auth: { user }
}) => ({
  posts,
  notApprovedPosts,
  user
});

Post.propTypes = {
  posts: PropTypes.array.isRequired,
  notApprovedPosts: PropTypes.array.isRequired,
  match: PropTypes.object,
  user: PropTypes.object.isRequired
};

export default connect(mapStateToProps, null)(Post);

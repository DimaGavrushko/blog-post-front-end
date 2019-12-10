import React, { useEffect, useState } from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import style from "./style";
import Grid from "@material-ui/core/Grid";
import PostComponent from "../../components/PostComponent";
import * as PropTypes from "prop-types";
import { connect } from "react-redux";
import { posts as _posts } from "../../constants";

const useStyles = makeStyles(style);

const Post = ({
  posts,
  match: {
    params: { id }
  }
}) => {
  const classes = useStyles();
  const [post, setPost] = useState({});

  useEffect(() => {
    setPost(_posts.find(el => el.id === id));
  }, [id]);

  return (
    <Grid container>
      <Grid item xs={1} sm={1} md={1} lg={1}></Grid>
      <Grid item xs={10} sm={8} md={7} lg={7}>
        <PostComponent post={post} />
      </Grid>
      <Grid item xs={1} sm={3} md={4} lg={4}></Grid>
    </Grid>
  );
};

const mapStateToProps = ({ router, posts }) => ({
  router,
  posts
});

Post.propTypes = {
  posts: PropTypes.object.isRequired,
  match: PropTypes.object
};

export default connect(mapStateToProps, null)(Post);

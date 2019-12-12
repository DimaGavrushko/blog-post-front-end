import React from "react";
import RecentNewsContainer from "../../components/RecentNewsContainer";
import Grid from "@material-ui/core/Grid/Grid";
import PopularPost from "../../components/PopularPost";
import { popularPosts } from "../../constants";
import style from "./style";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { connect } from "react-redux";
import * as PropTypes from "prop-types";

const useStyles = makeStyles(style);

const News = ({ posts }) => {
  const classes = useStyles();

  return (
    <>
      <Grid container className={classes.container}>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <PopularPost post={popularPosts[0]} isFirst={true} />
        </Grid>
        <Grid item xs={12} sm={12} md={3} lg={3}>
          <PopularPost post={popularPosts[1]} isFirst={false} />
        </Grid>
        <Grid item xs={12} sm={12} md={3} lg={3}>
          <PopularPost post={popularPosts[2]} isFirst={false} />
        </Grid>
      </Grid>
      <RecentNewsContainer posts={posts} />
    </>
  );
};

const mapStateToProps = ({ posts: { posts } }) => ({
  posts
});

News.propTypes = {
  posts: PropTypes.array.isRequired
};

export default connect(mapStateToProps)(News);

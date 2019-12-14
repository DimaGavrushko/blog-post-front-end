import React from "react";
import HorizontalPostContainer from "../../components/HorizontalPostContainer";
import Grid from "@material-ui/core/Grid/Grid";
import PopularPost from "../../components/PopularPost";
import style from "./style";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { connect } from "react-redux";
import * as PropTypes from "prop-types";
import { getPopularPosts, getRecentPosts } from "../../utils/posts";
import { RECENT_NEWS } from "../../constants";

const useStyles = makeStyles(style);

const News = ({ popularPosts, posts }) => {
  const classes = useStyles();

  return (
    <>
      <Grid container className={classes.container}>
        {popularPosts.map((post, i) => (
          <Grid
            key={post._id}
            item
            xs={12}
            sm={12}
            md={i === 0 ? 6 : 3}
            lg={i === 0 ? 6 : 3}
          >
            <PopularPost post={post} isFirst={i === 0} />
          </Grid>
        ))}
      </Grid>
      <Grid container>
        <Grid item xs={12} sm={12} md={12} lg={8}>
          <HorizontalPostContainer posts={posts} label={RECENT_NEWS} />
        </Grid>
      </Grid>
    </>
  );
};

const mapStateToProps = ({ posts: { posts } }) => ({
  posts: getRecentPosts(posts, posts.length),
  popularPosts: getPopularPosts(posts)
});

News.propTypes = {
  popularPosts: PropTypes.array.isRequired,
  posts: PropTypes.array.isRequired
};

export default connect(mapStateToProps)(News);

import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import style from "./style";
import * as PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import Grid from "@material-ui/core/Grid/Grid";
import { posts, RECENT_NEWS } from "../../constants";
import PopularPost from "../PopularPost";
import * as classnames from "classnames";
import Typography from "@material-ui/core/Typography";
import RecentNews from "../RecentNews";

const useStyles = makeStyles(style);

const RecentNewsContainer = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.blogTopContainer}>
        <Typography className={classes.blogTop} variant="h4">
          {RECENT_NEWS}
        </Typography>
      </div>
      <Grid container>
        {posts.map(post => (
          <Grid key={post.id} item xs={12} sm={12} md={12} lg={8}>
            <RecentNews post={post} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

RecentNewsContainer.propTypes = {};

export default RecentNewsContainer;

import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import style from "./style";
import Grid from "@material-ui/core/Grid/Grid";
import { popularPosts } from "../../constants";
import PopularPost from "../PopularPost";

const useStyles = makeStyles(style);

const PopularPosts = () => {
  const classes = useStyles();

  return (
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
  );
};

PopularPosts.propTypes = {};

export default PopularPosts;

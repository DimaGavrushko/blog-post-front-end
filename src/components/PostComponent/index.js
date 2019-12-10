import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import style from "./style";
import * as PropTypes from "prop-types";
import CategoryLabel from "../shared/CategoryLabel";
import Typography from "@material-ui/core/Typography";
import DateAndAuthor from "../shared/DateAndAuthor";
import { grayColor } from "../../constants/colors";

const useStyles = makeStyles(style);

const Post = ({ post }) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <CategoryLabel name={post.category} />
      <Typography className={classes.title} variant="h3">
        {post.title}
      </Typography>
      <DateAndAuthor post={post} color={grayColor[0]} />
      <div className={classes.imageContainer}>
        <img alt="" className={classes.image} src={post.img} />
      </div>
      <div
        className={classes.content}
        dangerouslySetInnerHTML={{ __html: post.text }}
      />
    </div>
  );
};

Post.propTypes = {
  post: PropTypes.object.isRequired
};

export default Post;

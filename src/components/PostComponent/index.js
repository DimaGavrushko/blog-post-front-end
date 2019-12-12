import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import style from "./style";
import * as PropTypes from "prop-types";
import CategoryLabel from "../shared/CategoryLabel";
import Typography from "@material-ui/core/Typography";
import DateAndAuthor from "../shared/DateAndAuthor";
import { grayColor } from "../../constants/colors";
import Button from "@material-ui/core/Button";
import { NavLink } from "react-router-dom";
import { CREATE_POST_PATH } from "../../constants/routes";

const useStyles = makeStyles(style);

const Post = ({ post, isOwnPost = false }) => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.container}>
        <CategoryLabel name={post.categoryName} id={post.categoryId} />
        <Typography className={classes.title} variant="h3">
          {post.title}
        </Typography>
        <DateAndAuthor post={post} color={grayColor[0]} />
        <div className={classes.imageContainer}>
          <img alt="" className={classes.image} src={post.url} />
        </div>
        <div
          className={classes.content}
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </div>
      <div className={classes.options}>
        {isOwnPost && (
          <NavLink
            className={classes.editButtonLink}
            to={{
              pathname: CREATE_POST_PATH,
              post
            }}
          >
            <Button
              variant="contained"
              color="primary"
              size="small"
              classes={{
                root: classes.editButton
              }}
            >
              Edit post
            </Button>
          </NavLink>
        )}
      </div>
    </>
  );
};

Post.propTypes = {
  post: PropTypes.object.isRequired,
  isOwnPost: PropTypes.bool.isRequired
};

export default Post;

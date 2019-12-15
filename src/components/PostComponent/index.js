import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import style from "./style";
import * as PropTypes from "prop-types";
import CategoryLabel from "../shared/CategoryLabel";
import Typography from "@material-ui/core/Typography";
import DateAndAuthor from "../shared/DateAndAuthor";
import { grayColor } from "../../constants/colors";
import { NOT_APPROVED_WARNING } from "../../constants";
import IconButton from "@material-ui/core/IconButton/IconButton";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";

const useStyles = makeStyles(style);

const Post = ({
  post,
  loggedUser,
  isOwnPost = false,
  onLike,
  onUnLike,
  onDislike,
  onUnDislike
}) => {
  const classes = useStyles();
  const hasLike = !!(post && post.likes && post.likes.includes(loggedUser._id));
  const hasDislike = !!(
    post &&
    post.dislikes &&
    post.dislikes.includes(loggedUser._id)
  );

  const onLikeClick = () => {
    if (hasLike) {
      onUnLike(hasDislike);
    } else {
      onLike(hasDislike);
    }
  };

  const onDislikeClick = () => {
    if (hasDislike) {
      onUnDislike();
    } else {
      onDislike(hasLike);
    }
  };

  return (
    <>
      <div className={classes.container}>
        {!post.isApproved && (
          <Typography className={classes.warning} variant="h3">
            {NOT_APPROVED_WARNING}
          </Typography>
        )}
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
        {loggedUser.role !== "guest" && post.isApproved && (
          <div className={classes.likesContainer}>
            <IconButton
              size="small"
              className={hasLike ? classes.like : ""}
              onClick={onLikeClick}
            >
              <ThumbUpIcon fontSize="small" />
            </IconButton>
            <div className={classes.countLikes}>{post.likes.length}</div>
            <IconButton
              size="small"
              className={hasDislike ? classes.like : ""}
              onClick={onDislikeClick}
            >
              <ThumbDownIcon fontSize="small" />
            </IconButton>
            <div className={classes.countLikes}>{post.dislikes.length}</div>
          </div>
        )}
      </div>
    </>
  );
};

Post.propTypes = {
  post: PropTypes.object.isRequired,
  loggedUser: PropTypes.object.isRequired,
  isOwnPost: PropTypes.bool.isRequired,
  onLike: PropTypes.func.isRequired,
  onUnLike: PropTypes.func.isRequired,
  onDislike: PropTypes.func.isRequired,
  onUnDislike: PropTypes.func.isRequired,
  onApprovedDelete: PropTypes.func
};

export default Post;

import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import style from "./style";
import * as PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { PROFILE_PATH } from "../../../constants/routes";
import { toPostDate } from "../../../utils/posts";

const useStyles = makeStyles(style);

const DateAndAuthor = ({ post, color }) => {
  const classes = useStyles();

  return (
    <div
      style={{
        color
      }}
      className={classes.dateAndAuthor}
    >
      <p className={classes.date}>{toPostDate(post.createdAt)}</p>/
      <NavLink
        style={{
          color
        }}
        className={classes.author}
        to={PROFILE_PATH.replace(":id", post.authorId)}
      >
        {post.authorName}
      </NavLink>
    </div>
  );
};

DateAndAuthor.propTypes = {
  post: PropTypes.object.isRequired,
  color: PropTypes.string.isRequired
};

export default DateAndAuthor;

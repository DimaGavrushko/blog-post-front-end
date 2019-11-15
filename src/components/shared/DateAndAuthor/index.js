import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import style from "./style";
import * as PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { PROFILE_PATH } from "../../../constants/routes";

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
      <p className={classes.date}>{post.date}</p>/
      <NavLink
        style={{
          color
        }}
        className={classes.author}
        to={PROFILE_PATH.replace(":id", post.id)}
      >
        {post.author}
      </NavLink>
    </div>
  );
};

DateAndAuthor.propTypes = {
  post: PropTypes.object.isRequired,
  color: PropTypes.string.isRequired
};

export default DateAndAuthor;

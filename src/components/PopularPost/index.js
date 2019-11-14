import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import style from "./style";
import * as PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import ChevronBottom from "../shared/Icons/ChevronBottom";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";

const useStyles = makeStyles(style);

const PopularPost = ({ post }) => {
  const classes = useStyles();

  return (
    <div className={classes.postContainer}>
      <img className={classes.image} src={post.img} />
    </div>
  );
};

PopularPost.propTypes = {};

export default PopularPost;

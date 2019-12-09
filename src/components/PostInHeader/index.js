import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import style from "./style";
import * as PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { POST_PATH } from "../../constants/routes";
import Typography from "@material-ui/core/Typography";
import { getShortName } from "../../utils";

const useStyles = makeStyles(style);

const PostInHeader = ({ post }) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.imageContainer}>
        <img alt="" className={classes.image} src={post.img} />
        <div className={classes.postBackground}>
          <div className={classes.labelContainer}>
            {post.category}
          </div>
        </div>
      </div>
      <NavLink to={POST_PATH.replace(":id", post.id)} className={classes.link}>
        <Typography variant="h4" className={classes.title}>
          {getShortName(post.title)}
        </Typography>
      </NavLink>
    </div>
  );
};

PostInHeader.propTypes = {
  post: PropTypes.object.isRequired
};

export default PostInHeader;

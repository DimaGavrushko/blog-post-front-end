import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import style from "./style";
import * as PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import { NavLink } from "react-router-dom";
import { POST_PATH } from "../../constants/routes";
import DateAndAuthor from "../shared/DateAndAuthor";
import { whiteColor } from "../../constants/colors";

const useStyles = makeStyles(style);

const PopularPost = ({ post }) => {
  const classes = useStyles();

  return (
    <div className={classes.postContainer}>
      <img className={classes.image} src={post.img} />
      <div className={classes.postBackground}>
        <div className={classes.postInfoContainer}>
          <Typography variant="h5">
            <NavLink
              to={POST_PATH.replace(":id", post.id)}
              className={classes.title}
            >
              {post.title}
            </NavLink>
            <DateAndAuthor post={post} color={whiteColor} />
          </Typography>
        </div>
      </div>
    </div>
  );
};

PopularPost.propTypes = {
  post: PropTypes.object.isRequired,
};

export default PopularPost;

import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import style from "./style";
import * as PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import { NavLink } from "react-router-dom";
import { POST_PATH } from "../../constants/routes";
import DateAndAuthor from "../shared/DateAndAuthor";
import { whiteColor } from "../../constants/colors";
import * as classnames from "classnames";
import CategoryLabel from "../shared/CategoryLabel";

const useStyles = makeStyles(style);

const PopularPost = ({ post, isFirst = false }) => {
  const classes = useStyles();

  return (
    <div className={classes.postContainer}>
      <img alt="" className={classes.image} src={post.url} />
      <div className={classes.postBackground}>
        <div className={classes.postInfoContainer}>
          <CategoryLabel name={post.categoryName} id={post.categoryId} />
          <Typography
            className={classnames({
              [classes.title]: true,
              [classes.bigText]: isFirst
            })}
            variant="h5"
          >
            <NavLink
              className={classes.link}
              to={POST_PATH.replace(":id", post._id)}
            >
              {post.title}
            </NavLink>
          </Typography>
          <DateAndAuthor post={post} color={whiteColor} />
        </div>
      </div>
    </div>
  );
};

PopularPost.propTypes = {
  post: PropTypes.object.isRequired,
  isFirst: PropTypes.bool
};

export default PopularPost;

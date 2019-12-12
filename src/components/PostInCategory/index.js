import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import style from "./style";
import * as PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { POST_PATH } from "../../constants/routes";
import Typography from "@material-ui/core/Typography";
import { getPostDescription } from "../../utils/posts";
import CategoryLabel from "../shared/CategoryLabel";
import DateAndAuthor from "../shared/DateAndAuthor";
import { grayColor } from "../../constants/colors";

const useStyles = makeStyles(style);

const PostInCategory = ({ post }) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.imageContainer}>
        <img alt="" className={classes.image} src={post.url} />
      </div>
      <CategoryLabel name={post.categoryName} id={post.categoryId} />
      <NavLink to={POST_PATH.replace(":id", post.id)} className={classes.link}>
        <Typography variant="h4" className={classes.title}>
          {post.title}
        </Typography>
      </NavLink>
      <div className={classes.descriptionContainer}>
        <p
          className={classes.description}
          dangerouslySetInnerHTML={{ __html: getPostDescription(post.text) }}
        />
      </div>
      <DateAndAuthor post={post} color={grayColor[0]} />
    </div>
  );
};

PostInCategory.propTypes = {
  post: PropTypes.object.isRequired
};

export default PostInCategory;

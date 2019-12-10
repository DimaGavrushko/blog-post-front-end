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

const RecentNews = ({ post }) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.imageContainer}>
        <img alt="" className={classes.image} src={post.img} />
      </div>
      <div className={classes.metaContainer}>
        <div className={classes.titleContainer}>
          <NavLink
            to={POST_PATH.replace(":id", post.id)}
            className={classes.link}
          >
            <Typography variant="h4" className={classes.title}>
              {post.title}
            </Typography>
          </NavLink>
        </div>
        <div className={classes.descriptionContainer}>
          <p className={classes.description}>{getPostDescription(post.text)}</p>
        </div>
        <div className={classes.additionalInfoContainer}>
          <CategoryLabel name={post.category} />
          <DateAndAuthor post={post} color={grayColor[0]} />
        </div>
      </div>
    </div>
  );
};

RecentNews.propTypes = {
  post: PropTypes.object.isRequired
};

export default RecentNews;

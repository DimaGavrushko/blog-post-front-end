import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import style from "./style";
import * as PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { CREATE_POST_PATH, POST_PATH } from "../../constants/routes";
import Typography from "@material-ui/core/Typography";
import { getPostDescription } from "../../utils/posts";
import CategoryLabel from "../shared/CategoryLabel";
import DateAndAuthor from "../shared/DateAndAuthor";
import { grayColor } from "../../constants/colors";
import Button from "@material-ui/core/Button/Button";
import EditIcon from "@material-ui/icons/Edit";
import IconButton from "@material-ui/core/IconButton/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";

const useStyles = makeStyles(style);

const HorizontalPost = ({
  post,
  isApprovePage,
  isProfilePage,
  isOwnPage,
  onApprove,
  onNotApprovedDelete,
  onApprovedDelete
}) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.imageContainer}>
        <img alt="" className={classes.image} src={post.url} />
      </div>
      <div className={classes.metaContainer}>
        <div className={classes.titleContainer}>
          <NavLink
            to={POST_PATH.replace(":id", post._id)}
            className={classes.link}
          >
            <Typography variant="h4" className={classes.title}>
              {post.title}
            </Typography>
          </NavLink>
        </div>
        <div className={classes.descriptionContainer}>
          <p
            className={classes.description}
            dangerouslySetInnerHTML={{
              __html: getPostDescription(post.content)
            }}
          />
        </div>
        <div className={classes.additionalInfoContainer}>
          <CategoryLabel name={post.categoryName} id={post.categoryId} />
          <div className={classes.separator} />
          <DateAndAuthor post={post} color={grayColor[0]} />
        </div>
      </div>
      <div className={classes.buttonsBar}>
        {isProfilePage && isOwnPage && (
          <>
            <IconButton
              size="small"
              className={classes.deleteIcon}
              onClick={() =>
                post.isApproved
                  ? onApprovedDelete(post._id)
                  : onNotApprovedDelete(post._id)
              }
            >
              <DeleteIcon fontSize="small" />
            </IconButton>
            <NavLink
              className={classes.editButtonLink}
              to={{
                pathname: CREATE_POST_PATH,
                post
              }}
            >
              <IconButton size="small" className={classes.editIcon}>
                <EditIcon fontSize="small" />
              </IconButton>
            </NavLink>
          </>
        )}
        {isApprovePage && (
          <>
            <Button
              variant="contained"
              color="primary"
              size="small"
              classes={{
                root: classes.noButton
              }}
              onClick={() => onNotApprovedDelete(post._id)}
            >
              No
            </Button>
            <Button
              variant="contained"
              color="primary"
              size="small"
              classes={{
                root: classes.yesButton
              }}
              onClick={() => onApprove(post._id)}
            >
              Yes
            </Button>
          </>
        )}
      </div>
    </div>
  );
};

HorizontalPost.propTypes = {
  post: PropTypes.object.isRequired,
  isApprovePage: PropTypes.bool.isRequired,
  isProfilePage: PropTypes.bool.isRequired,
  isOwnPage: PropTypes.bool,
  onApprove: PropTypes.func,
  onNotApprovedDelete: PropTypes.func,
  onApprovedDelete: PropTypes.func
};

export default HorizontalPost;

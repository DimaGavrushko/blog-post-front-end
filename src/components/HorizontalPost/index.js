import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import style from "./style";
import * as PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { CREATE_POST_PATH, POST_PATH } from "../../constants/routes";
import Typography from "@material-ui/core/Typography";
import { getPostDescription, getPostShortName } from "../../utils/posts";
import CategoryLabel from "../shared/CategoryLabel";
import DateAndAuthor from "../shared/DateAndAuthor";
import { grayColor } from "../../constants/colors";
import Button from "@material-ui/core/Button/Button";
import EditIcon from "@material-ui/icons/Edit";
import IconButton from "@material-ui/core/IconButton/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import useMediaQuery from "@material-ui/core/useMediaQuery/useMediaQuery";

const useStyles = makeStyles(style);

const HorizontalPost = ({
  post,
  isApprovePage,
  isProfilePage,
  isOwnPage,
  onApprove,
  onDelete
}) => {
  const classes = useStyles();
  const isMobile = useMediaQuery("(max-width:767px)");

  return (
    <div className={isMobile ? classes.mobileContainer : classes.container}>
      <div
        className={
          isMobile ? classes.mobileImageContainer : classes.imageContainer
        }
      >
        <img alt="" className={classes.image} src={post.url} />
      </div>
      <div
        className={
          isMobile ? classes.metaContainerMobile : classes.metaContainer
        }
      >
        <div
          className={
            isMobile ? classes.mobileTitleContainer : classes.titleContainer
          }
        >
          <NavLink
            to={POST_PATH.replace(":id", post._id)}
            className={classes.link}
          >
            <Typography variant="h4" className={classes.title}>
              {getPostShortName(post.title, 120)}
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
      <div className={isMobile ? classes.mobileButtonsBar : classes.buttonsBar}>
        {isProfilePage && isOwnPage && (
          <>
            <IconButton
              size="small"
              className={classes.deleteIcon}
              onClick={() => onDelete(post._id)}
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
                root: isMobile ? classes.mobileNoButton : classes.noButton
              }}
              onClick={() => onDelete(post._id)}
            >
              Delete
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
              Approve
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
  onDelete: PropTypes.func
};

export default HorizontalPost;

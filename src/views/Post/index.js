import React, { useEffect, useState } from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import style from "./style";
import Grid from "@material-ui/core/Grid";
import PostComponent from "../../components/PostComponent";
import * as PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  deletePost,
  dislike,
  like,
  undislike,
  unlike
} from "../../store/thunk/posts";
import EditIcon from "@material-ui/icons/Edit";
import IconButton from "@material-ui/core/IconButton/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import { NavLink } from "react-router-dom";
import { CREATE_POST_PATH } from "../../constants/routes";

const useStyles = makeStyles(style);

const Post = ({
  posts,
  notApprovedPosts,
  user,
  match: {
    params: { id }
  },
  like,
  unlike,
  dislike,
  undislike,
  deletePost
}) => {
  // eslint-disable-next-line no-unused-vars
  const classes = useStyles();
  const [post, setPost] = useState(null);
  const [isOwnPage, setIsOwnPage] = useState(user.role === "admin");

  const isCanEdit = id => {
    return (
      user.role === "admin" || (user.role === "journalist" && user._id === id)
    );
  };

  const onDelete = (postId, authorId) => {
    deletePost(postId, authorId);
  };

  useEffect(() => {
    let _post;
    if (user.role === "admin" || user.role === "journalist") {
      _post = [...posts, ...notApprovedPosts].find(el => el._id === id);
      setPost(_post);
    } else {
      _post = posts.find(el => el._id === id);
      setPost(_post);
    }

    if (_post) {
      setIsOwnPage(_post.authorId === user._id || user.role === "admin");
    }
  }, [id, posts, notApprovedPosts, user]);

  return post &&
    (post.isApproved || (!post.isApproved && isCanEdit(post.authorId))) ? (
    <Grid container>
      <Grid item xs={1} sm={1} md={1} lg={1} />
      <Grid item xs={10} sm={8} md={7} lg={7}>
        <PostComponent
          post={post}
          isOwnPost={isCanEdit(post.authorId)}
          loggedUser={user}
          onLike={hasDislike => like(post._id, user._id, hasDislike)}
          onUnLike={() => unlike(post._id, user._id)}
          onDislike={hasLike => dislike(post._id, user._id, hasLike)}
          onUnDislike={() => undislike(post._id, user._id)}
          onDelete={onDelete}
        >
          {isOwnPage && (
            <div>
              <IconButton
                size="small"
                className={classes.deleteIcon}
                onClick={() => onDelete(post._id, post.authorId)}
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
            </div>
          )}
        </PostComponent>
      </Grid>
      <Grid item xs={1} sm={3} md={4} lg={4} />
    </Grid>
  ) : (
    <></>
  );
};

const mapStateToProps = ({
  posts: { posts, notApprovedPosts },
  auth: { user }
}) => ({
  posts,
  notApprovedPosts,
  user
});

const mapDispatchToProps = {
  like,
  unlike,
  dislike,
  undislike,
  deletePost
};

Post.propTypes = {
  posts: PropTypes.array.isRequired,
  notApprovedPosts: PropTypes.array.isRequired,
  match: PropTypes.object,
  user: PropTypes.object.isRequired,
  like: PropTypes.func.isRequired,
  unlike: PropTypes.func.isRequired,
  dislike: PropTypes.func.isRequired,
  undislike: PropTypes.func.isRequired,
  deletePost: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(Post);

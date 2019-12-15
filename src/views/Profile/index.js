import React, { useEffect, useState } from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import style from "./style";
import { useParams } from "react-router";
import DashedContainer from "../../components/DashedContainer";
import Grid from "@material-ui/core/Grid";
import { loadUser } from "../../store/thunk/users";
import { connect } from "react-redux";
import * as PropTypes from "prop-types";
import defaultAvatar from "../../assets/images/default-avatar.png";
import TextContainerWithLabel from "../../components/shared/TextContainerWithLabel";
import Button from "@material-ui/core/Button";
import HorizontalPostContainer from "../../components/HorizontalPostContainer";
import {
  deleteApprovedPost,
  deleteNotApprovedPost
} from "../../store/thunk/posts";
import { getRecentPosts } from "../../utils/posts";

const useStyles = makeStyles(style);

const Profile = ({
  users: { instances, isLoading, latestError },
  posts,
  auth,
  loadUser,
  deleteApprovedPost,
  deleteNotApprovedPost
}) => {
  const classes = useStyles();
  const { id } = useParams();
  const [selectedUser, setSelectedUser] = useState(null);
  const [isOwnPage, setIsOwnPage] = useState(false);

  useEffect(() => {
    const user = instances.find(el => el._id === id);
    if (!user) {
      loadUser({ id });
    } else {
      setSelectedUser(user);
      setIsOwnPage(auth.user._id === user._id);
    }
  }, [instances, id, loadUser, auth]);

  const onApprovedDelete = postId => {
    deleteApprovedPost(postId, selectedUser._id);
  };

  const onNotApprovedDelete = postId => {
    deleteNotApprovedPost(postId, selectedUser._id);
  };

  if (latestError) {
    return <h1>{latestError}</h1>;
  }

  return (
    <Grid container className={classes.gridContainer}>
      <Grid item xs={1} sm={1} md={1} lg={1} />
      <Grid item xs={12} sm={9} md={8} lg={7}>
        {!!selectedUser && !isLoading && (
          <DashedContainer label="Profile">
            <div className={classes.container}>
              <div className={classes.leftContainer}>
                <div className={classes.imageContainer}>
                  <img
                    alt=""
                    className={classes.image}
                    src={selectedUser.url || defaultAvatar}
                  />
                </div>
                {isOwnPage && (
                  <>
                    <Button variant="outlined" className={classes.button}>
                      Edit avatar
                    </Button>
                    <Button variant="outlined" className={classes.button}>
                      Change password
                    </Button>
                  </>
                )}
              </div>
              <div className={classes.rightContainer}>
                <div className={classes.firstAndLast}>
                  <TextContainerWithLabel
                    label="first"
                    text={selectedUser.firstName}
                  />
                  <TextContainerWithLabel
                    label="last"
                    text={selectedUser.lastName}
                  />
                </div>
                <TextContainerWithLabel
                  label="email"
                  text={selectedUser.email}
                />
                <TextContainerWithLabel
                  label="about"
                  text={selectedUser.description}
                />
              </div>
            </div>
          </DashedContainer>
        )}
        {!!posts.length && (
          <HorizontalPostContainer
            posts={posts}
            isProfilePage={true}
            onApprovedDelete={onApprovedDelete}
            onNotApprovedDelete={onNotApprovedDelete}
          />
        )}
      </Grid>
    </Grid>
  );
};

const mapStateToProps = ({
  posts: { posts, notApprovedPosts },
  users,
  auth
}) => ({
  users,
  auth,
  posts: getRecentPosts(
    [...posts, ...notApprovedPosts].filter(el => el.authorId === auth.user._id)
  )
});

const mapDispatchToProps = {
  loadUser,
  deleteApprovedPost,
  deleteNotApprovedPost
};

Profile.propTypes = {
  users: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  loadUser: PropTypes.func.isRequired,
  posts: PropTypes.array,
  deleteApprovedPost: PropTypes.func,
  deleteNotApprovedPost: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);

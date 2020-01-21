import React, { useEffect, useState } from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import style from "./style";
import { useLocation, useParams } from "react-router";
import DashedContainer from "../../components/DashedContainer";
import Grid from "@material-ui/core/Grid";
import {
  loadUser,
  changeUserInfo,
  changeUserPhoto,
  changePassword
} from "../../store/thunk/users";
import { connect } from "react-redux";
import * as PropTypes from "prop-types";
import defaultAvatar from "../../assets/images/default-avatar.png";
import TextContainerWithLabel from "../../components/shared/TextContainerWithLabel";
import Button from "@material-ui/core/Button";
import HorizontalPostsContainer from "../../components/HorizontalPostsContainer";
import { deletePost } from "../../store/thunk/posts";
import { getRecentPosts } from "../../utils/posts";
import ChangePasswordModal from "../../components/ChangePasswordModal";
import { dismissError } from "../../store/actions/users";
import { LOAD_USER_ERROR, UPDATE_PASSWORD_ERROR } from "../../constants/errors";
import useMediaQuery from "@material-ui/core/useMediaQuery/useMediaQuery";
import { useScrollToTop } from "../../utils/hooks";

const useStyles = makeStyles(style);

const Profile = ({
  users: { instances, isLoading, latestError },
  posts,
  notApprovedPosts,
  auth,
  loadUser,
  changeUserInfo,
  changeUserPhoto,
  changePassword,
  dismissError,
  deletePost
}) => {
  const formData = new FormData();

  const classes = useStyles();
  const { id } = useParams();
  const { pathname } = useLocation();
  const isMobile = useMediaQuery("(max-width:990px)");

  const [selectedUser, setSelectedUser] = useState(null);
  const [isOwnPage, setIsOwnPage] = useState(auth.user.role === "admin");
  const [currentEdit, setCurrentEdit] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const isThisError = (error, errorType) => error && error.type === errorType;

  useScrollToTop(pathname);

  useEffect(() => {
    const user = instances.find(el => el._id === id);
    if (!user) {
      if (!isThisError(latestError, LOAD_USER_ERROR)) {
        loadUser({ id });
      }
    } else {
      setSelectedUser(user);
      setIsOwnPage(
        (auth.user && auth.user._id === user._id) || auth.user.role === "admin"
      );
      if (!isThisError(latestError, UPDATE_PASSWORD_ERROR)) {
        onModalClose();
      }
    }
  }, [instances, latestError, id, auth]);

  useEffect(() => {
    if (isThisError(latestError, LOAD_USER_ERROR)) {
      dismissError();
    }
  }, [id]);

  const onDelete = postId => {
    deletePost(postId);
  };

  const onEditClick = name => {
    if (currentEdit !== "") {
      onChangeUserInfo(currentEdit, selectedUser[name]);
    }
    setCurrentEdit(name);
  };

  const onClickAway = (name, value) => {
    setCurrentEdit("");
    onChangeUserInfo(name, value);
  };

  const onTextFieldChange = ({ target: { name, value } }) => {
    setSelectedUser({
      ...selectedUser,
      [name]: value
    });
  };

  const onChangeUserInfo = (name, value) => {
    changeUserInfo(auth.user._id, selectedUser._id, name, value);
  };

  const loadPhoto = ({ target }) => {
    const [photo] = target.files;
    formData.set("img", photo);
    formData.set("userId", selectedUser._id);
    changeUserPhoto(auth.user._id, formData);
  };

  const onModalClose = () => {
    setIsModalOpen(false);
    dismissError();
  };

  const onChangePassword = (currentPassword, newPassword) => {
    changePassword(
      auth.user._id,
      selectedUser._id,
      currentPassword,
      newPassword
    );
  };

  return (
    <Grid container className={classes.gridContainer}>
      <Grid item xs={1} sm={1} md={1} lg={1} />
      <Grid item xs={12} sm={9} md={8} lg={7}>
        <ChangePasswordModal
          onClose={onModalClose}
          open={isModalOpen}
          latestError={latestError}
          onChangePassword={onChangePassword}
        />
        {!!selectedUser && !isLoading && (
          <DashedContainer label="Profile">
            <div
              className={isMobile ? classes.mobileContainer : classes.container}
            >
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
                    <Button
                      variant="outlined"
                      className={classes.button}
                      component="label"
                    >
                      Edit photo
                      <input
                        value=""
                        type="file"
                        accept="image/*"
                        style={{ display: "none" }}
                        onChange={loadPhoto}
                      />
                    </Button>
                    {selectedUser._id === auth.user._id && (
                      <Button
                        variant="outlined"
                        className={classes.button}
                        onClick={() => setIsModalOpen(true)}
                      >
                        Change password
                      </Button>
                    )}
                  </>
                )}
              </div>
              <div
                className={
                  isMobile
                    ? classes.rightContainerMobile
                    : classes.rightContainer
                }
              >
                <div className={classes.firstAndLast}>
                  <TextContainerWithLabel
                    label="first"
                    name="firstName"
                    text={selectedUser.firstName}
                    isOwnPage={isOwnPage}
                    isEditMode={currentEdit === "firstName"}
                    onChange={onTextFieldChange}
                    onEditClick={onEditClick}
                    onClickAway={onClickAway}
                  />
                  <TextContainerWithLabel
                    label="last"
                    name="lastName"
                    text={selectedUser.lastName}
                    isOwnPage={isOwnPage}
                    isEditMode={currentEdit === "lastName"}
                    onChange={onTextFieldChange}
                    onEditClick={onEditClick}
                    onClickAway={onClickAway}
                  />
                </div>
                <TextContainerWithLabel
                  label="Role"
                  name="role"
                  text={selectedUser.role}
                  isOwnPage={false}
                  isEditMode={false}
                />
                <TextContainerWithLabel
                  label="email"
                  name="email"
                  text={selectedUser.email}
                  isOwnPage={selectedUser._id === auth.user._id}
                  isEditMode={currentEdit === "email"}
                  onChange={onTextFieldChange}
                  onEditClick={onEditClick}
                  onClickAway={onClickAway}
                />
                <TextContainerWithLabel
                  label="about"
                  name="description"
                  text={selectedUser.description}
                  isOwnPage={isOwnPage}
                  isEditMode={currentEdit === "description"}
                  onChange={onTextFieldChange}
                  onEditClick={onEditClick}
                  onClickAway={onClickAway}
                />
              </div>
            </div>
          </DashedContainer>
        )}
        {!!posts.length && (
          <HorizontalPostsContainer
            posts={
              isOwnPage
                ? getRecentPosts(
                    [...posts, ...notApprovedPosts].filter(
                      el => el.authorId === id
                    ),
                    [...posts, ...notApprovedPosts].length
                  )
                : getRecentPosts(
                    [...posts].filter(el => el.authorId === id),
                    [...posts].length
                  )
            }
            isProfilePage={true}
            isOwnPage={isOwnPage}
            onDelete={onDelete}
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
  notApprovedPosts,
  posts
});

const mapDispatchToProps = {
  loadUser,
  deletePost,
  changeUserInfo,
  changeUserPhoto,
  changePassword,
  dismissError
};

Profile.propTypes = {
  users: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  loadUser: PropTypes.func.isRequired,
  posts: PropTypes.array,
  notApprovedPosts: PropTypes.array,
  deletePost: PropTypes.func,
  changeUserPhoto: PropTypes.func.isRequired,
  changeUserInfo: PropTypes.func.isRequired,
  changePassword: PropTypes.func.isRequired,
  dismissError: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);

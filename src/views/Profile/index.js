import React, { useEffect, useState } from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import style from "./style";
import { useParams } from "react-router";
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
import HorizontalPostContainer from "../../components/HorizontalPostContainer";
import { deletePost } from "../../store/thunk/posts";
import { getRecentPosts } from "../../utils/posts";
import ChangePasswordModal from "../../components/ChangePasswordModal";
import { dismissError } from "../../store/actions/users";

let formData;
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
  const classes = useStyles();
  const { id } = useParams();
  const [selectedUser, setSelectedUser] = useState(null);
  const [isOwnPage, setIsOwnPage] = useState(auth.user.role === "admin");
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  const [currentEdit, setCurrentEdit] = useState("");
  const [img, setImage] = useState("");
  const [openModal, setOpenModal] = React.useState(false);

  useEffect(() => {
    onModalClose();
    const user = instances.find(el => el._id === id);
    if (!user) {
      loadUser({ id });
    } else {
      setSelectedUser(user);
      setFirst(user.firstName);
      setLast(user.lastName);
      setEmail(user.email);
      setDescription(user.description);
      setImage(user.url);
      setIsOwnPage(auth.user._id === user._id || auth.user.role === "admin");
    }
  }, [instances, id, loadUser, auth]);

  useEffect(() => {
    formData = new FormData();
  }, []);

  const onDelete = postId => {
    deletePost(postId);
  };

  const onEditClick = name => {
    if (currentEdit !== "") {
      switch (currentEdit) {
        case "firstName":
          onChangeUserInfo(currentEdit, first);
          break;
        case "lastName":
          onChangeUserInfo(currentEdit, last);
          break;
        case "email":
          onChangeUserInfo(currentEdit, email);
          break;
        case "description":
          onChangeUserInfo(currentEdit, description);
          break;
        default:
          break;
      }
    }
    setCurrentEdit(name);
  };

  const onClickAway = (name, value) => {
    setCurrentEdit("");
    onChangeUserInfo(name, value);
  };

  const onChange = ({ target: { name, value } }) => {
    switch (name) {
      case "firstName":
        setFirst(value);
        break;
      case "lastName":
        setLast(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "description":
        setDescription(value);
        break;
      default:
        break;
    }
  };

  const onChangeUserInfo = (name, value) => {
    changeUserInfo(auth.user._id, selectedUser._id, name, value);
  };

  const loadPhoto = ({ target }) => {
    const [photo] = target.files;
    formData.append("img", photo);
    formData.append("userId", selectedUser._id);
    changeUserPhoto(auth.user._id, formData);
  };

  const onModalClose = () => {
    setOpenModal(false);
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
          open={openModal}
          latestError={latestError}
          onChangePassword={onChangePassword}
        />
        {!!selectedUser && !isLoading && (
          <DashedContainer label="Profile">
            <div className={classes.container}>
              <div className={classes.leftContainer}>
                <div className={classes.imageContainer}>
                  <img
                    alt=""
                    className={classes.image}
                    src={img || defaultAvatar}
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
                        onClick={() => setOpenModal(true)}
                      >
                        Change password
                      </Button>
                    )}
                  </>
                )}
              </div>
              <div className={classes.rightContainer}>
                <div className={classes.firstAndLast}>
                  <TextContainerWithLabel
                    label="first"
                    name="firstName"
                    text={first}
                    isOwnPage={isOwnPage}
                    isEditMode={currentEdit === "firstName"}
                    onChange={onChange}
                    onEditClick={onEditClick}
                    onClickAway={onClickAway}
                  />
                  <TextContainerWithLabel
                    label="last"
                    name="lastName"
                    text={last}
                    isOwnPage={isOwnPage}
                    isEditMode={currentEdit === "lastName"}
                    onChange={onChange}
                    onEditClick={onEditClick}
                    onClickAway={onClickAway}
                  />
                </div>
                <TextContainerWithLabel
                  label="email"
                  name="email"
                  text={email}
                  isOwnPage={selectedUser._id === auth.user._id}
                  isEditMode={currentEdit === "email"}
                  onChange={onChange}
                  onEditClick={onEditClick}
                  onClickAway={onClickAway}
                />
                <TextContainerWithLabel
                  label="about"
                  name="description"
                  text={description}
                  isOwnPage={isOwnPage}
                  isEditMode={currentEdit === "description"}
                  onChange={onChange}
                  onEditClick={onEditClick}
                  onClickAway={onClickAway}
                />
              </div>
            </div>
          </DashedContainer>
        )}
        {!!posts.length && (
          <HorizontalPostContainer
            posts={
              isOwnPage
                ? getRecentPosts(
                    [...posts, ...notApprovedPosts].filter(
                      el => el.authorId === id
                    )
                  )
                : getRecentPosts([...posts].filter(el => el.authorId === id))
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

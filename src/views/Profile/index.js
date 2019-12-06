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

const useStyles = makeStyles(style);

const Profile = ({
  users: { instances, isLoading, latestError },
  auth,
  loadUser
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
  }, [instances, id, loadUser]);

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
                    text={selectedUser.first}
                  />
                  <TextContainerWithLabel
                    label="last"
                    text={selectedUser.last}
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
      </Grid>
    </Grid>
  );
};

const mapStateToProps = ({ users, auth }) => ({
  users,
  auth
});

const mapDispatchToProps = {
  loadUser
};

Profile.propTypes = {
  users: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  loadUser: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);

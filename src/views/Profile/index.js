import React, { useEffect, useState } from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import style from "./style";
import { useParams } from "react-router";
import DashedContainer from "../../components/DashedContainer";
import Grid from "@material-ui/core/Grid";
import { loadUser } from "../../store/thunk/users";
import { connect } from "react-redux";
import * as PropTypes from "prop-types";

const useStyles = makeStyles(style);

const Profile = ({
  users: { instances, isLoading, latestError },
  loadUser
}) => {
  const classes = useStyles();
  const { id } = useParams();
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    const user = instances.find(el => el._id === id);
    if (!user) {
      loadUser({ id });
    } else {
      setSelectedUser(user);
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
            <div>
              <h1>{selectedUser.first + " " + selectedUser.last}</h1>
            </div>
          </DashedContainer>
        )}
      </Grid>
    </Grid>
  );
};

const mapStateToProps = ({ users }) => ({ users });

const mapDispatchToProps = {
  loadUser
};

Profile.propTypes = {
  users: PropTypes.object.isRequired,
  loadUser: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);

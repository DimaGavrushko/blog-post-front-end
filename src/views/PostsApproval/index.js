import React from "react";
import HorizontalPostContainer from "../../components/HorizontalPostContainer";
import Grid from "@material-ui/core/Grid/Grid";
import style from "./style";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { connect } from "react-redux";
import * as PropTypes from "prop-types";
import { getRecentPosts } from "../../utils/posts";
import Button from "@material-ui/core/Button/Button";
import Typography from "@material-ui/core/Typography/Typography";
import { NO_CONFIRMATION_POSTS } from "../../constants";

const useStyles = makeStyles(style);

const PostsApproval = ({ notApprovedPosts }) => {
  const classes = useStyles();

  if (!notApprovedPosts.length) {
    return  <Typography className={classes.messageContainer} variant="h5">
      {NO_CONFIRMATION_POSTS}
    </Typography>;
  }

  return (
    <>
      <Grid container>
        <Grid item xs={12} sm={12} md={12} lg={8}>
          <HorizontalPostContainer posts={notApprovedPosts}>
            <div className={classes.buttonsBar}>
              <Button
                variant="contained"
                color="primary"
                size="small"
                classes={{
                  root: classes.noButton
                }}
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
              >
                Yes
              </Button>
            </div>
          </HorizontalPostContainer>
        </Grid>
      </Grid>
    </>
  );
};

const mapStateToProps = ({ posts: { notApprovedPosts } }) => ({
  notApprovedPosts: getRecentPosts(notApprovedPosts, notApprovedPosts.length)
});

PostsApproval.propTypes = {
  notApprovedPosts: PropTypes.array.isRequired
};

export default connect(mapStateToProps)(PostsApproval);

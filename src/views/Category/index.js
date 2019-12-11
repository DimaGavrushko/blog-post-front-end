import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import style from "./style";
import Typography from "@material-ui/core/Typography/Typography";
import { connect } from "react-redux";
import * as PropTypes from "prop-types";

const useStyles = makeStyles(style);

const Category = ({ posts: { categories }, match: { params: { id } } }) => {
  const classes = useStyles();
  console.log(id)
  return (
    <>
      <div className={classes.categoryHeader}>
        <span className={classes.categoryCycle} />
        <Typography className={classes.categoryTitle} variant="h6">
          {(categories.find(el => el._id === id) || {}).name || "Default"}
        </Typography>
      </div>
    </>
  );
};

const mapStateToProps = ({ posts }) => ({
  posts
});

Category.propTypes = {
  posts: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired
};

export default connect(mapStateToProps, null)(Category);

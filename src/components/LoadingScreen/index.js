import React from "react";
import LinearProgress from "@material-ui/core/LinearProgress";
import { makeStyles, Typography } from "@material-ui/core";
import loadingScreenStyles from "./style";

const useStyles = makeStyles(loadingScreenStyles);

const LoadingScreen = () => {
  const classes = useStyles();

  return (
    <div className={classes.loadingScreenContainer}>
      <Typography variant="h4">
        BLOG<b>POST</b>
        <LinearProgress
          classes={{
            colorPrimary: classes.whiteColor,
            barColorPrimary: classes.progressBar
          }}
        />
      </Typography>
    </div>
  );
};

export default LoadingScreen;

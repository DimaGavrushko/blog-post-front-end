import React from "react";
import appRoutes from "../../routes/routes";
import { Redirect, Route, Switch } from "react-router";
import { NEWS_PATH, PATH_INDEX } from "../../constants/routes";
import Header from "../../components/Header";
import { user } from "../../constants";
import { makeStyles } from "@material-ui/core";
import style from "./style";

const useStyles = makeStyles(style);

const chooseRoutes = () => {
  const routes = appRoutes[user.role];

  return (
    <Switch>
      {routes.map(({ name, layout, ...rest }) => {
        if (layout === PATH_INDEX) {
          return <Route key={name} {...rest} />;
        }

        return null;
      })}
      <Redirect from={PATH_INDEX} to={NEWS_PATH} />
    </Switch>
  );
};

const Root = () => {
  const classes = useStyles();

  return (
    <div>
      <Header />
      <main className={classes.mainContainer}>{chooseRoutes()}</main>
    </div>
  );
};

export default Root;

import React from "react";
import appRoutes from "../../routes/routes";
import { Redirect, Route, Switch } from "react-router";
import { NEWS_PATH, PATH_INDEX } from "../../constants/routes";

const user = {
  role: "guest"
};

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

const Root = () => (
  <div>
    <h1>Root</h1>
    {chooseRoutes()}
  </div>
);

export default Root;

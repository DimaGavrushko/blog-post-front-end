import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Route, Switch } from "react-router";
import routes from "./routes";
import { history } from "./store";

function App() {
  return (
    <ConnectedRouter history={history}>
      <Switch>
        {routes.map(({ name, ...rest }) => {
          return <Route key={name} {...rest} />;
        })}
      </Switch>
    </ConnectedRouter>
  );
}

export default App;

import React, { PureComponent } from "react";
import appRoutes from "../../routes/routes";
import { Redirect, Route, Switch } from "react-router";
import { NEWS_PATH, PATH_INDEX } from "../../constants/routes";
import Header from "../../components/Header";
import LoadingScreen from "../../components/LoadingScreen";
import { makeStyles } from "@material-ui/core";
import style from "./style";
import Footer from "../../components/Footer";
import * as PropTypes from "prop-types";
import { connect } from "react-redux";
import { tryAuthentication } from "../../store/thunk/auth";
import { compose } from "redux";
import Notifications from "../../components/Notifications";

const useStyles = makeStyles(style);

const chooseRoutes = user => {
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

const tryAuth = () => WrappedComponent => {
  class TryAuth extends PureComponent {
    componentDidMount = () => {
      const {
        auth: { user },
        tryAuthentication
      } = this.props;

      if (user && user.role === "guest") {
        tryAuthentication();
      }
    };

    render() {
      const { auth, posts } = this.props;

      if (auth.isLoading || posts.isLoading) {
        return <LoadingScreen />;
      }

      return <WrappedComponent />;
    }
  }

  TryAuth.propTypes = {
    auth: PropTypes.object.isRequired,
    posts: PropTypes.object.isRequired,
    tryAuthentication: PropTypes.func.isRequired
  };

  const mapStateToProps = ({ auth, posts }) => ({ auth, posts });
  const mapDispatchToProps = { tryAuthentication };

  return connect(mapStateToProps, mapDispatchToProps)(TryAuth);
};

const Root = ({ user }) => {
  const classes = useStyles();

  return (
    <div>
      <Header />
      <main className={classes.mainContainer}>
        <Notifications place="tc" />
        {chooseRoutes(user)}
      </main>
      <Footer />
    </div>
  );
};

const mapStateToProps = ({ auth }) => ({
  user: auth.user
});

Root.propTypes = {
  user: PropTypes.object.isRequired
};

export default compose(tryAuth(), connect(mapStateToProps, null))(Root);

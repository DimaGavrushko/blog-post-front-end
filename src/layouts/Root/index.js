import React, { PureComponent } from "react";
import appRoutes from "../../routes/routes";
import { Redirect, Route, Switch } from "react-router";
import { NEWS_PATH, PATH_INDEX } from "../../constants/routes";
import Header from "../../components/Header";
import { makeStyles } from "@material-ui/core";
import style from "./style";
import Footer from "../../components/Footer";
import * as PropTypes from "prop-types";
import { connect } from "react-redux";
import { tryAuthentication } from "../../store/thunk/auth";
import { compose } from "redux";
import { loadCategories } from "../../store/thunk/posts";

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
        tryAuthentication,
        loadCategories
      } = this.props;

      loadCategories();
      if (user && user.role === "guest") {
        tryAuthentication();
      }
    };

    render() {
      const {
        auth: { isLoading },
        posts: { isLoadingCategories }
      } = this.props;

      if (isLoading || isLoadingCategories) {
        return null;
      }

      return <WrappedComponent />;
    }
  }

  TryAuth.propTypes = {
    auth: PropTypes.object.isRequired,
    posts: PropTypes.object.isRequired,
    tryAuthentication: PropTypes.func.isRequired,
    loadCategories: PropTypes.func.isRequired
  };

  const mapStateToProps = ({ auth, posts }) => ({ auth, posts });
  const mapDispatchToProps = { tryAuthentication, loadCategories };

  return connect(mapStateToProps, mapDispatchToProps)(TryAuth);
};

const Root = ({ user }) => {
  const classes = useStyles();

  return (
    <div>
      <Header />
      <main className={classes.mainContainer}>{chooseRoutes(user)}</main>
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

import React, { useEffect, useState } from "react";
import AppBar from "@material-ui/core/AppBar/AppBar";
import makeStyles from "@material-ui/core/styles/makeStyles";
import style from "./style";
import Logo from "../shared/Logo";
import appRoutes from "../../routes/routes";
import layouts from "../../routes";
import HeaderLink from "../HeaderLink";
import CategoriesDropDown from "../CategoriesDropDown";
import { connect } from "react-redux";
import * as PropTypes from "prop-types";
import { logout } from "../../store/thunk/auth";
import UserHeaderCard from "../UserHeaderCard";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const useStyles = makeStyles(style);

const Header = ({
  user,
  logout,
  categories,
  posts,
  notApprovedPosts,
  router: {
    location: { pathname }
  }
}) => {
  const classes = useStyles();
  const routes = appRoutes[user.role];
  const [isCategoriesOpen, toggleCategories] = useState(false);
  const isMobile = useMediaQuery("(max-width:990px)");

  useEffect(() => {
    toggleCategories(false);
  }, [pathname]);

  const renderRightContainer = () => {
    if (user.role === "guest") {
      return layouts.map(
        ({ name, path, inHeader }) =>
          inHeader && <HeaderLink key={name} name={name} path={path} />
      );
    }

    return <UserHeaderCard user={user} logout={logout} />;
  };

  return (
    <>
      <AppBar
        position={isMobile ? "static" : "sticky"}
        classes={{
          root: classes.headerContainer
        }}
      >
        <div
          className={
            !isMobile
              ? classes.headerPartContainer
              : classes.headerPartContainerMobile
          }
        >
          <Logo isMobile={isMobile} />
          {routes.map(
            ({ name, path, inHeader }) =>
              inHeader &&
              ((name === "Categories" && !isMobile) ||
                name !== "Categories") && (
                <HeaderLink
                  key={name}
                  name={name}
                  path={path}
                  isMobile={isMobile}
                  onClickAway={
                    name === "Categories" ? () => toggleCategories(false) : null
                  }
                  onCategoriesClick={
                    name === "Categories"
                      ? () => toggleCategories(!isCategoriesOpen)
                      : null
                  }
                >
                  {name === "Posts approval" && !!notApprovedPosts.length ? (
                    <span className={classes.dot} />
                  ) : (
                    <></>
                  )}
                </HeaderLink>
              )
          )}
        </div>
        <div className={classes.headerPartContainer}>
          {renderRightContainer()}
        </div>
        {isCategoriesOpen && (
          <CategoriesDropDown posts={posts} categories={categories} />
        )}
      </AppBar>
    </>
  );
};

const mapStateToProps = ({
  router,
  auth,
  posts: { categories, posts, notApprovedPosts }
}) => ({
  user: auth.user,
  categories,
  router,
  posts,
  notApprovedPosts
});

const mapDispatchToProps = {
  logout
};

Header.propTypes = {
  user: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired,
  categories: PropTypes.array.isRequired,
  router: PropTypes.object,
  posts: PropTypes.array.isRequired,
  notApprovedPosts: PropTypes.array.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);

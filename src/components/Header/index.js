import React, { useEffect, useState } from "react";
import AppBar from "@material-ui/core/AppBar/AppBar";
import makeStyles from "@material-ui/core/styles/makeStyles";
import style from "./style";
import Logo from "../shared/Logo";
import appRoutes from "../../routes/routes";
import layouts from "../../routes";
import HeaderLink from "../HeaderLink";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import CategoriesDropDown from "../CategoriesDropDown";
import { connect } from "react-redux";
import * as PropTypes from "prop-types";
import { logout } from "../../store/thunk/auth";
import UserHeaderCard from "../UserHeaderCard";

const useStyles = makeStyles(style);

const Header = ({
  user,
  logout,
  categories,
  router: {
    location: { pathname }
  }
}) => {
  const classes = useStyles();
  const routes = appRoutes[user.role];
  const [isCategoriesOpen, toggleCategories] = useState(false);

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
        position="sticky"
        classes={{
          root: classes.headerContainer
        }}
      >
        <div className={classes.headerPartContainer}>
          <Logo />
          {routes.map(
            ({ name, path, inHeader }) =>
              inHeader && (
                <HeaderLink
                  key={name}
                  name={name}
                  path={path}
                  onClickAway={
                    name === "Categories" ? () => toggleCategories(false) : null
                  }
                  onCategoriesClick={
                    name === "Categories"
                      ? () => toggleCategories(!isCategoriesOpen)
                      : null
                  }
                />
              )
          )}
        </div>
        <div className={classes.headerPartContainer}>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </div>
          {renderRightContainer()}
        </div>
        {isCategoriesOpen && <CategoriesDropDown categories={categories} />}
      </AppBar>
    </>
  );
};

const mapStateToProps = ({ router, auth, posts: { categories } }) => ({
  user: auth.user,
  categories,
  router
});

const mapDispatchToProps = {
  logout
};

Header.propTypes = {
  user: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired,
  categories: PropTypes.array.isRequired,
  router: PropTypes.object
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);

import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar/AppBar";
import makeStyles from "@material-ui/core/styles/makeStyles";
import style from "./style";
import Logo from "../shared/Logo";
import appRoutes from "../../routes/routes";
import layouts from "../../routes";
import { user } from "../../constants";
import HeaderLink from "../HeaderLink";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import CategoriesDropDown from "../CategoriesDropDown";

const useStyles = makeStyles(style);

const Header = () => {
  const classes = useStyles();
  const routes = appRoutes[user.role];
  const [isCategoriesOpen, onCategoriesClick] = useState(false);

  const renderRightContainer = () => {
    if (user.role === "guest") {
      return layouts.map(
        ({ name, path, inHeader }) =>
          inHeader && <HeaderLink key={name} name={name} path={path}/>
      );
    }

    return <p>User Profile</p>;
  };

  return (
    <>
      <AppBar
        position="static"
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
                    name === "Categories"
                      ? () => onCategoriesClick(false)
                      : null
                  }
                  onCategoriesClick={
                    name === "Categories"
                      ? () => onCategoriesClick(!isCategoriesOpen)
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
      </AppBar>
      {isCategoriesOpen && <CategoriesDropDown />}
    </>
  );
};

export default Header;

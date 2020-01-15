import React, { useEffect, useState } from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import style from "./style";
import Logo from "../shared/Logo";
import { FOOTER_TEXT } from "../../constants";
import VK_logo from "../../assets/images/vk-32.png";
import GMAIL_logo from "../../assets/images/email-5-32.png";
import LINKED_logo from "../../assets/images/linkedin-6-32.png";
import { connect } from "react-redux";
import * as PropTypes from "prop-types";
import groupBy from "lodash/groupBy";
import useMediaQuery from "@material-ui/core/useMediaQuery/useMediaQuery";

const useStyles = makeStyles(style);

const Footer = ({ posts }) => {
  const classes = useStyles();
  const [categories, setCategories] = useState({});
  const isMobile = useMediaQuery("(max-width:990px)");

  useEffect(() => {
    setCategories(groupBy(posts, item => item.categoryName));
  }, [posts]);

  return (
    <div
      className={
        isMobile ? classes.footerContainerMobile : classes.footerContainer
      }
    >
      <div className={classes.leftContainer}>
        <Logo />
        <p className={classes.footerText}>{FOOTER_TEXT}</p>
      </div>
      <div>
        <div className={classes.contactUs}>
          <p className={classes.contactUsText}>Contact us:</p>
          <div className={classes.logoWithLink}>
            <img alt="" className={classes.logoImg} src={VK_logo} />
            <div>
              <p className={classes.link}>https://vk.com/gavrushko_dima</p>
              <p className={classes.link}>https://vk.com/id157416358</p>
            </div>
          </div>
          <div className={classes.logoWithLink}>
            <img alt="" className={classes.logoImg} src={GMAIL_logo} />
            <div>
              <p className={classes.link}>gavrushko98@gmail.com</p>
              <p className={classes.link}>ya.pryshchep@yandex.by</p>
            </div>
          </div>
          <div className={classes.logoWithLink}>
            <img alt="" className={classes.logoImg} src={LINKED_logo} />
            <p className={classes.link}>
              linkedin.com/in/dmitry-gavrushko-a19447169
            </p>
          </div>
        </div>
      </div>
      {!isMobile && (
        <div className={classes.rightContainer}>
          <p className={classes.rightContainerTitle}>Categories</p>
          {Object.entries(categories).map(([key, value]) => (
            <div className={classes.category} key={key}>
              <p className={classes.link}>
                {key} ({value.length})
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const mapStateToProps = ({ posts: { posts } }) => ({
  posts
});

Footer.propTypes = {
  posts: PropTypes.array.isRequired
};

export default connect(mapStateToProps)(Footer);

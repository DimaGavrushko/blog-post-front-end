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
import _ from "lodash";

const useStyles = makeStyles(style);

const Footer = ({ posts }) => {
  const classes = useStyles();
  const [categories, setCategories] = useState({});

  useEffect(() => {
    setCategories(_.groupBy(posts, item => item.categoryName));
  }, [posts]);

  return (
    <div className={classes.footerContainer}>
      <div className={classes.leftContainer}>
        <Logo />
        <p className={classes.footerText}>{FOOTER_TEXT}</p>
      </div>
      <div>
        <div className={classes.contactUs}>
          <p className={classes.contactUsText}>Contact us:</p>
          <div className={classes.logoWithLink}>
            <img alt="" className={classes.logoImg} src={VK_logo} />
            <p className={classes.link}>https://vk.com/gavrushko_dima</p>
          </div>
          <div className={classes.logoWithLink}>
            <img alt="" className={classes.logoImg} src={GMAIL_logo} />
            <p className={classes.link}>gavrushko98@gmail.com</p>
          </div>
          <div className={classes.logoWithLink}>
            <img alt="" className={classes.logoImg} src={LINKED_logo} />
            <p className={classes.link}>linkedin.com/in/dmitry-gavrushko-a19447169</p>
          </div>
        </div>
      </div>
      <div className={classes.rightContainer}>
        <p className={classes.rightContainerTitle}>Categories</p>
        {Object.entries(categories).map(([key, value]) => (
          <div className={classes.category} key={key}>
            <p className={classes.link}>{key} ({value.length})</p>
          </div>
        ))}
      </div>
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

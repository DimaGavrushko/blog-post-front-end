import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import style from "./style";
import * as PropTypes from "prop-types";
import * as classnames from "classnames";

const useStyles = makeStyles(style);

const CategoryTab = ({
  onCategoryClick,
  name,
  selectedCategory,
  currentCategory
}) => {
  const classes = useStyles();

  return (
    <div
      onClick={e => onCategoryClick(e, currentCategory)}
      className={classnames({
        [classes.category]: true,
        [classes.selected]: selectedCategory === currentCategory
      })}
    >
      {name}
    </div>
  );
};

CategoryTab.propTypes = {
  onCategoryClick: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  selectedCategory: PropTypes.number.isRequired,
  currentCategory: PropTypes.number.isRequired
};

export default CategoryTab;

import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import style from "./style";
import * as PropTypes from "prop-types";
import * as classnames from "classnames";

const useStyles = makeStyles(style);

const CategoryTab = ({
  onCategoryClick,
  selectedCategory,
  currentCategory
}) => {
  const classes = useStyles();

  return (
    <div
      onClick={e => onCategoryClick(e, currentCategory._id)}
      className={classnames({
        [classes.category]: true,
        [classes.selected]: selectedCategory._id === currentCategory._id
      })}
    >
      {currentCategory.name}
    </div>
  );
};

CategoryTab.propTypes = {
  onCategoryClick: PropTypes.func.isRequired,
  selectedCategory: PropTypes.object.isRequired,
  currentCategory: PropTypes.object.isRequired
};

export default CategoryTab;

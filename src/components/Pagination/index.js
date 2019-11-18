import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import style from "./style";
import * as PropTypes from "prop-types";
import * as classnames from "classnames";

const useStyles = makeStyles(style);

const PaginationButton = ({ selected, label, size = "small" }) => {
  const classes = useStyles();

  return (
    <div
      className={classnames({
        [classes.paginationButtonContainer]: true,
        [classes.selected]: selected
      })}
    >
      {label}
    </div>
  );
};

PaginationButton.propTypes = {
  selected: PropTypes.bool.isRequired,
  label: PropTypes.number.isRequired,
  size: PropTypes.string
};

const Pagination = ({ current, count, total }) => {
  const classes = useStyles();
  const length = Math.ceil(total / count);
  const arr = [...Array(length)].map(() => 0);

  return (
    <div className={classes.paginationContainer}>
      {arr.map((el, i) => (
        <PaginationButton key={i} selected={current === i} label={i + 1} />
      ))}
    </div>
  );
};

Pagination.propTypes = {
  current: PropTypes.number.isRequired,
  count: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired
};

export default Pagination;

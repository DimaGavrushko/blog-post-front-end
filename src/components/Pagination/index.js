import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import style from "./style";
import * as PropTypes from "prop-types";
import * as classnames from "classnames";

const useStyles = makeStyles(style);

const PaginationButton = ({
  index,
  onPaginationClick,
  selected,
  label,
  size = "small"
}) => {
  const classes = useStyles();

  const onClick = () => {
    onPaginationClick(index);
  };

  return (
    <div
      className={classnames({
        [classes.paginationButtonContainer]: true,
        [classes.selected]: selected
      })}
      onClick={onClick}
    >
      {label}
    </div>
  );
};

PaginationButton.propTypes = {
  selected: PropTypes.bool.isRequired,
  label: PropTypes.number.isRequired,
  size: PropTypes.string,
  index: PropTypes.number.isRequired,
  onPaginationClick: PropTypes.func.isRequired
};

const Pagination = ({ onPaginationClick, current, count, total }) => {
  const classes = useStyles();
  const length = Math.ceil(total / count);
  const arr = [...Array(length)];

  return (
    <div className={classes.paginationContainer}>
      {arr.map((el, i) => (
        <PaginationButton
          key={i}
          index={i}
          selected={current === i}
          label={i + 1}
          onPaginationClick={onPaginationClick}
        />
      ))}
    </div>
  );
};

Pagination.propTypes = {
  current: PropTypes.number.isRequired,
  count: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  onPaginationClick: PropTypes.func.isRequired
};

export default Pagination;

import React, { useState } from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import style from "./style";
import * as PropTypes from "prop-types";
import * as classnames from "classnames";

const useStyles = makeStyles(style);

const PaginationButton = ({ index, onPaginationClick, selected }) => {
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
      {index + 1}
    </div>
  );
};

PaginationButton.propTypes = {
  selected: PropTypes.bool.isRequired,
  index: PropTypes.number.isRequired,
  onPaginationClick: PropTypes.func.isRequired
};

const Pagination = ({ onPaginationClick, current, count, total }) => {
  const getFrom = (current, length) => {
    if (length < 6 || current === 0) {
      return 0;
    } else if (current + 4 > length) {
      return length - 5;
    }

    return current - 1;
  };

  const classes = useStyles();
  const [length] = useState(Math.ceil(total / count));
  const arr = [...Array(length)];
  const from = getFrom(current, length);
  const to = from + 5;

  return (
    <div className={classes.paginationContainer}>
      {arr.slice(from, Math.min(to, length)).map((el, i) => (
        <PaginationButton
          key={i}
          selected={current === from + i}
          index={from + i}
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

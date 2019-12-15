import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import style from "./style";
import * as PropTypes from "prop-types";
import EditIcon from "@material-ui/icons/Edit";
import IconButton from "@material-ui/core/IconButton/IconButton";
import TextField from "@material-ui/core/TextField/TextField";
import ClickAwayListener from "@material-ui/core/ClickAwayListener/ClickAwayListener";

const useStyles = makeStyles(style);

const TextContainerWithLabel = ({
  name,
  text,
  label,
  onClickAway,
  onEditClick,
  onChange,
  isOwnPage,
  isEditMode
}) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      {isEditMode && isOwnPage ? (
        <ClickAwayListener onClickAway={() => onClickAway(name, text)}>
          <TextField
            classes={{
              root: classes.input
            }}
            name={name}
            label={label[0].toUpperCase() + label.slice(1)}
            variant="outlined"
            margin="normal"
            value={text}
            multiline={label === "about"}
            onChange={onChange}
          />
        </ClickAwayListener>
      ) : (
        <>
          <div className={classes.label}>{label}</div>
          <div className={classes.editIconContainer}>
            <div className={classes.text}>{text}</div>
            {isOwnPage && (
              <IconButton
                size="small"
                className={classes.editIcon}
                onClick={() => onEditClick(name, text)}
              >
                <EditIcon fontSize="small" style={{ fontSize: 12 }} />
              </IconButton>
            )}
          </div>
        </>
      )}
    </div>
  );
};

TextContainerWithLabel.propTypes = {
  label: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  isEditMode: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  onClickAway: PropTypes.func,
  onEditClick: PropTypes.func,
  onChange: PropTypes.func,
  isOwnPage: PropTypes.bool.isRequired
};

export default TextContainerWithLabel;

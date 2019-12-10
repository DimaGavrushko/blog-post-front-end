import React, { useState } from "react";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import * as PropTypes from "prop-types";
import { connect } from "react-redux";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import makeStyles from "@material-ui/core/styles/makeStyles";

import { EditorState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";

import style from "./style";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

let postData = new FormData();
const fileReader = new FileReader();
const useStyles = makeStyles(style);

const CreatePost = ({ categories = [] }) => {
  const classes = useStyles();
  const [category, setCategory] = useState(categories[0]);
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [title, setTitle] = useState("");
  const [img, setImage] = useState("");

  const onFieldChange = ({ target }) => {
    if (target.name === "title") {
      setTitle(target.value);
    } else {
      setCategory(target.value);
    }
  };


  const convertContentToHtml = editorState => {
    return draftToHtml(convertToRaw(editorState.getCurrentContent()));
  };

  const onEditorStateChange = editorState => {
    setEditorState(editorState);
  };

  fileReader.onload = () => {
    setImage(fileReader.result);
  };

  const loadPhoto = ({ target }) => {
    const [photo] = target.files;
    fileReader.readAsDataURL(photo);
    postData.append('img', photo);
  };

  const onPostCreate = () => {
    postData.append("title", title);
    postData.append("categoryId", category._id);
    postData.append("content", convertContentToHtml(editorState));
  };

  return (
    <>
      <Grid container className={classes.gridContainer}>
        <Grid item xs={1} sm={1} md={2} lg={2}></Grid>
        <Grid item xs={10} sm={9} md={7} lg={7}>
          <div className={classes.container}>
            <div className={classes.categoryTitleContainer}>
              {!!categories.length && (
                <FormControl className={classes.formControl}>
                  <InputLabel id="select-label">Category</InputLabel>
                  <Select
                    value={category || ""}
                    labelId="select-label"
                    onChange={onFieldChange}
                    className={classes.select}
                  >
                    {categories.map(el => (
                      <MenuItem key={el._id} value={el}>
                        {el.name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              )}
              <TextField
                classes={{
                  root: classes.input
                }}
                name="title"
                label="Title"
                variant="outlined"
                margin="normal"
                onChange={onFieldChange}
                value={title}
              />
            </div>
            <div className={classes.imageContainer}>
              <img alt="" className={classes.image} src={img} />
            </div>
            <Button
              variant="contained"
              color="primary"
              component="label"
              className={classes.button}
            >
              Load photo
              <input
                value=""
                type="file"
                accept="image/*"
                style={{ display: "none" }}
                onChange={loadPhoto}
              />
            </Button>
            <Editor
              editorState={editorState}
              editorClassName={classes.editor}
              onEditorStateChange={onEditorStateChange}
            />
            <Button
              disabled={
                (
                  !title.length || !img.length || !category
                  || convertContentToHtml(editorState) === "<p></p>\n"
                )
              }
              variant="contained"
              color="primary"
              classes={{
                root: classes.button,
                disabled: classes.disabledButton
              }}
              onClick={onPostCreate}
            >
              Submit
            </Button>
          </div>
        </Grid>
        <Grid item xs={1} sm={2} md={3} lg={3}></Grid>
      </Grid>
    </>
  );
};
const mapStateToProps = ({ posts: { categories } }) => ({
  categories
});

CreatePost.propTypes = {
  categories: PropTypes.array.isRequired
};

export default connect(mapStateToProps, null)(CreatePost);

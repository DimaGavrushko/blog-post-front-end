import React, { useEffect, useState } from "react";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import * as PropTypes from "prop-types";
import { connect } from "react-redux";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import makeStyles from "@material-ui/core/styles/makeStyles";

import { ContentState, convertToRaw, EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";
import htmlToDraft from "html-to-draftjs";

import style from "./style";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { createPost } from "../../store/thunk/posts";

let postData;
const fileReader = new FileReader();
const useStyles = makeStyles(style);

function getInitialContent(content) {
  const contentBlock = htmlToDraft(content);
  if (contentBlock) {
    const contentState = ContentState.createFromBlockArray(
      contentBlock.contentBlocks
    );
    return EditorState.createWithContent(contentState);
  }

  return EditorState.createEmpty();
}

const CreatePost = ({ categories = [], createPost, author, location: { post } }) => {
  const classes = useStyles();
  const [category, setCategory] = useState(
    post ? categories.find(el => el.name === post.category) : categories[0]
  );
  const [editorState, setEditorState] = useState(
    post ? getInitialContent(post.text) : EditorState.createEmpty()
  );
  const [title, setTitle] = useState(post ? post.title : "");
  const [img, setImage] = useState(post ? post.img : "");

  useEffect(() => {
    postData = new FormData();
  }, []);

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
    postData.append("img", photo);
  };

  const onPostCreate = () => {
    postData.append("title", title);
    postData.append("categoryId", category._id);
    postData.append("content", convertContentToHtml(editorState));
    postData.append("authorId", author._id);
    postData.append("authorName", author.firstName);
    createPost(postData);
  };

  return (
    <>
      <Grid container className={classes.gridContainer}>
        <Grid item xs={1} sm={1} md={2} lg={2} />
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
            {!!img.length && (
              <div className={classes.imageContainer}>
                <img alt="" className={classes.image} src={img} />
              </div>
            )}
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
                !title.length ||
                !img.length ||
                !category ||
                convertContentToHtml(editorState) === "<p></p>\n"
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
        <Grid item xs={1} sm={2} md={3} lg={3} />
      </Grid>
    </>
  );
};
const mapStateToProps = ({ posts: { categories }, auth: { user } }) => ({
  categories,
  author: user
});

const mapDispatchToProps = {
  createPost
};

CreatePost.propTypes = {
  categories: PropTypes.array.isRequired,
  createPost: PropTypes.func.isRequired,
  author: PropTypes.object.isRequired,
  location: PropTypes.object
};

export default connect(mapStateToProps, mapDispatchToProps)(CreatePost);

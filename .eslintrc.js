module.exports = {
  extends: "./src/config/lint/.eslintrc.js",
  root: true,
  globals: {
    shallow: true,
    render: true,
    mount: true,
    logger: true
  }
};

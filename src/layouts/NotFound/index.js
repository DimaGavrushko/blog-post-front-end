import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const NotFound = () => (
  <Fragment>
    <h1>Page not found</h1>
    <Link to="/">Return to Home Page</Link>
  </Fragment>
);

export default NotFound;

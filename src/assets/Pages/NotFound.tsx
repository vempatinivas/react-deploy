import React from "react";
import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <>
      <div>404 page not found</div>
      <Link to="/">Go To Home</Link>
      <br />
      <a href="/">Go To Home using A</a>
    </>
  );
};

export default NotFound;

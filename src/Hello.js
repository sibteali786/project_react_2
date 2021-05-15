import React from "react";
import "./Hello.css";
function Hello({ firstname }) {
  return (
    <p className="myname">Hello its from the hello tag name: {firstname} </p>
  );
  // We can only return a single independent tag or a tree of tags
  /* All properties passsed in the React.DOm renderer in index.js comes in function paramters as first argument */
}

export default Hello;

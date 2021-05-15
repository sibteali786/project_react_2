import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// ReactDOM.render(
//   React.createElement(
//     "div",
//     null,
//     React.createElement("span", null, "Hello from the span inside the div")
//   ), // React on the back is converting this code into the html one we see below\
//   // Small letter means Built-in and Capital letter means Custom component
//   // this div is sent to be displayed in a div having id root in the index.hmtl in public
//   document.getElementById("root")
// );

ReactDOM.render(
  <div>
    <App name="Sibteali" age={25} />
  </div>,
  // We can give any property to a given html tag like above
  // this div is sent to be displayed in a div having id root in the index.hmtl in public
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

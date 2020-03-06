
// IMPORTS
// react
import React from "react";
import ReactDOM from "react-dom";
// router
import { BrowserRouter as Router } from "react-router-dom";
// themes and styles
import Reset from "./styles/global/Reset";
// import GlobalStyle from "./styles/global/GlobalStyle";
// components
import App from './App';
import * as serviceWorker from './serviceworker'
// RENDER
ReactDOM.render(
  <Router>
    <Reset />
    {/* <GlobalStyle /> */}
    <App />
  </Router>,
  document.getElementById("root")
);

serviceWorker.unregister()
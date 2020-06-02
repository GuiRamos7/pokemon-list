import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "assets/scss/main.scss";
import { Provider } from "react-redux";
import store from "./Store";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

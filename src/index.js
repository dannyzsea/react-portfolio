import React from "react";
import ReactDOM from "react-dom";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from "./App";
import './data';
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<App />, document.getElementById("root"));


serviceWorker.unregister();

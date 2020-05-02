//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import TraficLights from "./component/TraficLights.js";

//render your react application
ReactDOM.render(<TraficLights />, document.querySelector("#app"));

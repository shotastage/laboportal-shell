import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import Router from "./Router";
import "normalize.css";
import "./index.css";
import "./i18n";
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
    <Suspense fallback={<></>}>
        <Router />
    </Suspense>,
    document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

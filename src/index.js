import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BreadcrumbsProvider } from "react-breadcrumbs-dynamic";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <BreadcrumbsProvider>
      <App />
    </BreadcrumbsProvider>
  </>
);

reportWebVitals();

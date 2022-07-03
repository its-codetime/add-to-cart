import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import ProductsContextProvider from "./context/ProductContext";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ProductsContextProvider>
        <App />
      </ProductsContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);

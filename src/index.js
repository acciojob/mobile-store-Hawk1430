import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import ProductProvider from "./components/MobileContext/ProductContext";



ReactDOM.render(
    <ProductProvider>
        <App/>
    </ProductProvider>
    , document.getElementById("root"));

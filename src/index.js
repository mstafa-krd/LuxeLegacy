import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import WindowContext from "./Context/WindowContext";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CartProvider from "./Context/CartContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CartProvider>
      <WindowContext>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </WindowContext>
    </CartProvider>
  </React.StrictMode>
);

reportWebVitals();

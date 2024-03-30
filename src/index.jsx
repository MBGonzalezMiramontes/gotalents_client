import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import styles from "./index.module.css";
import { store } from "./redux/store/store.js";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter className={styles.body}>
      <App />
    </BrowserRouter>
  </Provider>
);

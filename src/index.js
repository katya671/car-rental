import React from "react";
import ReactDOM from "react-dom/client";
//import { Provider } from "react-redux";
//import { persistor, store } from "./redux/store";
import "./index.css";
import App from "./components/App/App";
//import { PersistGate } from "redux-persist/integration/react";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  //<Provider store={store}>
  //<PersistGate loading={null} persistor={persistor}>
  <BrowserRouter basename="/car-rental">
    <App />
  </BrowserRouter>
  //</PersistGate>
  // </Provider>
);

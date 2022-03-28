import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

<form data-netlify="true" name="form-name" method="post" onSubmit="submit">
  <input type="hidden" name="form-name" value="pizzaOrder" />
  <label>
    What order did the pizza give to the pineapple?
    <input name="order" type="text" />
  </label>
  <input type="submit" />
</form>;

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

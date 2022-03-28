import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

<form onSubmit="submit" netlify data-netlify="true" name="contact">
  <input type="hidden" name="form-name" value="contact" />
  <label for="name"> Name </label>
  <input type="text" name="name" />
  <div>Name should be 3 to 20 characters</div>
  <label for="mobile"> Mobile No </label>
  <input type="tel" name="mobile" />
  <div>Enter a valid mobile number</div>
  <label for="email"> Email </label>
  <input type="email" name="email" />
  <div>Enter a valid email id</div>
  <label htmlFor="message"> Message </label>
  <textarea name="message" id="message"></textarea>
  <div>
    <button type="submit">Submit</button>
  </div>
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

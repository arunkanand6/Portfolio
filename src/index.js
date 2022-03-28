import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

<form
  name="contact"
  method="POST"
  onSubmit="Submit"
  netlify
  data-netlify="true"
>
  <input className="d-none" name="botfield" />
  <label htmlFor="name" className="my-2">
    Name
  </label>
  <input
    className="my-2 myinput"
    type="text"
    name="name"
    id="name"
    placeholder="enter your name here"
  />
  {<div className="mywarning">Name should be 3 to 20 characters</div>}
  <label htmlFor="mobile" className="my-2">
    Mobile No
  </label>
  <input
    className="my-2  myinput"
    type="tel"
    name="mobile"
    id="mobile"
    placeholder="enter your mobile number"
  />
  {<div className="mywarning">Enter a valid mobile number</div>}
  <label htmlFor="email" className="my-2">
    Email
  </label>
  <input
    className="my-2  myinput"
    type="email"
    name="email"
    id="email"
    placeholder="example@address.com"
  />
  {<div className="mywarning">Enter a valid email id</div>}
  <label htmlFor="message" className="my-2">
    Message
  </label>
  <textarea name="message" id="message" className="mytextarea my-2"></textarea>
  <div className="text-center">
    <button className="btn btn-primary my-2" type="submit">
      Submit
    </button>
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

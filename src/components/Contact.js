import React from "react";
import "./Contact.css";
import Logo from "../assets/logo.png";

export function Contact() {
  return (
    <div className="contact">
      <div className="container">
        <div className="col-8 mx-auto">
          <div style={{ height: "20px" }}></div>
          <div className="my-2">
            <div className="row border border-dark rounded-3">
              <div className="col-sm-6 col-xs-12 ps-5 py-5">
                <h1>To get in touch Leave me a message...</h1>
                <img
                  src={Logo}
                  alt="Logo"
                  className="col-sm-9 d-none d-sm-block p-md-3 p-sm-2 mx-auto"
                />
              </div>
              <div className="col-sm-6 col-xs-12 pe-5 py-5">
                <form
                  name="contact"
                  method="POST"
                  data-netlify="true"
                  onSubmit="submit"
                  data-netlify-honeypot="bot-field"
                >
                  <input className="d-none" name="botfield" />
                  <label htmlFor="name" classNam="my-2">
                    Name
                  </label>
                  <input
                    className="my-2 myinput"
                    type="text"
                    name="name"
                    id="name"
                    placeholder="enter your name here"
                  />
                  <label htmlFor="mobile" classNam="my-2">
                    Mobile No
                  </label>
                  <input
                    className="my-2  myinput"
                    type="tel"
                    name="mobile"
                    id="mobile"
                    placeholder="enter your mobile number"
                  />
                  <label htmlFor="email" classNam="my-2">
                    Email
                  </label>
                  <input
                    className="my-2  myinput"
                    type="email"
                    name="email"
                    id="email"
                    placeholder="example@address.com"
                  />
                  <label htmlFor="message" className="my-2">
                    Message
                  </label>
                  <textarea className="mytextarea my-2"></textarea>
                  <div className="text-center">
                    <button className="btn btn-primary my-2" type="submit">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div style={{ height: "20px" }}></div>
    </div>
  );
}

export default Contact;

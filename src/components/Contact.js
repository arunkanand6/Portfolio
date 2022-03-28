import React, { useState } from "react";
import "./Contact.css";
import Logo from "../assets/logo.png";
import success from "../assets/success.gif";

export function Contact() {
  const [data, setData] = useState({
    name: "",
    mobile: "",
    email: "",
    message: "",
  });

  const [valid, setValid] = useState({
    name: false,
    mobile: false,
    email: false,
    message: false,
  });

  const [invalid, setInvalid] = useState(false);

  const [filled, setFilled] = useState(false);

  const handleChange = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
    var type = event.target.name;
    console.log(invalid);
    switch (type) {
      case "name":
        if (/^[a-zA-Z ]{3,20}$/i.test(event.target.value)) {
          setValid({ ...valid, name: true });
        } else {
          setValid({ ...valid, name: false });
        }
        break;
      case "mobile":
        if (/^[6-9][0-9]{9}$/.test(event.target.value)) {
          setValid({ ...valid, mobile: true });
        } else {
          setValid({ ...valid, mobile: false });
        }
        break;
      case "email":
        if (
          /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
            event.target.value
          )
        ) {
          setValid({ ...valid, email: true });
        } else {
          setValid({ ...valid, email: false });
        }
        break;
      default:
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!invalid) setInvalid(true);
    if (valid.name && (valid.mobile || valid.email)) {
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact", ...this.state }),
      })
        .then(() => setFilled(true))
        .catch((error) => alert(error));
    }
  };

  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  };

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
                {!filled && (
                  <form onSubmit={handleSubmit} netlify data-netlify="true">
                    <input
                      type="hidden"
                      name="form-name"
                      value="name_of_my_form"
                    />
                    <label htmlFor="name" className="my-2">
                      Name
                    </label>
                    <input
                      className="my-2 myinput"
                      type="text"
                      name="name"
                      id="name"
                      value={data.name}
                      onChange={handleChange}
                      placeholder="enter your name here"
                    />
                    {!valid.name && invalid && (
                      <div className="mywarning">
                        Name should be 3 to 20 characters
                      </div>
                    )}
                    <label htmlFor="mobile" className="my-2">
                      Mobile No
                    </label>
                    <input
                      className="my-2  myinput"
                      type="tel"
                      name="mobile"
                      id="mobile"
                      value={data.mobile}
                      onChange={handleChange}
                      placeholder="enter your mobile number"
                    />
                    {!valid.mobile && invalid && (
                      <div className="mywarning">
                        Enter a valid mobile number
                      </div>
                    )}
                    <label htmlFor="email" className="my-2">
                      Email
                    </label>
                    <input
                      className="my-2  myinput"
                      type="email"
                      name="email"
                      id="email"
                      value={data.email}
                      onChange={handleChange}
                      placeholder="example@address.com"
                    />
                    {!valid.email && invalid && (
                      <div className="mywarning">Enter a valid email id</div>
                    )}
                    <label htmlFor="message" className="my-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      id="message"
                      value={data.message}
                      onChange={handleChange}
                      className="mytextarea my-2"
                    ></textarea>
                    <div className="text-center">
                      <button className="btn btn-primary my-2" type="submit">
                        Submit
                      </button>
                    </div>
                  </form>
                )}
                {filled && (
                  <div>
                    <img src={success} alt="success" className="col-12" />
                    <p className="text-center">
                      Your message has been submitted. <br />
                      Thank you
                    </p>
                  </div>
                )}
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

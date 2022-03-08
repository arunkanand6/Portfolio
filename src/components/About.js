import React from "react";
import Logo from "../assets/logo.png";
import dp from "../assets/dp.jpg";
import "./About.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

function About() {
  return (
    <div className="about">
      <div className="container">
        <div className="row">
          <img
            className="col-md-4 col-sm-12 py-5 my-5 bg-dark"
            src={dp}
            alt="not available"
          />
          <div className="col-md-8 col-sm-12 p-5 text-center">
            <div className="mb-5">
              <h1>Hi! and Welcome!</h1>
            </div>
            <div>
              <img className="about-logo" src={Logo} alt="not available" />
              <h2 className="mb-5 text-primary">I'm Arun Kumar M</h2>
              <p className="about-text">
                I am a Full Stack Web developer based in Hyderabad.
                <br /> I’m an entry level full stack developer with good
                experience developing full stack applications from designing to
                deployment.
              </p>
              <div>
                <FontAwesomeIcon
                  className="myicon"
                  onClick={() =>
                    window.open("https://github.com/arunkanand6", "_blank")
                  }
                  icon={faGithub}
                />
                <FontAwesomeIcon
                  className="myicon"
                  onClick={() =>
                    window.open(
                      "https://www.linkedin.com/in/arun-kumar-m-2a12921a7/",
                      "_blank"
                    )
                  }
                  icon={faLinkedinIn}
                />
                <FontAwesomeIcon
                  className="myicon"
                  onClick={() =>
                    window.open(
                      "mailto:arunkanand6@gmail.com?subject=From Portfolio - ",
                      "_blank"
                    )
                  }
                  icon={faEnvelope}
                />
                <FontAwesomeIcon
                  className="myicon"
                  onClick={() =>
                    window.open(
                      "https://www.instagram.com/a_smartest_idiot",
                      "_blank"
                    )
                  }
                  icon={faInstagram}
                />
              </div>
              <p>Scroll down to know more about me</p>
              <FontAwesomeIcon icon={faArrowDown} />
            </div>
          </div>
        </div>
        <hr />
        <div>
          <h2 className="py-5">What can i do?</h2>
          <div>
            <div className="row">
              <div className="col-xl-2.4 col-lg-3 col-md-4 col-sm-6 col-xs-12 d-sm-flex my-3">
                <div className="card d-flex flex-column">
                  <div className="card-header bg-primary">
                    <h5 className="card-title text-light">UX/UI Design</h5>
                  </div>
                  <div className="card-body bg-dark">
                    <p className="card-text text-light">
                      Design User Experience and user Interface using:
                      <br />
                      <br />
                      <ul>
                        <li>Figma</li>
                        <li>Adobe XD</li>
                      </ul>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xl-2.4 col-lg-3 col-md-4 col-sm-6 col-xs-12 d-sm-flex my-3">
                <div className="card">
                  <div className="card-header bg-primary">
                    <h5 className="card-title text-light">Front-End</h5>
                  </div>
                  <div className="card-body bg-dark">
                    <p className="card-text text-light">
                      Build the FrontEnd of a Web Application using:
                      <br />
                      <br />
                      Technologies
                      <ul>
                        <li>React JS</li>
                        <li>Bootstrap</li>
                      </ul>
                      Languages
                      <ul>
                        <li>JavaScript</li>
                        <li>HTML 5</li>
                        <li>CSS</li>
                      </ul>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xl-2.4 col-lg-3 col-md-4 col-sm-6 col-xs-12 d-sm-flex my-3">
                <div className="card">
                  <div className="card-header bg-primary">
                    <h5 className="card-title text-light">Back-End</h5>
                  </div>
                  <div className="card-body bg-dark">
                    <p className="card-text text-light">
                      Build the Back-End of a Web Application using
                      <br />
                      <br />
                      Technologies
                      <ul>
                        <li>Spring Boot</li>
                        <li>Spring Cloud</li>
                        <li>Spring Microservices</li>
                        <li>Spring Security</li>
                        <li>Spring GraphQL</li>
                        <li>Spring Rest</li>
                      </ul>
                      Languages
                      <ul>
                        <li>Java 8</li>
                      </ul>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xl-2.4 col-lg-3 col-md-4 col-sm-6 col-xs-12 d-sm-flex my-3">
                <div className="card">
                  <div className="card-header bg-primary">
                    <h5 className="card-title text-light">Data Base</h5>
                  </div>
                  <div className="card-body bg-dark">
                    <p className="card-text text-light">
                      Developed and built database using
                      <br />
                      <br />
                      Technologies
                      <ul>
                        <li>PostgreSQL</li>
                        <li>MySQL</li>
                        <li>Oracle SQL</li>
                      </ul>
                      Languages
                      <ul>
                        <li>SQL</li>
                      </ul>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xl-2.4 col-lg-3 col-md-4 col-sm-6 col-xs-12 d-sm-flex my-3">
                <div className="card">
                  <div className="card-header bg-primary">
                    <h5 className="card-title text-light">Dev Ops</h5>
                  </div>
                  <div className="card-body bg-dark">
                    <p className="card-text text-light">
                      Dev Ops Technologies
                      <br />
                      <br />
                      <ul>
                        <li>Git (Version Control)</li>
                        <li>Jenkins (CI/CD)</li>
                        <li>SonarQube (Code Quality)</li>
                        <li>Docker</li>
                      </ul>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div>
          <h2>What's my experience?</h2>
          <div className="card my-3">
            <div className="card-header bg-primary text-white">
              <h5 className="card-title d-inline">
                Analyst / Software Developer at Capgemini Technology Services
                Pvt. Ltd
              </h5>
              <p className="float-end d-inline">Aug 2021 - Present</p>
            </div>
            <div className="card-body bg-dark text-white">
              <div className="row">
                <p className="col-md-6 col-sm-12">
                  <b>Project:</b> Discover Financial Services Bank , Illinois US
                </p>
                <p className="col-md-6 col-sm-12">
                  <b>Role:</b> Shadow resource under a Full Stack Developer
                </p>
              </div>
              <div id="exp1collapse" className="collapse">
                <b>Responsibilities:</b>
                <br />
                <ul>
                  <li>
                    Acquiring experience in Full Stack Development and
                    continuing training from internship.
                  </li>
                </ul>
              </div>
            </div>
            <div className="card-footer text-center">
              <a
                className="collapsed text-decoration-none text-black"
                data-bs-toggle="collapse"
                href="#exp1collapse"
                aria-expanded="false"
                aria-controls="collapseExample"
              >
                <span className="if-collapsed">Tap to show more</span>
                <span className="if-not-collapsed">Tap to show less</span>
              </a>
            </div>
          </div>
          <div className="card my-3">
            <div className="card-header bg-primary text-white">
              <h5 className="card-title d-inline">
                Intern at Capgemini Technology Services Pvt. Ltd
              </h5>
              <p className="float-end d-inline">Feb 2021 - May 2021</p>
            </div>
            <div className="card-body bg-dark text-white">
              <div className="row">
                <p className="col-md-6 col-sm-12">
                  <b>Project:</b> Payment Wallet Application
                </p>
                <p className="col-md-6 col-sm-12">
                  <b>Role:</b> Full Stack Developer Trainee
                </p>
              </div>
              <div id="exp2collapse" className="collapse">
                <b>Responsibilities:</b>
                <br />
                <ul>
                  <li>
                    Developed a Full Stack Web Application – Payment Wallet
                    Application.
                  </li>
                  <li>
                    Developed backend for the application using Java, Spring
                    Boot, Rest Services, Spring Security, Spring Cloud, Spring
                    Gateway and Microservices.
                  </li>
                  <li>
                    Developed Front End using JavaScript, ECMAScript, ReactJS,
                    Redux, HTML, CSS Bootstrap, Sematic UI and Material UI.
                  </li>
                  <li>
                    Designed the User Interface and User Experience (UI/UX)
                    using Figma and Adobe XD for Wireframes (Low-fidelity) and
                    MockUps (High Fidelity).
                  </li>
                  <li>Developed Database using PostgreSQL.</li>
                  <li>
                    Used Docker for deployment, Git and GitHub for version
                    control, Jenkins for Continuous Integration and SonarQube
                    for Quality management.
                  </li>
                </ul>
              </div>
            </div>
            <div className="card-footer text-center">
              <a
                className="collapsed text-decoration-none text-black"
                data-bs-toggle="collapse"
                href="#exp2collapse"
                aria-expanded="false"
                aria-controls="collapseExample"
              >
                <span className="if-collapsed">Tap to show more</span>
                <span className="if-not-collapsed">Tap to show less</span>
              </a>
            </div>
          </div>
        </div>
        <hr />
        <div>
          <h2>What's my qualification?</h2>
          <div className="card my-3">
            <div className="card-header bg-primary text-white">
              <h5 className="card-title d-inline">
                Bachelor of Engineering (B.E)
              </h5>
              <p className="float-end d-inline">Sep 2017 - Mar 2021</p>
            </div>
            <div className="card-body bg-dark text-white">
              <div className="row">
                <p className="col-md-6 col-sm-12">
                  <b>Major:</b> Mechanical
                </p>
                <p className="col-md-6 col-sm-12">
                  <b>Grades:</b> 8.55 CGPA (with Honors)
                </p>
                <p className="col-md-6 col-sm-12">
                  <b>University:</b> Anna University
                </p>
                <p className="col-md-6 col-sm-12">
                  <b>College:</b> Vel Tech Multitech Dr.Rangarajan Dr.Sakunthala
                  Engineering College
                </p>
              </div>
            </div>
          </div>
          <div className="card my-3">
            <div className="card-header bg-primary text-white">
              <h5 className="card-title d-inline">
                Higher Secondary Certificate(HSC) (12th/High School)
              </h5>
              <p className="float-end d-inline">June 2015 - Mar 2017</p>
            </div>
            <div className="card-body bg-dark text-white">
              <div className="row">
                <p className="col-md-6 col-sm-12">
                  <b>Major:</b> (Computer Science and Math)
                </p>
                <p className="col-md-6 col-sm-12">
                  <b>Grades:</b> 90.5%
                </p>
                <p className="col-md-6 col-sm-12">
                  <b>Board:</b> Tamil Nadu State Board
                </p>
                <p className="col-md-6 col-sm-12">
                  <b>School:</b> Don Bosco Higher Secondary School, Perambur
                </p>
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

export default About;

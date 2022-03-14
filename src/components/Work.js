import React from "react";
import HomeMadeLogo from "../assets/homemade_logo.png";
import RoadtuKadaiLogo from "../assets/roadtukadai_logo.png";
import BetterPlaceLogo from "../assets/betterplace_logo.jpg";
import "./Work.css";
import homemade_casestudy from "../assets/homemade_casestudy.pdf";
import betterplace_casestudy from "../assets/betterplace_casestudy.pdf";
import roadtukadai_casestudy from "../assets/roadtukadai_casestudy.pdf";

function Work() {
  return (
    <div className="work">
      <h1 className="text-center py-5">My Work</h1>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-sm-6  col-xs-12 d-flex">
            <div className="card">
              <img
                className="card-img-top border border-dark"
                src={HomeMadeLogo}
                alt="Home Made"
              />
              <div className="card-body px-5">
                <h2 className="pb-3">HomeMade</h2>
                HomeMade is a customized food order app, whose main goal is to
                change the lives of people who follow a strict and diet the food
                they want by customizing the food based on their needs by the
                help of alternative ingredients that satisfy their dietary
                requirements, with the feeling of eating a home cooked meal
                where they decide everything they want.
                <br />
                <button
                  className="btn btn-primary text-white my-3 ms-auto shadow-md"
                  onClick={() => {
                    window.open(homemade_casestudy, "_blank");
                  }}
                >
                  View UX Case Study
                </button>
              </div>
              <div className="card-footer">
                <span className="badge bg-dark m-2 p-2">UI/UX Design</span>
                <span className="badge bg-dark m-2 p-2">Figma</span>
                <span className="badge bg-dark m-2 p-2">Mobile App</span>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6  col-xs-12 d-flex">
            <div className="card">
              <img
                className="card-img-top border border-dark"
                src={BetterPlaceLogo}
                alt="Home Made"
              />
              <div className="card-body px-5">
                <h2 className="pb-3">Better Place</h2>
                Better Place is a app create to connect like minded people who
                want to help the community and give something back. It is
                basically an app to connect organizers who need volunteers to
                organize events and volunteers who need to find an event to help
                the community.
                <br />
                <button
                  className="btn btn-primary text-white my-3 ms-auto shadow-md"
                  onClick={() => {
                    window.open(betterplace_casestudy, "_blank");
                  }}
                >
                  View UX Case Study
                </button>
              </div>
              <div className="card-footer">
                <span className="badge bg-dark m-2 p-2">UI/UX Design</span>
                <span className="badge bg-dark m-2 p-2">Figma</span>
                <span className="badge bg-dark m-2 p-2">Mobile App</span>
                <span className="badge bg-dark m-2 p-2">
                  Responsive Web App
                </span>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6  col-xs-12 d-flex">
            <div className="card">
              <img
                className="card-img-top border border-dark"
                src={RoadtuKadaiLogo}
                alt="Home Made"
              />
              <div className="card-body px-5">
                <h2 className="pb-3">Roadtu Kadai</h2>
                Roadtu Kadai (Street Shop) is an application to find and review
                fast foods and shops near you. It helps the user to find the
                best street food shop in a particular and also allowing them to
                tell others about their experience of eating street food in a
                certain location.
                <br />
                <button
                  className="btn btn-primary text-white my-3 ms-auto shadow-md"
                  onClick={() => {
                    window.open(roadtukadai_casestudy, "_blank");
                  }}
                >
                  View UX Case Study
                </button>
              </div>
              <div className="card-footer">
                <span className="badge bg-dark m-2 p-2">UI/UX Design</span>
                <span className="badge bg-dark m-2 p-2">Figma</span>
                <span className="badge bg-dark m-2 p-2">
                  Responsive Web App
                </span>
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

export default Work;

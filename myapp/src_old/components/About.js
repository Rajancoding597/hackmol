import React, { PureComponent } from "react";
import "./About.css";
import puneet from "./images/puneet.jpg";
import tushar from "./images/tushar.jpg";
import rajan from "./images/rajan.png";
import rajveer from "./images/rajveer.jpg";
import tanya from "./images/tanya.jpg";

const About = () => {
  return (
    <>
      <div class="container">
        <div class="section-title">
          <h1>Our Team</h1>
        </div>

        <div class="row">
          <div class="column">
            <div class="team">
              <div class="team-img">
                <img src={puneet} alt="Team Image" />
              </div>
              <div class="team-content">
                <h2>Puneet</h2>
                <h3>Frontend- React JS</h3>
                <h4>puneetb.cs.20@gmail.com</h4>
              </div>
              <div class="team-social">
                <a href="#" class="social-fb">
                  {" "}
                  <i class="fab fa-facebook-f"></i>
                </a>
                <a href="#" class="social-li">
                  {" "}
                  <i class="fab fa-linkedin-in"></i>
                </a>
                <a href="#" class="social-in">
                  {" "}
                  <i class="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>

          <div class="column">
            <div class="team">
              <div class="team-img">
                <img src={rajan} alt="Team Image" />
              </div>
              <div class="team-content">
                <h2>Rajan</h2>
                <h3>Backend- Node JS</h3>
                <h4>rajand.cs.20@nitj.ac.in</h4>
              </div>
              <div class="team-social">
                <a href="#" class="social-fb">
                  {" "}
                  <i class="fab fa-facebook-f"></i>
                </a>
                <a href="#" class="social-li">
                  {" "}
                  <i class="fab fa-linkedin-in"></i>
                </a>
                <a href="#" class="social-in">
                  {" "}
                  <i class="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>

          <div class="column">
            <div class="team">
              <div class="team-img">
                <img src={tushar} alt="Team Image" />
              </div>
              <div class="team-content">
                <h2>Tushar</h2>
                <h3>Frontend- React JS</h3>
                <h4>tusharb.cs.20@gmail.com</h4>
              </div>
              <div class="team-social">
                <a href="#" class="social-fb">
                  {" "}
                  <i class="fab fa-facebook-f"></i>
                </a>
                <a href="#" class="social-li">
                  {" "}
                  <i class="fab fa-linkedin-in"></i>
                </a>
                <a href="#" class="social-in">
                  {" "}
                  <i class="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>

          <div class="column">
            <div class="team">
              <div class="team-img">
                <img src={rajveer} alt="Team Image" />
              </div>
              <div class="team-content">
                <h2>Rajveer</h2>
                <h3>Database Management</h3>
                <h4>abc@gmail.com</h4>
              </div>
              <div class="team-social">
                <a href="#" class="social-fb">
                  {" "}
                  <i class="fab fa-facebook-f"></i>
                </a>
                <a href="#" class="social-li">
                  {" "}
                  <i class="fab fa-linkedin-in"></i>
                </a>
                <a href="#" class="social-in">
                  {" "}
                  <i class="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>

          <div class="column">
            <div class="team">
              <div class="team-img">
                <img src={tanya} alt="Team Image" />
              </div>
              <div class="team-content">
                <h2>Tanya</h2>
                <h3>Backend- Node JS</h3>
                <h4>abc@gmail.com</h4>
              </div>
              <div class="team-social">
                <a href="#" class="social-fb">
                  {" "}
                  <i class="fab fa-facebook-f"></i>
                </a>
                <a href="#" class="social-li">
                  {" "}
                  <i class="fab fa-linkedin-in"></i>
                </a>
                <a href="#" class="social-in">
                  {" "}
                  <i class="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;

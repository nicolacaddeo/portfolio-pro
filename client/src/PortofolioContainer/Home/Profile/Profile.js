import React from "react";
import Typewriter from "typewriter-effect";
import "./Profile.css";
import ScrollService from "../../../utilities/ScrollService";

export default function Profile() {
  const typeEffectData = [
    "NicolaDev",
    "JavaScript / Vue JS",
    "PHP / Laravel",
    "JAVA / OOP",
  ];

  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="https://www.linkedin.com/in/nicola-giovanni-caddeo-653314259/">
                <i className="fa fa-linkedin-square"></i>
              </a>
              <a href="https://github.com/nicolacaddeo">
                <i className="fa fa-github-square"></i>
              </a>
              <a href="https://www.instagram.com/nicolacaddeoo/">
                <i className="fa fa-instagram"></i>
              </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'm <span className="highlighted-text">Nicola</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                {" "}
                <Typewriter
                  options={{
                    loop: true,
                  }}
                  onInit={(typewriter) => {
                    for (let i = 0; i < typeEffectData.length; i++) {
                      typewriter
                        .typeString(typeEffectData[i])
                        .pauseFor(900)
                        .deleteChars(typeEffectData[i].length)
                        .start();
                    }
                  }}
                />
              </h1>
              <span className="profile-role-tagline">
                Jr. Full Stack Web Developer
              </span>
            </span>
          </div>
          <div className="profile-options">
            <button
              className="btn primary-btn"
              onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
            >
              {" "}
              Assumimi
            </button>
            <a
              href="nicola_giovanni_caddeo_cv.pdf"
              download="Nicola Giovanni Caddeo cv.pdf"
            >
              <button className="btn highlighted-btn">Scarica CV</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}

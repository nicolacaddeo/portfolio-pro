import React, { useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animation";
import "./AboutMe.css";

export default function AboutMe(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const SCREEN_CONSTSANTS = {
    description:
      "Sono un giovane Full Stack Web Developer di 23 anni appassionato al mondo della tecnologia. Dopo aver interrotto gli studi all'università, la mia passione per l'informatica e la curiosità per tutto ció che riguarda il mondo del web hanno avuto la meglio e sono felice di essere pronto a dare il mio contributo nel settore.",
    highlights: {
      bullets: [
        "Jr. Full Stack web developer",
        "Paradigma OOP",
        "Database relazionali",
        "Sistemi di versionamento",
        "Esperienza di progetti in team",
      ],
      heading: "Ecco alcuni punti di forza:",
    },
  };
  const renderHighlight = () => {
    return SCREEN_CONSTSANTS.highlights.bullets.map((value, i) => (
      <div className="highlight" key={i}>
        <div className="highlight-blob"></div>
        <span>{value}</span>
      </div>
    ));
  };

  return (
    <div
      className="about-me-container screen-container fade-in"
      id={props.id || ""}
    >
      <div className="about-me-parent">
        <ScreenHeading title={"About Me"} subHeading={"Perché scegliermi?"} />
        <div className="about-me-card">
          <div className="about-me-profile"></div>
          <div className="about-me-details">
            <span className="about-me-description">
              {SCREEN_CONSTSANTS.description}
            </span>
            <div className="about-me-highlights">
              <div className="highlights-heading">
                <span>{SCREEN_CONSTSANTS.highlights.heading}</span>
              </div>
              {renderHighlight()}
            </div>
            <div className="about-me-options">
              <button
                className="btn primary-btn"
                onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
              >
                {""}
                Assumimi{" "}
              </button>
              <a
                href="nicola_giovanni_caddeo_cv.pdf"
                download="Nicola Giovanni Caddeo cv.pdf"
              >
                <button className="btn highlighted-btn">Scarica CV</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

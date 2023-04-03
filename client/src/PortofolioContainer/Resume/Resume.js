import React, { useState } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animation";
import './Resume.css';


export default function Resume(props) {
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffSetStyle, setCarousalOffSetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

    const ResumeHeading = (props) => {
      return (
        <div className="resume-heading">
          <div className="resume-main-heading">
            <div className="heading-bullet"></div>
            <span>{props.heading ? props.heading : ""}</span>
            {props.fromDate && props.toDate ? (
              <div className="heading-date">
                {props.fromDate + "-" + props.toDate}
              </div>
            ) : (
              <div></div>
            )}
          </div>
          <div className="resume-sub-heading">
            <span>{props.subHeading ? props.subHeading : ""}</span>
          </div>
          <div className="resume-heading-description">
            <span>{props.description ? props.description : ""}</span>
          </div>
        </div>
      );
    };

  const resumeBullets = [
    { label: "Formazione", logoSrc: "education.svg" },
    { label: "Carriera", logoSrc: "work-history.svg" },
    { label: "Competenze", logoSrc: "programming-skills.svg" },
    { label: "Progetti", logoSrc: "projects.svg" },
    { label: "Interessi", logoSrc: "interests.svg" },
  ];

  const programmingSkillsDetails = [
    { skill: "HTML", ratingPercentage: 70 },
    { skill: "CSS", ratingPercentage: 70 },
    { skill: "Bootstrap", ratingPercentage: 65 },
    { skill: "JavaScript", ratingPercentage: 60 },
    { skill: "Vue JS", ratingPercentage: 60 },
    { skill: "PhP", ratingPercentage: 65 },
    { skill: "Laravel", ratingPercentage: 70 },
    { skill: "MySQL", ratingPercentage: 80 },
    { skill: "Java", ratingPercentage: 60 },
  ];

  const projectDetails = [
    {
      title: "Sito Web Portfolio Personale",
      duration: { fromDate: "2023", toDate: "2023" },
      description:
        "Un portfolio personale per mostarare tutti i miei dettagli e progetti",
      subHeading: "Tecnologie utilizzate: React JS, Node JS",
    },
    {
      title: "IceTime",
      duration: { fromDate: "2023", toDate: "2023" },
      description:
        "Una Web App per la gestione del tempo con un sistema di login utente e la possibilitá di creare eventi e liste di ToDos",
      subHeading:
        "Tecnologie utilizzate: Spring Boot, Spring Data JPA, Spring Security, MySQL, Bootstrap",
    },
    {
      title: "BoolBnB",
      duration: { fromDate: "2022", toDate: "2022" },
      description:
        "Una replica stile AirBnB per la prenotazione online di B&B con funzioni di login utente/admin, geolocalizzazione e simulazione di pagamento",
      subHeading: "Tecnologie utilizzate: Vue JS, Bootstrap, Laravel, MySQL",
    },
  ];

  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"QiBit Italy | Accademy Java"}
        subHeading={
          "Accademy Java di 6 settimane incentrata su Java, MySQL e JDBC con realizzazione di progetto finale"
        }
        fromDate={"2023"}
        toDate={"2023"}
      />
      <ResumeHeading
        heading={"Boolean Careers Master Full Stack Developer"}
        subHeading={
          "Sei mesi di corso nel quale ho appreso linguaggi come HTML5, CSS, JavaScript, PHP, SQL. Inoltre ho apreso l'utilizzo di framework come Laravel e Vue JS"
        }
        fromDate={"2022"}
        toDate={"2022"}
      />
      <ResumeHeading
        heading={"Liceo Scientifico G.Marconi"}
        subHeading={"Maturitá Scientifica"}
        fromDate={"2013"}
        toDate={"2019"}
      />
    </div>,
    <div className="resume-screen-container single-experience" key="work-experience">
      <ResumeHeading
        heading={"Boolean Careers"}
        subHeading={"Jr. Full Stack Web Developer Trainee"}
        fromDate={"2022"}
        toDate={"2022"}
      />
      <div className="experience-description">
        <span className="resume-description-text">
          Corso intensivo full-time su tecnologie Front End e Back End
        </span>
      </div>
      <div className="experience-description">
        <span className="resume-description-text">
          - Svolgimento di esercizi pomeridiani a difficoltà crescente nei quali
          replicare proggetti reali e abituarsi al mindset dello sviluppatore
        </span>
        <br />
        <span className="resume-description-text">
          - Progetto finale in team nel quale è stata replicata una web app per
          la prenotazione di B&B online
        </span>
      </div>
      </div>,
      
      <div
        className="resume-screen-container programming-skills-container"
        key="programming-skills"
      >
        {programmingSkillsDetails.map((skill, index) => (
          <div className="skill-parent" key={index}>
            <div className="heading-bullet"></div>
            <span>{skill.skill}</span>
            <div className="skill-percentage">
              <div
                style={{ width: skill.ratingPercentage + "%" }}
                className="active-percentage"
              ></div>
            </div>
          </div>
        ))}
      </div>
      ,
      <div className="resume-screen-container" key="projects">
        {projectDetails.map((projectDetails, index) => (
          <ResumeHeading
            key={index}
            heading={projectDetails.title}
            subHeading={projectDetails.subHeading}
            description={projectDetails.description}
            fromDate={projectDetails.duration.fromDate}
            toDate={projectDetails.duration.toDate}
          />
        ))}
      </div>
      ,
      <div className="resume-screen-container" key="interests">
        <ResumeHeading
          heading="Musica"
          description='Non solo ne ascolto parecchia ma dal 2007 faccio parte della banda locale "G. Puccini" dove suono il trombone'
        />
        <ResumeHeading
          heading="Libri"
          description="Interesse che ormai mi accompagna da diversi anni, qualsiasi libro che mi faccia scoprire qualcosa di nuovo o ragionare su alcuni temi fa al caso mio"
        />
        <ResumeHeading
          heading="Videogiochi"
          description="Passione che mi accompagna fin da piccolo, per divertirmi o per giocare qualcosa di competitivo tra amici"
        />
      </div>,
    
  ];

  const handleCarousal = (index)=>{
    let offsetHeight = 360;
    let newCarousalOffset = {
      style: {transform: "translateY("+ index * offsetHeight * -1 + "px)"}
    };
    setCarousalOffSetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = ()=>{
    return resumeBullets.map((bullet, index)=>(
      <div
        onClick={()=>handleCarousal(index)}
        className={index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"}
        key={index}
      >
        <img className="bullet-logo" 
          src={require(`../../assets/Resume/${bullet.logoSrc}`)}
          alt="no internet connection"
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ))
  }
 
  const getResumeScreen =()=>{
    return(
      <div
      style={carousalOffSetStyle.style}
      className="resume-details-carousal"
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    )
  }

  return (
    <div
      className="resume-container screen-container"
      id={props.id || ""}
    >
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"I miei dettagli"} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>

          <div className="resume-bullet-details">{getResumeScreen()}</div>
        </div>
      </div>
    </div>
  );
}

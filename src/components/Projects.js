import React from "react";
import "../styles/Projects.css";
import FolderOpenRoundedIcon from "@material-ui/icons/FolderOpenRounded";
import GitHubIcon from "@material-ui/icons/GitHub";
import OpenInBrowserIcon from "@material-ui/icons/OpenInBrowser";
import FadeInSection from "./FadeInSection";

class Projects extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: true,
      activeKey: "1"
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(eventKey) {
    this.setState({
      activeKey: eventKey
    });
  }
  render() {
    const projects = {
      "TDSB Homework Management Interface": {
        desc:
          "An application created for Toronto District School Board, with a Flask back-end and a Vue front-end.",
        techStack: "Python (Flask), Vue.js, Bootstrap, SQL",
        link: "https://github.com/gazijarin/TDSBHomeworkManagement",
        open: "https://tdsb-app.herokuapp.com/"
      },
      "Adam A.I.": {
        desc:
          "A self-learning A.I. that learns to traverse through a complex maze using the genetic algorithm.",
        techStack: "Javascript, HTML / CSS",
        link: "https://github.com/gazijarin/adamai",
        open: "https://gazijarin.github.io/AdamAI/"
      },
      Truth: {
        desc:
          "A three.js simulation of the planet system revolving around a monolith.",
        techStack: "Three.js",
        link: "https://github.com/gazijarin/truth",
        open: "https://gazijarin.github.io/Truth/"
      },
      "Odin Bot": {
        desc:
          "A Telegram bot that helps you excel on your daily tasks through Node NLP.",
        techStack: "Javascript, Node.js, Natural NLP, Telegram API",
        link: "https://github.com/gazijarin/OdinBot",
        open: ""
      },
      "Game Centre": {
        desc:
          "An Android app consisting of three board games, including multiplayer, autosave, user authentication, etc.",
        techStack: "Java, Android Studio",
        link: "https://github.com/gazijarin/gamecentre",
        open: ""
      },
      "Minimax Stonehenge": {
        desc:
          "Two-player, zero-sum game with a strategic Minimax artificial intelligence.",
        techStack: "Python",
        link: "https://github.com/gazijarin/stonehenge",
        open: ""
      }
    };

    return (
      <div id="projects">
        <div className="section-header ">
          <span className="section-title">/ software-creations</span>
        </div>

        <div className="project-container">
          <ul className="projects-grid">
            {Object.keys(projects).map((key, i) => (
              <FadeInSection delay={`${i + 1}00ms`}>
                <li className="projects-card">
                  <div className="card-header">
                    <div className="folder-icon">
                      <FolderOpenRoundedIcon
                        style={{ fontSize: 35 }}
                      ></FolderOpenRoundedIcon>
                    </div>
                    <span className="external-links">
                      <a className="github-icon" href={projects[key]["link"]}>
                        <GitHubIcon
                          style={{
                            fontSize: 20,
                            color: "var(--lightest-slate)"
                          }}
                        ></GitHubIcon>
                      </a>
                      {projects[key]["open"] && (
                        <a className="open-icon" href={projects[key]["open"]}>
                          <OpenInBrowserIcon
                            style={{
                              fontSize: 25,
                              color: "var(--lightest-slate)"
                            }}
                          ></OpenInBrowserIcon>
                        </a>
                      )}
                    </span>
                  </div>

                  <div className="card-title">{key}</div>
                  <div className="card-desc">{projects[key]["desc"]}</div>
                  <div className="card-tech">{projects[key]["techStack"]}</div>
                </li>
              </FadeInSection>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Projects;

import React from "react";

import "../styles/Intro.css";
import Typist from "react-typist";
import "react-typist/dist/Typist.css";
import EmailRoundedIcon from "@material-ui/icons/EmailRounded";
import FadeInSection from "./FadeInSection";
import ParticlePortrait from "./ParticlePortrait";

class Intro extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: true,
      activeKey: "1",
      visible: true,
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(eventKey) {
    this.setState({
      activeKey: eventKey,
    });
  }
  render() {
    return (
      <div id="intro">
        <div className="intro-simulation">
          <ParticlePortrait />
        </div>
        <div className="intro-block">
          <Typist avgTypingDelay={120}>
            <span className="intro-title">
              {"hi, "}
              <span className="intro-name">{"gazi"}</span>
              {" here."}
            </span>
          </Typist>
          <FadeInSection>
            <div className="intro-desc">
              I'm a software engineer and artist based in New York City. I'm
              fascinated by large-scale, high-impact products and contributed to
              major feature launches in industry-leading services as well as
              apps that have 100M+ installs.
            </div>
            <a href="mailto:gazijarin@gmail.com" className="intro-contact">
              <EmailRoundedIcon></EmailRoundedIcon>
              {" Say hi!"}
            </a>
          </FadeInSection>
        </div>
      </div>
    );
  }
}

export default Intro;

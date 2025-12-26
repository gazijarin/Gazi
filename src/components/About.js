import React from "react";
import "../styles/About.css";
import FadeInSection from "./FadeInSection";

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: true,
      activeKey: "1",
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(eventKey) {
    this.setState({
      activeKey: eventKey,
    });
  }
  render() {
    const one = (
      <p>
        I am currently a <b>Software Engineer</b> at
        <a href="https://www.ads.google.com/"> Google</a>, where I help build
        autobidder models that make Google Search money. Previously, I was at
        <a href="https://www.aboutamazon.com/"> Amazon</a> and{" "}
        <a href="https://newsroom.pinterest.com/company/"> Pinterest.</a> At the
        same time, I am undertaking a part-time <b> Master's of Science</b> in{" "}
        <b>Software Engineering </b>at{" "}
        <a href="https://www.ox.ac.uk/about">University of Oxford</a>.
      </p>
    );
    const two = (
      <p>
        Outside of work, I’m nerdy about tech gadgets, love literary fiction,
        and play way too many battle royale games. Oh, I make content too.
      </p>
    );

    const tech_stack = [
      "Python",
      "Typescript",
      "React.js",
      "Java",
      "Javascript ES6+",
      "C#",
    ];

    return (
      <div id="about">
        <FadeInSection>
          <div className="section-header ">
            <span className="section-title">/ about me</span>
          </div>
          <div className="about-content">
            <div className="about-description">
              {[one]}
              {"Here are some technologies I have been working with:"}
              <ul className="tech-stack">
                {tech_stack.map(function (tech_item, i) {
                  return (
                    <FadeInSection delay={`${i + 1}00ms`}>
                      <li>{tech_item}</li>
                    </FadeInSection>
                  );
                })}
              </ul>
              {[two]}
            </div>
            <div className="about-image">
              <img alt="Gazi Jarin" src={"/assets/me2.jpg"} />
            </div>
          </div>
        </FadeInSection>
      </div>
    );
  }
}

export default About;

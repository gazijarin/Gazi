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
        I am currently a <b>Senior Software Engineer - ML & Infrastructure</b>{" "}
        at <a href="https://www.lumentum.com/">Lumentum</a>, where I build
        production ML systems and LLM-powered agentic pipelines for optical
        hardware. I hold a <b>Master's of Science in Computer Engineering</b>{" "}
        from{" "}
        <a href="https://www.mcmaster.ca/">McMaster University</a> (GPA: 4.0),
        and have published at OFC 2025 and ICSOS 2025.
      </p>
    );
    const two = (
      <p>
        Outside of work, I enjoy competitive programming, exploring new
        hardware, and following developments in AI and systems research.
      </p>
    );

    const tech_stack = [
      "Python",
      "C# / .NET",
      "PyTorch",
      "C++ / CUDA",
      "React.js",
      "TypeScript",
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
              <img alt="Hamed Akhlaghi" src={"/assets/me2.jpg"} />
            </div>
          </div>
        </FadeInSection>
      </div>
    );
  }
}

export default About;

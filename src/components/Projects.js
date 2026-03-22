import React from "react";
import "../styles/Projects.css";
import FolderOpenRoundedIcon from "@material-ui/icons/FolderOpenRounded";
import FadeInSection from "./FadeInSection";
import ExternalLinks from "./ExternalLinks";

class Projects extends React.Component {
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
    const projects = {
      "GPU-Accelerated Multilayer Turbulence Simulation": {
        desc:
          "Simulation framework for modeling free-space optical systems using GPU parallelism, achieving 650× speedup over CPU baselines.",
        techStack: "CUDA, TensorFlow, Python",
        link: "https://github.com/Markeloen",
        open: "",
        venue: "ICSOS 2025 · Kyoto, Japan",
      },
      "Fast Single Pixel Modal Wavefront Sensing": {
        desc:
          "Novel wavefront sensing approach for adaptive optics using single-pixel detection with modal decomposition.",
        techStack: "Python, PyTorch, Optics",
        link: "https://arxiv.org/",
        open: "",
        venue: "arXiv Preprint",
      },
      "LLM-Powered Hardware Analysis Agent": {
        desc:
          "Agentic pipeline that reasons over hardware test reports, invokes calibration APIs, and routes anomalies — reducing manual triage time by 3×.",
        techStack: "GPT-4, Claude, RAG, Python, Azure",
        link: "https://github.com/Markeloen",
        open: "",
        venue: "Production · Lumentum",
      },
      "MEMS Mirror VAE Calibration": {
        desc:
          "Variational Autoencoder with physics-informed loss functions for real-time on-device MEMS mirror calibration, optimizing inference latency by 40%.",
        techStack: "PyTorch, C#/.NET, ONNX",
        link: "https://github.com/Markeloen",
        open: "",
        venue: "Production · Lumentum",
      },
      "Atmospheric Phase Screen GAN": {
        desc:
          "Physics-informed GAN for generating realistic atmospheric phase screens used in adaptive optics simulation and research.",
        techStack: "PyTorch, Python, CUDA",
        link: "https://github.com/Markeloen",
        open: "",
        venue: "McMaster University · NRC",
      },
      "Optical Hardware Test Platform": {
        desc:
          "Full-stack data platform for parsing, visualizing, and trending hardware test data across product lines, adopted by 20+ engineers.",
        techStack: "React, Node.js, C#/.NET, Azure",
        link: "https://github.com/Markeloen",
        open: "",
        venue: "Production · Lumentum",
      },
    };

    return (
      <div id="projects">
        <div className="section-header ">
          <span className="section-title">/ projects & publications</span>
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
                    <ExternalLinks
                      githubLink={projects[key]["link"]}
                      openLink={projects[key]["open"]}
                    ></ExternalLinks>
                  </div>
                  <div className="card-title">{key}</div>
                  <div className="card-desc">{projects[key]["desc"]}</div>
                  <div className="card-tech">{projects[key]["techStack"]}</div>
                  <div className="card-tech" style={{ marginTop: "8px", opacity: 0.6 }}>{projects[key]["venue"]}</div>
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

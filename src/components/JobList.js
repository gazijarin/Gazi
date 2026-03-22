import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import FadeInSection from "./FadeInSection";

const isHorizontal = window.innerWidth < 600;

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  if (isHorizontal) {
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  } else {
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  if (isHorizontal) {
    return {
      id: `full-width-tab-${index}`,
      "aria-controls": `full-width-tabpanel-${index}`,
    };
  } else {
    return {
      id: `vertical-tab-${index}`,
    };
  }
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "theme.palette.background.paper",
    display: "flex",
    height: 300,
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
}));

const JobList = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const experienceItems = {
    Lumentum: {
      jobTitle: “Senior Software Engineer - ML & Infrastructure @”,
      duration: “JAN 2024 - PRESENT”,
      desc: [
        “Designed and deployed a Variational Autoencoder (VAE) in PyTorch for real-time MEMS mirror calibration with physics-informed loss functions, optimizing inference latency by 40% for on-device deployment.”,
        “Architected an LLM-powered agentic pipeline that reasons over hardware test reports, plans multi-step analysis workflows, and invokes external tools to classify, summarize, and route anomalies - reducing manual triage time by 3x.”,
        “Built RAG infrastructure with vector embeddings and frontier models (GPT-4, Claude) enabling context-aware reasoning over 10,000+ historical test documents.”,
        “Led end-to-end development of manufacturing test applications in C#/.NET with Azure Functions for cloud-scale orchestration, real-time anomaly detection, and automated reporting.”,
        “Developed a full-stack data platform (React, Node.js) to parse, visualize, and trend hardware test data, adopted by 20+ engineers for daily decision-making.”,
      ],
    },
    NRC: {
      jobTitle: “Machine Learning Researcher @”,
      duration: “SEPT 2022 - DEC 2023”,
      desc: [
        “Developed Physics-informed Neural Networks to synthesize realistic atmospheric phase screens, framing wavefront generation as a neural rendering problem for adaptive optics research.”,
        “Designed deep CNN classifiers (LeNet, ResNet) for turbulence pattern recognition achieving 92% accuracy, paired with GAN-based generative synthesis to produce diverse, physically plausible training data.”,
        “Built a GPU-accelerated simulation architecture using CUDA and TensorFlow, achieving a 650x speedup and enabling real-time data processing at scale.”,
      ],
    },
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation={!isHorizontal ? "vertical" : null}
        variant={isHorizontal ? "fullWidth" : "scrollable"}
        value={value}
        onChange={handleChange}
        className={classes.tabs}
      >
        {Object.keys(experienceItems).map((key, i) => (
          <Tab label={isHorizontal ? `0${i}.` : key} {...a11yProps(i)} />
        ))}
      </Tabs>
      {Object.keys(experienceItems).map((key, i) => (
        <TabPanel value={value} index={i}>
          <span className="joblist-job-title">
            {experienceItems[key]["jobTitle"] + " "}
          </span>
          <span className="joblist-job-company">{key}</span>
          <div className="joblist-duration">
            {experienceItems[key]["duration"]}
          </div>
          <ul className="job-description">
            {experienceItems[key]["desc"].map(function (descItem, i) {
              return (
                <FadeInSection delay={`${i + 1}00ms`}>
                  <li key={i}>{descItem}</li>
                </FadeInSection>
              );
            })}
          </ul>
        </TabPanel>
      ))}
    </div>
  );
};

export default JobList;

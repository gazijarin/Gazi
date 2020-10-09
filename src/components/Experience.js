import React, { useState } from 'react';
import { Steps, Panel, ButtonGroup,Button } from 'rsuite';

import "../css/Experience.css";

const Experience = () => {
    const experienceObj = {
        0: {
            "title": "Wattpad",
            "position": "Associate Engineer",
            "description": "i did this"
        },
        1: {
            "title": "Centivizer",
            "position": "Backend Developer",
            "description": "i did this"
        },
        2: {
            "title": "Orange Gate",
            "position": "Software Developer",
            "description": "i did this"
        }
    }
    const [step, setStep] = React.useState(0);
    const onChange = nextStep => {
      setStep(nextStep < 0 ? 2 : nextStep > 2 ? 0 : nextStep);
    };
  
    const onNext = () => onChange(step + 1);
    const onPrevious = () => onChange(step - 1);
  
    return (
      <div>
        <Steps current={step}>
          <Steps.Item title={"Wattpad"} description="May '20 - May '21" />
          <Steps.Item title="Centivizer" description="Sept '19 - Apr '20" />
          <Steps.Item title="Orange Gate" description="May '19 - Aug '19" />
        </Steps>
        <hr />
        <Panel header={experienceObj[step].position}>
            <h1>{experienceObj[step].description}</h1>
        </Panel>
        <hr />
            <button className="next-btn" onClick={onPrevious}> ←  </button>
            <button className="prev-btn" onClick={onNext}> → </button>
      </div>
    );
  };
  

export default Experience;
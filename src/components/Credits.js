import React from "react";
import "../styles/Credits.css";
import FadeInSection from "./FadeInSection";

class Credits extends React.Component {
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
    return (
      <FadeInSection>
        <div id="credits">
          <div className="ending-credits">
            <div>Built and designed by Gazi Jarin. </div>
            <div>All rights reserved. ©</div>
          </div>
        </div>
      </FadeInSection>
    );
  }
}

export default Credits;

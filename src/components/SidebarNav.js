import React from 'react';
import { Sidenav } from 'rsuite';
import Typist from 'react-typist';

import "../css/SidebarNav.css";
import 'react-typist/dist/Typist.css';

class SidebarNav extends React.Component {
    constructor() {
      super();
      this.state = {
        expanded: true,
        activeKey: '1'
      };
      this.handleSelect = this.handleSelect.bind(this);
    }
    handleSelect(eventKey) {
      this.setState({
        activeKey: eventKey
      });
    }
    render() {
      const { expanded } = this.state;
  
      return (
        <div style={{ width: 250 }}>
            <a className="sidebar-title" href="/">
            Gazi Jarin
            </a>
            <Typist>
            ~$ Software engineer and an artist. Currently based in Toronto.
      </Typist>
            <div className="sidebar-logos" href="/">
            <a href="mailto:gazi.jarin@mail.utoronto.ca"><img src={require("./assets/email-logo.svg")}></img></a>
            <a href="https://github.com/gazijarin"><img src={require("./assets/github-logo.svg")}></img></a>
            <a href="https://www.linkedin.com/in/gazi-jarin-3644b0172/"><img src={require("./assets/linkedin-logo.svg")} href="www.facebook.com"></img></a>
            </div>
          <Sidenav
            expanded={expanded}
            defaultOpenKeys={['3', '4']}
            activeKey={this.state.activeKey}
            onSelect={this.handleSelect}
            appearance={"subtle"}
          >
            <Sidenav.Body>
                <div className="sidebar-links">
                <a href="/">
            software creations
            </a>
            <a href="/">
            a visual portfolio
            </a>
            <a href="/">
            a curation of inspiration
            </a>
                </div>
            </Sidenav.Body>
          </Sidenav>
        </div>
      );
    }
  }
  

export default SidebarNav;
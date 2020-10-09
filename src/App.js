import React from 'react';
import SidebarNav from "./components/SidebarNav";
import Experience from "./components/Experience"
import './App.css';
import 'rsuite/dist/styles/rsuite-default.css';


function App() {
  return (
    <div className="App">
      <SidebarNav/>
      <div className="content">
      <Experience/>
      </div>
    </div>
  );
}

export default App;

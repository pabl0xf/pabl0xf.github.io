import React, { Component } from "react";
import ReactDOM from "react-dom";

class ContentJupyter extends React.Component {
  componentDidMount() {
    // Update src to iframe
    // https://localhost:8000/  | basecamp.robolink.com/cwists/category



  }


  render() {
    return (
      <div className="content-panel content-5">
        <iframe id="iframeJupyter" src="http://159.65.169.2:8888/notebooks/Untitled.ipynb"></iframe>
      </div>
    );
  }
}

export default ContentJupyter;

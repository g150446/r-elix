import React from "react";
import ReactDOM from "react-dom";
import MindElixir, { E } from "mind-elixir";

class App extends React.Component {
  componentDidMount() {
    this.ME = new MindElixir({
      el: "#map",
      direction: MindElixir.LEFT,
      data: MindElixir.new("new topic"),
      draggable: true, // default true
      contextMenu: true, // default true
      toolBar: true, // default true
      nodeMenu: true, // default true
      keypress: true // default true
    });
    this.ME.init();
    console.log("did mount");
  }
  render() {
    return <div id="map" style={{ height: "500px", width: "100%" }} />;
  }
}

ReactDOM.render(<App />, document.getElementById("container"));

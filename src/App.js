import React from "react";
import table from "./components/table";
import data from "./data/data.json";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data,
      direction: {
        usernmae: "asc",
      },
    };
    this.sortBy = this.sortBy.bind(this);
  }

  sortBy(key) {
    this.setState({
      data: data.sort(),
    });
  }

  render() {
    return (
      <div className="page-container">
        <h1>Building a table using Reactjs</h1>
        <table data={this.state.data} sortBy={this.sortBy} />
      </div>
    );
  }
}

export default App;

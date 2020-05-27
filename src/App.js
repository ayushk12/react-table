import React from "react";
import table from "./components/table/index";
import data from "./data/data.json";
import "./App.css";

export default function App() {
  return (
    <div className="page-container">
      <h1>Building a table using Reactjs</h1>
      <table data={data} />
    </div>
  );
}

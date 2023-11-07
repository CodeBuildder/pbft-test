import { useState } from "react";
import PBFT from "./Components/pbft";
import data from "./data/data";
import "./App.css";

function App() {
  return (
    <>
      <div>
        <PBFT data={data} />
      </div>
    </>
  );
}

export default App;

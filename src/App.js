import React, { useState } from "react";
import "./App.scss";
import Header from "./components/Header";
import Calculator from "./components/Calculator";
import History from "./components/History";

function App() {
  const [history, setHistory] = useState([]);
  return (
    <div className="wrapper">
      <History history={history} setHistory={setHistory} />
      <div className="container">
        <div className="App" />
        <Header />
        <Calculator setHistory={setHistory} />
      </div>
    </div>
  );
}

export default App;

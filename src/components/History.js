import React, { useState } from "react";

export default function History({ history, setHistory }) {
  return (
    <div className="history">
      <h1>History</h1>
      {history.map((item, idx) => {
        return (
          <p key={idx}>
            {item.problem}={item.solution}
          </p>
        );
      })}
      <button id="historyButton" onClick={() => setHistory([])}>
        Clear History
      </button>
    </div>
  );
}

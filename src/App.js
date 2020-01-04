import React, { useState } from 'react';
import './App.scss';
import Header from './components/Header';
import Calculator from './components/Calculator';

function App() {
	const [ history, setHistory ] = useState([]);
	return (
		<div className="wrapper">
			<div className="history">
				<h1>History</h1>

				{history.map((item) => {
					return (
						<p>
							{item.problem}={item.solution}
						</p>
					);
				})}
				<button id="historyButton" onClick={() => setHistory([])}>
					Clear History
				</button>
			</div>
			<div className="container">
				<div className="App" />
				<Header />
				<Calculator setHistory={setHistory} />
			</div>
		</div>
	);
}

export default App;

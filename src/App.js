import React from 'react';
import './App.scss';
import Header from './components/Header';
import Calculator from './components/Calculator';

function App() {
	return (
		<div className="wrapper">
			<div className="container">
				<div className="App" />
				<Header />
				<Calculator />
			</div>
		</div>
	);
}

export default App;

import React, { useState } from 'react';
import './App.scss';
import Header from './components/Header'


function App() {

	return (
		<div className="container">
			<div className="App" />
			<Header/>
			<Calculator/>
		</div>
	);
}

export default App;

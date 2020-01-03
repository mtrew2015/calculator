import React, { useState } from 'react';
import Logo from './components/DisplayComponents/Logo';
import Numbers from './components/ButtonComponents/NumberButtons/Numbers';
import Operators from './components/ButtonComponents/OperatorButtons/Operators';
import './App.scss';
import Specials from './components/ButtonComponents/SpecialButtons/Specials';
import Display from './components/DisplayComponents/Display';

function App() {
	const [ result, setResult ] = useState(0);
    const [ currentNum, setCurrentNum ] = useState(0);
    const [lastOperation, setLastOperation] = useState(null);

   
	return (
		<div className='container'>
			<Logo />
			<Display result={result} />
			<section className='body'>
				<div className='col-1'>
					<Specials setCurrentNum={setCurrentNum} currentNum={currentNum} />
					<Numbers setCurrentNum={setCurrentNum} result={result} setResult={setResult} />
				</div>
				<div className='col-2'>
					<Operators lastOperation={lastOperation} setLastOperation={setLastOperation} result={result} setResult={setResult} setCurrentNum={setCurrentNum} currentNum={currentNum} />
				</div>
			</section>
			<div className='App' />
		</div>
	);
}

export default App;

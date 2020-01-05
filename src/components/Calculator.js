import React, { useState, useEffect } from 'react';
import { numbers, operators, specials } from '../data';
import '../App.scss';
import math from '../math';

const Calculator = (props) => {
	const [ display, setDisplay ] = useState('');

	useEffect(() => {
		window.addEventListener('keydown', handlekeyDown);
		window.addEventListener('keydown', handleEquals);
		return () => {
			window.removeEventListener('keydown', handlekeyDown);
			window.removeEventListener('keydown', handleEquals);
		};
	},[handleEquals],[]);


	function handlekeyDown(e) {
		e.preventDefault();
		const current = e.key;
		const values = [ '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '+', '-', '*', '/'];
		if (values.includes(current)) {
			let value = current;
			setDisplay((prev) => prev + value);
		}
	}
	// eslint-disable-next-line
	 function handleEquals(e) {
		 console.log(e)
		const value = e.key
		if (value === 'Enter') {
			const solution = math.evaluate(display)
			const histEntry = { problem: display, solution: solution };
			props.setHistory((prev) => [ ...prev, histEntry ]);
			setDisplay(solution);
		}
		if (value === "Backspace"){
			if(display.length > 1){
				setDisplay(prev =>prev.substring(0, prev.length -1) )
			}
			
		}
	}

	function addToString(e) {
		console.log(e.target)
		let value = e.target.value;
		if (value === '=') {
			const histEntry = { problem: display, solution: math.evaluate(display) };
			props.setHistory((prev) => [ ...prev, histEntry ]);
			setDisplay(math.evaluate(display));
		} else {
			setDisplay((prev) => prev + value);
		}
	}

	const specialClick = (e) => {
		const val = e.target.value;
		if (val === 'C') {
			setDisplay('');
		} else if (val === '+/-') {
			if (display.slice(0) === '-') {
				setDisplay((prev) => prev.substr(1));
			} else {
				setDisplay((prev) => '-' + prev);
			}
		} else {
			if (val === '%') {
				setDisplay((prev) => math.evaluate(`${prev} / 100`));
			}
		}
	};

	// STEP 2 - add the imported data to state
	return (
		<div className="container">
			<div className="display">{display}</div>;
			<div className="buttonsContainer">
				<section className="col-1">
					{specials.map((special, idx) => {
						return (
							<button key={idx} onClick={specialClick} value={special} id="specials" className="button">
								{special}
							</button>
						);
					})}
					{numbers.map((num, idx) => {
						return (
							<button key={idx} onClick={addToString} value={num} className="button">
								{num}
							</button>
						);
					})}
				</section>
				<section className="col-2">
					<div>
						{operators.map((operator, idx) => {
							return (
								<button key={idx} onClick={addToString} value={operator.value} className="opButton">
									{operator.char}
								</button>
							);
						})}
					</div>
				</section>
			</div>
		</div>
	);
};

export default Calculator;

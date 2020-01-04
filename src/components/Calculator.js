import React, { useState } from 'react';
import { numbers } from '../data';


const Calculator = (props) => {
	const [ nums ] = useState(numbers);
	const { setResult, currentNum, setCurrentNum } = props;

	const handleClick = (e) => {
		const operator = e.target.value;
		switch (operator) {
			case '+':
				add(currentNum, result, setResult);
				setLastOperation('+');
				break;
			case '-':
				subtract(currentNum, result, setResult);
				setLastOperation('-');
				break;
			case '*':
				multiply(currentNum, result, setResult);
				setLastOperation('*');
				break;
			case '/':
				divide(currentNum, result, setResult);
				setLastOperation('/');
				break;
			case '=':
				equals(setResult, lastOperation);
				break;
			default:
				console.log('something went wrong');
		}
	};

	function add(currentNum, result, setResult) {}
	function subtract(currentNum, result, setResult) {
		setResult(math.subtract(result, currentNum));
		console.log(result);
	}
	function multiply(currentNum, result, setResult) {
		setResult(math.multiply(result, currentNum));
		console.log(result);
	}
	function divide(currentNum, result, setResult) {
		setResult(math.divide(result, currentNum));
		console.log(result);
	}
	function equals(setResult, lastOperation) {
		setResult(math.eval(`${result} ${lastOperation} ${currentNum}`));
		console.log(result);
	}

	const handleClick = (e) => {
		setCurrentNum((prevState) => {
			return prevState + e.target.value;
		});
	};
	// STEP 2 - add the imported data to state
	return (
		<React.Fragment>
			<div className="display">0</div>;
			<div>
				{nums.map((num, idx) => {
					return (
						<button onClick={handleClick} value={num} className="number-button">
							{num}
						</button>
					);
				})}
			</div>
			<div>
				{commands.map((command, idx) => {
					return (
						<button onClick={handleClick} value={value} className="special-button">
							{command}
						</button>
					);
				})}
				<div>
					{ops.map((operator, idx) => {
						return (
							<button onClick={handleClick} value={value} className="operator-button">
								{operator}
							</button>
						);
					})}
				</div>
			</div>
		</React.Fragment>
	);
};

export default Caclculator;

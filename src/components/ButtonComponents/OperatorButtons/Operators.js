import React, { useState } from 'react';
import { operators } from '../../../data';
import OperatorButton from './OperatorButton';
import math from '../../math';

//import any components needed

//Import your array data to from the provided data file

const Operators = (props) => {
    const { setResult, result, currentNum, setCurrentNum, lastOperation, setLastOperation } = props;
    console.log(lastOperation, 'last op')
	const [ ops ] = useState(operators);
	const handleClick = (e) => {
		const operator = e.target.value
		switch (operator) {
			case '+':
                add(currentNum ,result,setResult);
                setLastOperation("+")
				break;
			case '-':
                subtract(currentNum , result, setResult);
                setLastOperation("-")
				break;
			case '*':
                multiply(currentNum , result, setResult);
                setLastOperation("*")
				break;
			case '/':
                divide( currentNum , result, setResult);
                setLastOperation("/")
                break;
            case '=':
                equals(setResult, lastOperation);
                break;             
            default:
				console.log('something went wrong');
		}
	};

	function add(currentNum, result, setResult) {
     
    }
	function subtract(currentNum, result, setResult) {
        setResult(math.subtract(result, currentNum))
        console.log(result)
    }
	function multiply(currentNum, result, setResult) {
        setResult(math.multiply(result,currentNum))
        console.log(result)
    }
	function divide(currentNum, result, setResult) {
        setResult(math.divide(result,currentNum))
        console.log(result)
    }
    function equals( setResult, lastOperation){
        setResult(math.eval(`${result} ${lastOperation} ${currentNum}`))
        console.log(result)

    }
	// STEP 2 - add the imported data to state
	return (
		<React.Fragment>
			{ops.map((operator, idx) => {
				return <OperatorButton value={operator.value} operator={operator.char} handleClick={handleClick} key={idx} />;
			})}
		</React.Fragment>
	);
};

export default Operators;

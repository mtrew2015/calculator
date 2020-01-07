import React, { useState, useEffect } from 'react';
import { specials, operators, numbers } from '../../data';
import math from '../math';
import './Calculator.scss';

function Calculator() {
    const [ display, setDisplay ] = useState('');
    
  
    // eslint-disable-next-line
    const handleKeyDown =(e) => {
        e.preventDefault();
        console.log(e)
        const key = e.key;
        const values = [ '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '+', '-', '*', '/','.', 'Enter', 'Backspace', "C", 'c'];
        if(values.includes(key)){
            if (key === "Enter"){
                const solution = math.evaluate(display)
                console.log(display, 'display line 24')
                setDisplay(solution)
            } else if(key === "Backspace"){
                setDisplay(prevState => prevState.substring(0,prevState.length -1))
            }  else if (key.toLowerCase() === 'c'){
                setDisplay("")
            }  else {
                setDisplay((prevState => prevState + key))
            }
        }
    }

      useEffect(() => {
        window.addEventListener('keydown', handleKeyDown)
        return () => {
           window.removeEventListener('keydown', handleKeyDown)
        };
    }, [display])

	const addToMathString = (e) => {
		console.log(e.target);
		let value = e.target.value;
		if (value === '=') {
			setDisplay(math.evaluate(display));
		} else {
			setDisplay((prevState) => prevState + value);
		}
	};

	const specialClick = (e) => {
		let value = e.target.value;
		console.log(value);
		switch (value) {
			case 'C': {
				setDisplay('');
				break;
			}
			case '+/-': {
				setDisplay((prevState) => math.evaluate(`${prevState} * -1`));
				break;
			}
			case '%': {
				setDisplay((prevState) => math.evaluate(`${prevState} / 100`));
				break;
			}
			default: {
				console.log('something went wrong');
				break;
			}
		}
	};

	console.log(math.evaluate('1+2*2'), 'math js');
	return (
		<div className='container'>
			<div className='display'>{display}</div>
			<div className='buttonsContainer'>
				<section className='col-1'>
					{specials.map((special, idx) => {
						return (
							<button onClick={specialClick} key={idx} value={special} className='button' id='specials'>
								{special}
							</button>
						);
					})}
					{numbers.map((num, idx) => {
						return (
							<button onClick={(e) => addToMathString(e)} key={idx} value={num} className='button'>
								{num}
							</button>
						);
					})}
				</section>
				<section className='col-2'>
					{operators.map((operator, idx) => {
						return (
							<button key={idx} onClick={addToMathString} value={operator.value} className='opButton'>
								{operator.char}
							</button>
						);
					})}
				</section>
			</div>
		</div>
	);
}
export default Calculator;

import React, {useState} from "react";
import {numbers} from '../data';
import NumberButton from './NumberButton';


const Numbers = (props) => {
    const [nums] = useState(numbers)
    const {setResult, currentNum, setCurrentNum} = props;

    const handleClick=(e) => {
        setCurrentNum((prevState) => {
            return prevState + e.target.value;
        })
    }
  // STEP 2 - add the imported data to state
  return (
    <React.Fragment>
        {nums.map((num, idx) => {
            return   <button onClick={handleClick} value={num} className="number-button">{num}</button>
        })}

        {/* Moving this component here to avoid additional abstraction  */}
      
    </React.Fragment>
  );
};

export default Numbers;


/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/

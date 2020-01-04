import React, {useState} from "react";
import {specials} from '../data';
import SpecialButton from './SpecialButton';


const Specials = () => {
  const [commands] = useState(specials)

  const handleClick=(e) => {
    console.log(e.target.value, 'clicked a special operator')
  }

  return (
    <>
      {commands.map((command, idx) => {
          return <button onClick={handleClick} value={value} className="special-button">{command}</button>
      })}
    </>
  );
};


export default Specials;
import React, {useState} from "react";
import {specials} from '../../../data';
import SpecialButton from './SpecialButton';


const Specials = () => {
  const [commands] = useState(specials)

  return (
    <>
      {commands.map((command, idx) => {
          return <SpecialButton key={idx} command={command}/>
      })}
    </>
  );
};


export default Specials;
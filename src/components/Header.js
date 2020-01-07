import React from "react";

import logo from '../Img/Lambda_Logo_white.png';

const Header = () => {
  return (
     <div className="logo-container">
      <img className="logo" src={logo} alt="Lambda's logo" />
    </div>
    
  );
};

export default Header;

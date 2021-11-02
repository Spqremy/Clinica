import React from "react";
import "./Navigation.css";
//images
import Logo from "../../assets/logo.png";
//components
import Search from "../Input/Search";



const Navigationn = (props) => {
  return (
    <div className="navigation">
      <div className="navigation__logo">
        <img src={Logo} alt="Not Found" className="navigation__image" />
      </div>
      <div className="navigation__search">
        <Search/>
      </div>
    </div>
  );
};

export default Navigationn;

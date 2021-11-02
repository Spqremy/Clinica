import React from "react";
import "./Search.css"
//COMPONENTS
import Input from "./Input/Input";
import Button from "../Button/Button";
//Icons


const Search = (props) => {
  return (
    <div className="search">
      <Input className="search__input" placeHolder="Cautare" />
      <Button text="salut" className="search__button">
      </Button>
    </div>
  );
};

export default Search;

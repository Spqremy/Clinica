import React from "react";
import "./Companies.css";
import Sidebar from "../../components/SideBar/Sidebar";

const Companies = () => {
  return (
    <div className="companies">
      <Sidebar className="companies__sidebar"/>
      <div className="companies__content"></div>
    </div>
  );
};

export default Companies;

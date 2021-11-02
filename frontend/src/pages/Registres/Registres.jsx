import React from "react";
import "./Registres.css";
import Sidebar from "../../components/SideBar/Sidebar";

const Registres = () => {
  return (
    <div className="registres">
      <Sidebar className="registres__sidebar" />
      <div className="registres__content"></div>
    </div>
  );
};

export default Registres;

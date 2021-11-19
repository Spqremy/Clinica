import React from "react";
import "./Home.css"
//components
import Sidebar from "../../components/SideBar/Sidebar";


const Home = () => {
  return (
    <div className="home">
      <Sidebar className="home__sidebar"/>
      <div className="home__content"></div>
    </div>
  );
};

export default Home;

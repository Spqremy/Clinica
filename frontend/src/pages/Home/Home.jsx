import React from "react";
import "./Home.css"
//components
import Sidebar from "../../components/SideBar/Sidebar";
import Container from "../../components/Tabel/Container/Container";


const Home = () => {
  return (
    <div className="home">
      <Sidebar className="home__sidebar"/>
      <div className="home__content">
        <Container/>
      </div>
    </div>
  );
};

export default Home;

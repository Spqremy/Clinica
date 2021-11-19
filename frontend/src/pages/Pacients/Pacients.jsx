import React from 'react'
import "./Pacients.css"
import Sidebar from "../../components/SideBar/Sidebar";


const Pacients = () => {
    return (
        <div className="pacients">
        <Sidebar className="pacients__sidebar"/>
        <div className="pacients__content"></div>
      </div>
    )
}

export default Pacients

import React from "react";
import "./Users.css"
import Sidebar from "../../components/SideBar/Sidebar";

const Users = () => {
  return (
    <div className="users">
      <Sidebar className="users__sidebar" />
      <div className="users__content"></div>
    </div>
  );
};

export default Users;

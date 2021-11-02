import React from "react";
import "./SideBar.css";
//modules
import { NavLink } from "react-router-dom";
import Button from "../Button/Button";

const Sidebar = (props) => {
  return (
    <div className={props.className}>
      <div className="sidebar__line">
        <Button text="Adauga clienti" className="sidebar__button" />
      </div>
      <div class="sidebar__menu">Meniu</div>
      <ul className="sidebar__pages">
        <li className="sidebar__page">
          <NavLink
            exact
            to="/"
            className="sidebar__page-button"
            activeClassName="sidebar__active-btn"
          >
            Administrare
          </NavLink>
        </li>
        <li className="sidebar__page">
          <NavLink
            to="/utilizatori"
            className="sidebar__page-button"
            activeClassName="sidebar__active-btn"
          >
            Utilizatori
          </NavLink>
        </li>
        <li className="sidebar__page">
          <NavLink
            to="/pacienti"
            className="sidebar__page-button"
            activeClassName="sidebar__active-btn"
          >
            Pacienti
          </NavLink>
        </li>
        <li className="sidebar__page">
          <NavLink
            to="/companii"
            className="sidebar__page-button"
            activeClassName="sidebar__active-btn"
          >
            Companii
          </NavLink>
        </li>
        <li className="sidebar__page">
          <NavLink
            to="/registre"
            className="sidebar__page-button"
            activeClassName="sidebar__active-btn"
          >
            Registre
          </NavLink>
        </li>
      </ul>
      <div class="sidebar__account">Cont</div>
      <ul className="sidebar__pagesdown">
        <li className="sidebar__pagedown">
          <NavLink
            exact
            to="/log-out"
            className="sidebar__page-button"
            activeClassName="sidebar__active-btn"
          >
            Delogheaza-te
          </NavLink>
        </li>
        <li className="sidebar__page">
          <NavLink
            to="/language"
            className="sidebar__page-button"
            activeClassName="sidebar__active-btn"
          >
            Limba
          </NavLink>
        </li>
      </ul>
      <div className="sidebar__thenicalsupport">
        <Button text="Suport Tehnic" className="sidebar__tehnical" />
      </div>
    </div>
  );
};

export default Sidebar;

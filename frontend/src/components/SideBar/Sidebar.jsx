import React from "react";
import "./SideBar.css";
import { useState } from "react";
import { useHistory } from "react-router-dom";

//modules
import Modal from "react-modal";
import { NavLink } from "react-router-dom";
import Button from "../Button/Button";
import AddPacient from "../../pages/AddPacient";

const Sidebar = (props) => {
  const [modalIsOpen, setmodelaIsOpen] = useState(false);
  const logout = () => {
    localStorage.removeItem("token");

    // history.push("/Login");
    window.location.href = "/";
  };
  return (
    <div className={props.className}>
      <div className="sidebar__line">
        <Button
          text="Adauga clienti"
          className="sidebar__button"
          onClick={() => setmodelaIsOpen(true)}
        />
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={() => setmodelaIsOpen(false)}
          className="patient__modal-video"
          aria-labelledby="contained-modal-title-vcenter">
          <div className="patient__container">
            <div className="patient__inner-modal">
              <button
                onClick={() => setmodelaIsOpen(false)}
                className="patient__button-modal">
                X
              </button>
            </div>
            <AddPacient />
          </div>
        </Modal>
      </div>
      <div class="sidebar__menu">Meniu</div>
      <ul className="sidebar__pages">
        <li className="sidebar__page">
          <NavLink
            exact
            to="/"
            className="sidebar__page-button"
            activeClassName="sidebar__active-btn">
            Administrare
          </NavLink>
        </li>
        <li className="sidebar__page">
          <NavLink
            to="/utilizatori"
            className="sidebar__page-button"
            activeClassName="sidebar__active-btn">
            Utilizatori
          </NavLink>
        </li>
        <li className="sidebar__page">
          <NavLink
            to="/pacienti"
            className="sidebar__page-button"
            activeClassName="sidebar__active-btn">
            Pacienti
          </NavLink>
        </li>
        <li className="sidebar__page">
          <NavLink
            to="/companii"
            className="sidebar__page-button"
            activeClassName="sidebar__active-btn">
            Companii
          </NavLink>
        </li>
        <li className="sidebar__page">
          <NavLink
            to="/registre"
            className="sidebar__page-button"
            activeClassName="sidebar__active-btn">
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
            onClick={logout}>
            Delogheaza-te
          </NavLink>
        </li>
        <li className="sidebar__page">
          <NavLink
            to="/language"
            className="sidebar__page-button"
            activeClassName="sidebar__active-btn">
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

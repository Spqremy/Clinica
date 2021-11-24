import React, { useState, useEffect } from "react";
import Axios from "axios";
import "./Tabel.css";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
//components
import Title from "../Title/Title/Title";
import Subtitle from "../Title/Subtitle/Subtitle";

export default function tabel() {
  const [patient, setPatient] = useState([]);
  let authtoken = localStorage.getItem("token");

  async function getPatients() {
    const serverResponse = await Axios.get("http://localhost:8080/patients", {
      headers: {
        Authorization: authtoken,
      },
    });

    setPatient(serverResponse.data);
  }
  for (let a of patient) {
    console.log(a.id);
  }

  useEffect(() => {
    getPatients();
  }, []);
  function renderPatient() {
    return patient.map((ceva) => {
      return (
        <tbody>
          <h4>{ceva.firstname}</h4>
          <th>{ceva.lastname}</th>
          <th>{ceva.sex}</th>
          <th>{ceva.age}</th>
          <th>{ceva.consultationdate}</th>
          <th>{ceva.city}</th>
          <th>{ceva.phone}</th>
        </tbody>
      );
    });
  }
  return (
    <div className="tabel">
      <div>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>First name</th>
              <th>Last name</th>
              <th>Sex</th>
              <th>Age</th>
              <th>Consultation date</th>
              <th>City</th>
              <th>Phone</th>
            </tr>
          </thead>

          {renderPatient()}
        </table>
      </div>
    </div>
  );
}
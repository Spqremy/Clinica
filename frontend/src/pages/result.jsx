import React, { useState, useEffect } from "react";
import Axios from "axios";
export default function result() {
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
  const onDelete = () => {
    Axios.delete(`http://localhost:8080/deletePatient/${id}`, {
      headers: {
        Authorization: authtoken,
      },
    })
      .then(() => {
        setPatient(
          patient.filter((a) => {
            return a._id != id;
          })
        );
      })
      .catch((error) => console.error(error));
  };

  return (
    <div>
      bv esti logat
      {patient.map((ceva) => (
        <div>
          {/* <button onClick={onDelete}>delete this one</button> */}
          <h4>{ceva.firstname}</h4>
          <h4>{ceva.lastname}</h4>
          <h4>{ceva.sex}</h4>
          <h4>{ceva.age}</h4>
          <h4>{ceva.city}</h4>
          <h4>{ceva.phone}</h4>
          <button>delete</button>
        </div>
      ))}
    </div>
  );
}
